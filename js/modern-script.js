// Modern Portfolio JavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeLoader();
    initializeNavigation();
    initializeAnimations();
    initializeCodeEditor();
    initializeSkillBars();
    initializeCounters();
    initializeContactForm();
    initializeScrollEffects();
    initializeParallax();
});

// Loading Screen
function initializeLoader() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after page load
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    });
}

// Navigation
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 22, 40, 0.98)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'rgba(10, 22, 40, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animations
function initializeAnimations() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true,
            offset: 100
        });
    }

    // Typing animation is now handled by portfolio-loader.js

    // Floating elements animation
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((element, index) => {
        const speed = element.getAttribute('data-speed') || 2;
        let position = 0;
        
        setInterval(() => {
            position += speed * 0.1;
            element.style.transform = `translateY(${Math.sin(position) * 20}px) rotate(${position * 2}deg)`;
        }, 50);
    });
}

// Code Editor Animation
function initializeCodeEditor() {
    const manualLines = document.querySelectorAll('.manual-phase');
    const terminalPrompt = document.getElementById('terminal-prompt');
    const aiLines = document.querySelectorAll('.ai-phase');
    const developerName = document.getElementById('developer-name');
    
    if (manualLines.length === 0) return;
    
    // Store original text content for looping
    manualLines.forEach(line => {
        if (!line.getAttribute('data-original-text')) {
            line.setAttribute('data-original-text', line.innerHTML);
        }
    });
    
    // Start animation after a delay
    setTimeout(() => {
        animateManualCoding(manualLines, terminalPrompt, aiLines, developerName);
    }, 1500);
}

function animateManualCoding(manualLines, terminalPrompt, aiLines, developerName) {
    let currentLine = 0;
    
    function typeNextManualLine() {
        if (currentLine >= manualLines.length) {
            // Manual coding complete, show terminal prompt quickly
            setTimeout(() => {
                showTerminalPrompt(terminalPrompt, aiLines, developerName);
            }, 300);
            return;
        }
        
        const line = manualLines[currentLine];
        const text = line.innerHTML;
        
        // Clear the line and add typing class
        line.innerHTML = '';
        line.classList.add('typing');
        line.style.display = 'block';
        line.style.opacity = '1';
        
        // Type out the line character by character
        let charIndex = 0;
        const typeChar = () => {
            if (charIndex < text.length) {
                // Handle HTML tags properly
                if (text[charIndex] === '<') {
                    const tagEnd = text.indexOf('>', charIndex);
                    if (tagEnd !== -1) {
                        line.innerHTML += text.substring(charIndex, tagEnd + 1);
                        charIndex = tagEnd + 1;
                    } else {
                        line.innerHTML += text[charIndex];
                        charIndex++;
                    }
                } else {
                    line.innerHTML += text[charIndex];
                    charIndex++;
                }
                
                // Much faster typing to reach 3 seconds total
                const delay = Math.random() * 30 + 20; // 20-50ms (much faster)
                setTimeout(typeChar, delay);
            } else {
                // Line complete
                line.classList.remove('typing');
                line.classList.add('complete');
                
                // Move to next line quickly
                setTimeout(() => {
                    currentLine++;
                    typeNextManualLine();
                }, Math.random() * 200 + 100); // 100-300ms (much faster)
            }
        };
        
        typeChar();
    }
    
    typeNextManualLine();
}

function showTerminalPrompt(terminalPrompt, aiLines, developerName) {
    // Fade out and completely hide manual lines first
    const manualLines = document.querySelectorAll('.manual-phase');
    manualLines.forEach(line => {
        line.style.animation = 'fadeOut 0.5s ease-out forwards';
    });
    
    // Show terminal prompt and completely remove manual lines after fade
    setTimeout(() => {
        // Completely hide manual lines
        manualLines.forEach(line => {
            line.style.display = 'none';
            line.style.opacity = '0';
            line.classList.remove('typing', 'complete');
        });
        
        terminalPrompt.classList.add('show');
        
        // Start AI code generation after prompt is shown and manual lines are cleared
        setTimeout(() => {
            // Hide the terminal prompt before showing AI lines
            terminalPrompt.classList.remove('show');
            terminalPrompt.style.opacity = '0';
            
            // Start AI generation after prompt is hidden
            setTimeout(() => {
                animateAIGeneration(aiLines, developerName);
            }, 300);
        }, 5000); // Changed from 1500ms to 5000ms (5 seconds)
    }, 600);
}

function animateAIGeneration(aiLines, developerName) {
    let currentLine = 0;
    
    function showNextAILine() {
        if (currentLine >= aiLines.length) {
            // All AI lines shown, show developer name briefly then restart
            setTimeout(() => {
                if (developerName) {
                    developerName.classList.add('show');
                }
                
                // Start the loop restart after showing developer name
                setTimeout(() => {
                    restartAnimation();
                }, 2000); // Show developer name for 2 seconds
            }, 800);
            return;
        }
        
        const line = aiLines[currentLine];
        
        // Show line with rapid typing effect
        line.classList.add('rapid-type');
        line.style.opacity = '1';
        
        // Move to next line quickly (simulating AI speed)
        setTimeout(() => {
            currentLine++;
            showNextAILine();
        }, Math.random() * 200 + 100); // 100-300ms (much faster than manual)
    }
    
    showNextAILine();
}

function restartAnimation() {
    // Reset all elements to initial state
    const manualLines = document.querySelectorAll('.manual-phase');
    const terminalPrompt = document.getElementById('terminal-prompt');
    const aiLines = document.querySelectorAll('.ai-phase');
    const developerName = document.getElementById('developer-name');
    
    // Hide and reset all elements
    manualLines.forEach(line => {
        line.style.display = 'none';
        line.style.opacity = '0';
        line.classList.remove('typing', 'complete');
        line.innerHTML = line.getAttribute('data-original-text') || line.innerHTML;
    });
    
    aiLines.forEach(line => {
        line.classList.remove('rapid-type');
        line.style.opacity = '0';
        line.style.display = 'none';
    });
    
    if (terminalPrompt) {
        terminalPrompt.classList.remove('show');
        terminalPrompt.style.opacity = '0';
    }
    
    if (developerName) {
        developerName.classList.remove('show');
    }
    
    // Restart the animation after a brief pause
    setTimeout(() => {
        animateManualCoding(manualLines, terminalPrompt, aiLines, developerName);
    }, 1000);
}

// Skill Bars Animation
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.getElementById('skills');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    };

    // Intersection Observer for skill bars
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(animateSkillBars, 500);
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
}

// Counter Animation
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    };

    // Intersection Observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Contact Form with EmailJS
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    // Initialize EmailJS with your public key
    if (typeof emailjs !== 'undefined') {
        emailjs.init('mcBmzJIQbimZnpXFp');
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Prepare template parameters to match your EmailJS template
            const templateParams = {
                name: name,
                email: email,
                subject: subject,
                message: message,
                to_name: 'Vivek Gupta'
            };
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            // Check if EmailJS is available
            if (typeof emailjs === 'undefined') {
                showNotification('Email service is not available. Please try again later.', 'error');
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                return;
            }
            
            // Send email using EmailJS with detailed error handling
            console.log('Attempting to send email with params:', templateParams);
            
            emailjs.send('service_shwskds', 'template_6qc459r', templateParams)
                .then(function(response) {
                    console.log('Email sent successfully:', response);
                    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                    contactForm.reset();
                })
                .catch(function(error) {
                    console.error('Email sending failed:', error);
                    console.error('Error details:', error.text || error.message || error);
                    
                    // More specific error messages
                    let errorMessage = 'Failed to send message. ';
                    if (error.status === 400) {
                        errorMessage += 'Invalid request. Please check your input.';
                    } else if (error.status === 401) {
                        errorMessage += 'Authentication failed. Please contact the site owner.';
                    } else if (error.status === 403) {
                        errorMessage += 'Service access denied. Please contact the site owner.';
                    } else if (error.status === 404) {
                        errorMessage += 'Email service not found. Please contact the site owner.';
                    } else {
                        errorMessage += 'Please try again or contact me directly at vivekgupta50455@gmail.com';
                    }
                    
                    showNotification(errorMessage, 'error');
                })
                .finally(function() {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                });
        });
    }
}

// Scroll Effects
function initializeScrollEffects() {
    // Parallax scroll for hero section
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (hero && scrolled < hero.offsetHeight) {
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    });

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.timeline-item, .project-card, .achievement-category');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        revealObserver.observe(element);
    });
}

// Parallax Effect
function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.2);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Utility Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Smooth scroll for all anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(function() {
    // Scroll-based animations and effects
    const scrolled = window.pageYOffset;
    
    // Update progress indicator if exists
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    }
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'img/vivek_profile.jpg',
        'img/portfolio/covid19.png',
        'img/portfolio/review.png',
        'img/portfolio/movie.png',
        'img/portfolio/eda.png'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize image preloading
preloadImages();

// Add scroll progress indicator
function addScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #00D4FF 0%, #0099CC 100%);
        z-index: 10001;
        transition: width 0.1s ease-out;
    `;
    document.body.appendChild(progressBar);
}

// Initialize scroll progress
addScrollProgress();

// Error handling for missing elements
window.addEventListener('error', function(e) {
    console.warn('Portfolio script error:', e.message);
});

// Console welcome message
console.log(`
🚀 Welcome to Vivek Gupta's Portfolio!
💼 Full Stack Software Developer at Amazon
🔧 Built with modern web technologies
📧 Contact: vg4838@g.rit.edu
🔗 LinkedIn: https://www.linkedin.com/in/vg0708/
⭐ GitHub: https://github.com/vg4838/
`);
