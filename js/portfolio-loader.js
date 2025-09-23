// Portfolio Content Loader
class PortfolioLoader {
    constructor() {
        this.data = null;
        this.init();
    }

    async init() {
        try {
            await this.loadPortfolioData();
            console.log('Portfolio data loaded successfully:', this.data);
            this.populateContent();
        } catch (error) {
            console.error('Error loading portfolio data:', error);
            // Fallback to embedded data if external file fails
            console.log('Using fallback data');
            this.data = this.getFallbackData();
            this.populateContent();
        }
    }

    async loadPortfolioData() {
        try {
            // Add cache-busting parameter to ensure fresh data
            const timestamp = new Date().getTime();
            const response = await fetch(`content/portfolio-data.json?v=${timestamp}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.data = await response.json();
        } catch (error) {
            console.error('Failed to load external portfolio data:', error);
            throw error;
        }
    }

    getFallbackData() {
        return {
            "hero": {
                "name": "Vivek Gupta",
                "title": "Software Engineer",
                "tagline": "Building scalable systems with Java, Python, React & AI where innovation meets intelligent automation",
                "profileImage": "img/professional-developer.jpg"
            },
            "about": {
                "story": "As a Full-Stack Engineer with AI expertise, I bridge the gap between traditional software development and intelligent automation. My journey spans 6+ years of architecting enterprise solutions that serve millions of users, while pioneering the integration of AI technologies into production systems.\n\nI specialize in building end-to-end intelligent applications - from designing ML-powered recommendation engines at Amazon to creating AI-driven developer tools that enhance productivity. My approach combines robust software engineering principles with cutting-edge AI capabilities, ensuring scalable and maintainable solutions.\n\nCurrently, I'm focused on leveraging Large Language Models and AI tools like Kiro and Claude to revolutionize how we build software. I believe the future lies in human-AI collaboration, where intelligent systems amplify our creativity and solve complex problems at unprecedented scale.",
                "resumeLink": "assets/Vivek_Gupta_Resume.pdf",
                "profileImage": "img/vivek_profile.jpg"
            },
            "experience": [
                {
                    "company": "Amazon",
                    "period": "2022-Present",
                    "description": "Built end-to-end scalable features with AWS services, improved recommendation algorithms for series use cases",
                    "links": [
                        {
                            "title": "Book Recommendations",
                            "url": "https://www.amazon.com/amz-books/store"
                        },
                        {
                            "title": "Audible Integration", 
                            "url": "https://www.amazon.com/dp/B074BYZBPD?binding=audio_download"
                        }
                    ]
                },
                {
                    "company": "Skillz",
                    "period": "2021",
                    "description": "Developed core features for competitive mobile gaming platform's developer console including analytics dashboards, learning center, and RBAC systems",
                    "links": [
                        {
                            "title": "Developer Console",
                            "url": "https://developers.skillz.com/dashboard"
                        }
                    ]
                },
                {
                    "company": "Rochester Institute of Technology",
                    "period": "2019-2022",
                    "description": "Built web-based data science learning platform enabling non-technical users to perform data mining tasks without coding",
                    "links": []
                },
                {
                    "company": "Datacore Software",
                    "period": "2021",
                    "description": "Built ETL pipelines and analytics dashboards for enterprise bug tracking systems",
                    "links": []
                },
                {
                    "company": "BNP Paribas",
                    "period": "2016-2019",
                    "description": "Optimized automation testing frameworks and developed reusable API libraries",
                    "links": []
                }
            ],
            "projects": [
                {
                    "id": "bnge-movies",
                    "title": "BNGE-MOVIES",
                    "description": "A React and Redux app deployed on AWS using Terraform, integrated with CircleCI for CI/CD tasks and dockerized. Features Netflix-like movie browsing interface.",
                    "technologies": ["React", "Redux", "Docker", "CircleCI", "Terraform", "AWS CloudFront", "S3", "Slack Integration"],
                    "image": "img/portfolio/movie.png",
                    "thumbnail": "img/portfolio/thumbnails/movie-square.png",
                    "liveDemo": "https://d10jggv8zyjv7v.cloudfront.net/",
                    "github": "https://github.com/vg4838/bnge-watch",
                    "certificate": "assets/circleci_certificate.jpg",
                    "category": "web"
                },
                {
                    "id": "crwn-clothing",
                    "title": "CRWN-CLOTHING",
                    "description": "Full-stack clothing e-commerce web application with add to cart, checkout features, Firebase authentication, and Stripe payment gateway.",
                    "technologies": ["React", "Redux", "Redux-Saga", "Firebase", "Stripe API", "GraphQL", "Context API", "Hooks"],
                    "image": "assets/crwn-website.png",
                    "thumbnail": "img/portfolio/thumbnails/crwn-square.png",
                    "liveDemo": "https://crwn-clothing-hub.herokuapp.com/",
                    "github": "https://github.com/vg4838/crwn-clothing",
                    "certificate": "https://udemy-certificate.s3.amazonaws.com/image/UC-23bbf909-b324-44d3-823b-0443dc752a92.jpg",
                    "category": "web"
                },
                {
                    "id": "covid-prediction",
                    "title": "COVID-19 PREDICTION",
                    "description": "Comprehensive data analysis project merging 3 data sources, performing EDA and predicting affected cases using ARIMA and decision tree ML algorithms.",
                    "technologies": ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Cufflinks"],
                    "image": "img/portfolio/covid19.png",
                    "thumbnail": "img/portfolio/thumbnails/covid19-square.png",
                    "liveDemo": "",
                    "github": "https://github.com/vg4838/COVID-19-EDA-and-future-forecasting",
                    "category": "data-science"
                },
                {
                    "id": "data-visualization",
                    "title": "DATA VISUALIZATION",
                    "description": "Exploratory Data Analysis and predictions on multiple datasets including bike purchases, HR analysis, and attrition prediction.",
                    "technologies": ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Cufflinks"],
                    "image": "img/portfolio/eda.png",
                    "thumbnail": "img/portfolio/thumbnails/eda-square.png",
                    "liveDemo": "",
                    "github": "https://github.com/vg4838/Exploratory-Data-Analysis",
                    "category": "data-science"
                },
                {
                    "id": "sentiment-analysis",
                    "title": "SENTIMENT ANALYSIS",
                    "description": "Flask web application that retrieves product reviews based on user search and performs sentiment analysis using KNN machine learning algorithm.",
                    "technologies": ["Python", "Flask", "NLTK", "Scikit-learn", "Pandas", "NumPy", "HTML", "CSS"],
                    "image": "img/portfolio/review.png",
                    "thumbnail": "img/portfolio/thumbnails/review-square.png",
                    "liveDemo": "",
                    "github": "https://github.com/vg4838/webscraping-of-flipkart-products-and-sentiment-analysis",
                    "category": "data-science"
                }
            ],
            "certifications": [
                {
                    "title": "BNP Paribas Outstanding Performance Award",
                    "description": "Recognition for exceptional work",
                    "image": "img/portfolio/bnp-certificate.png",
                    "link": "assets/bnp-certificate-og.png"
                },
                {
                    "title": "Oracle Certified Associate Java Programmer (OCAJP)",
                    "description": "Java programming certification",
                    "image": "assets/ocajp.png",
                    "link": "assets/OCAJP_Result.pdf"
                },
                {
                    "title": "Complete React Developer Course",
                    "description": "Comprehensive React 18 certification covering enterprise-level application development, Redux/Context API, GraphQL, Firebase integration, Progressive Web Apps, and modern JavaScript ES6+",
                    "image": "assets/complete_react_developer.jpg",
                    "link": "https://udemy-certificate.s3.amazonaws.com/image/UC-23bbf909-b324-44d3-823b-0443dc752a92.jpg"
                },
                {
                    "title": "React with CircleCI, AWS & Docker Course",
                    "description": "Advanced DevOps certification covering CI/CD pipelines, AWS services with Terraform, Docker containerization, S3/CloudFront deployment, Slack integration, and automated staging/production environments",
                    "image": "img/portfolio/circleci.png",
                    "link": "assets/circleci_certificate.jpg"
                }
            ],
            "skills": {
                "languages": ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
                "frontend": ["React", "Redux", "HTML5", "CSS3", "Angular"],
                "backend": ["Node.js", "Flask", "Django", "RESTful APIs", "Spring Boot", "Stripe API"],
                "cloudDevOps": ["AWS Lambda", "AWS S3", "AWS EC2", "Docker", "Kubernetes", "Terraform", "CircleCI", "Jenkins"],
                "aiMlTools": ["Kiro", "Kiro IDE", "Claude", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
                "databases": ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Redis", "Elasticsearch"]
            },
            "contact": {
                "email": "vg4838@g.rit.edu",
                "location": "Seattle, WA",
                "linkedin": "https://www.linkedin.com/in/vg0708/",
                "github": "https://github.com/vg4838/",
                "instagram": "https://www.instagram.com/vivek2322/"
            }
        };
    }

    populateContent() {
        console.log('Starting to populate content...');
        try {
            this.populateHero();
            console.log('Hero populated successfully');
            this.populateAbout();
            console.log('About populated successfully');
            this.populateWork();
            console.log('Work populated successfully');
            this.populateProjects();
            console.log('Projects populated successfully');
            this.populateSkills();
            console.log('Skills populated successfully');
            this.populateContact();
            console.log('Contact populated successfully');
        } catch (error) {
            console.error('Error in populateContent:', error);
        }
    }

    populateHero() {
        const { hero } = this.data;
        
        const heroName = document.getElementById('hero-name');
        const heroTitle = document.getElementById('hero-title');
        const heroTagline = document.getElementById('hero-tagline');
        
        if (heroName) heroName.textContent = hero.name;
        if (heroTitle) heroTitle.textContent = hero.title;
        if (heroTagline) heroTagline.textContent = hero.tagline;
        
        // Set resume links
        const resumeBtn = document.getElementById('resume-btn');
        if (resumeBtn) {
            resumeBtn.href = this.data.about.resumeLink;
            resumeBtn.download = 'Vivek_Gupta_Resume.pdf';
        }
    }

    populateAbout() {
        const { about } = this.data;
        
        const storyElement = document.getElementById('about-story');
        if (storyElement) {
            const paragraphs = about.story.split('\n\n');
            storyElement.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
        }
        
        // Set resume link in about section
        const aboutResumeBtn = document.getElementById('about-resume-btn');
        if (aboutResumeBtn) {
            aboutResumeBtn.href = about.resumeLink;
            aboutResumeBtn.download = 'Vivek_Gupta_Resume.pdf';
        }

        // Add profile image to about section if available
        if (about.profileImage) {
            const aboutImageContainer = document.querySelector('.about-image');
            if (aboutImageContainer) {
                aboutImageContainer.innerHTML = `
                    <img src="${about.profileImage}" alt="Vivek Gupta" class="about-img">
                `;
            }
        }
    }

    populateWork() {
        const { experience } = this.data;
        const workTimeline = document.getElementById('work-timeline');
        
        if (workTimeline) {
            workTimeline.innerHTML = experience.map((exp, index) => `
                <div class="work-item" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="work-marker ${index === 0 ? 'current' : ''}"></div>
                    <div class="work-content">
                        <div class="work-header">
                            <h3>${exp.company}</h3>
                            <span class="work-period">${exp.period}</span>
                        </div>
                        <p class="work-description">${exp.description}</p>
                        ${exp.links.length > 0 ? `
                            <div class="work-links">
                                ${exp.links.map(link => `
                                    <a href="${link.url}" class="work-link" target="_blank" rel="noopener noreferrer">
                                        <i class="fas fa-external-link-alt"></i>
                                        ${link.title}
                                    </a>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `).join('');
        }
    }

    populateProjects() {
        const { projects, certifications } = this.data;
        const projectsGrid = document.getElementById('projects-grid');
        
        if (projectsGrid) {
            // Combine projects and certifications
            const allItems = [
                ...projects.map(p => ({ ...p, type: 'project' })),
                ...certifications.map(c => ({ ...c, type: 'certification', category: 'certificates' }))
            ];
            
            projectsGrid.innerHTML = allItems.map((item, index) => {
                if (item.type === 'project') {
                    return `
                        <div class="project-card" data-category="${item.category}" data-aos="fade-up" data-aos-delay="${index * 100}">
                            <div class="project-image">
                                <img src="${item.image}" alt="${item.title}" loading="lazy">
                                <div class="project-overlay">
                                    <div class="project-links">
                                        ${item.liveDemo ? `
                                            <a href="${item.liveDemo}" class="project-link" data-tooltip="Live Demo" target="_blank" rel="noopener noreferrer">
                                                <i class="fas fa-external-link-alt"></i>
                                            </a>
                                        ` : ''}
                                        ${item.github ? `
                                            <a href="${item.github}" class="project-link" data-tooltip="View Code" target="_blank" rel="noopener noreferrer">
                                                <i class="fab fa-github"></i>
                                            </a>
                                        ` : ''}
                                        ${item.certificate ? `
                                            <a href="${item.certificate}" class="project-link" data-tooltip="Certificate" target="_blank" rel="noopener noreferrer">
                                                <i class="fas fa-certificate"></i>
                                            </a>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                            <div class="project-content">
                                <div class="project-header">
                                    <h3>${item.title}</h3>
                                    <span class="project-type">${item.category === 'web' ? 'Web App' : 'Data Science'}</span>
                                </div>
                                <p class="project-description">${item.description}</p>
                                <div class="project-tech">
                                    ${item.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                    `;
                } else {
                    return `
                        <div class="project-card certification-card" data-category="certificates" data-aos="fade-up" data-aos-delay="${index * 100}">
                            ${item.image ? `
                                <div class="project-image">
                                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                                    <div class="project-overlay">
                                        <div class="project-links">
                                            <a href="${item.link}" class="project-link" data-tooltip="View Certificate" target="_blank" rel="noopener noreferrer">
                                                <i class="fas fa-certificate"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ` : ''}
                            <div class="project-content">
                                <div class="project-header">
                                    <h3>${item.title}</h3>
                                    <span class="project-type">Certificate</span>
                                </div>
                                <p class="project-description">${item.description}</p>
                            </div>
                        </div>
                    `;
                }
            }).join('');

            // Use requestAnimationFrame to ensure DOM is fully rendered before initializing filtering
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    this.initProjectFiltering();
                });
            });
        }
    }

    initProjectFiltering() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter projects
                projectCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = '';  // Remove inline style to let CSS grid take over
                        card.style.animation = 'fadeInUp 0.6s ease-out';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    populateSkills() {
        const { skills } = this.data;
        const skillsGrid = document.getElementById('skills-grid');
        
        if (skillsGrid) {
            const skillCategories = [
                { 
                    title: 'Programming Languages', 
                    icon: 'fas fa-code', 
                    skills: skills.languages
                },
                { 
                    title: 'Frontend Development', 
                    icon: 'fas fa-laptop-code', 
                    skills: skills.frontend
                },
                { 
                    title: 'Backend & APIs', 
                    icon: 'fas fa-server', 
                    skills: skills.backend
                },
                { 
                    title: 'Cloud & DevOps', 
                    icon: 'fas fa-cloud', 
                    skills: skills.cloudDevOps || skills.cloudTechnologies || skills.devOps
                },
                { 
                    title: 'AI & ML Tools', 
                    icon: 'fas fa-brain', 
                    skills: skills.aiMlTools || skills.aiTools || skills.dataScience
                },
                { 
                    title: 'Databases', 
                    icon: 'fas fa-database', 
                    skills: skills.databases
                }
            ];

            skillsGrid.innerHTML = skillCategories.map((category, index) => `
                <div class="skill-category" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="category-header">
                        <div class="category-icon">
                            <i class="${category.icon}"></i>
                        </div>
                        <h3>${category.title}</h3>
                    </div>
                    <div class="skills-list">
                        ${category.skills.map(skill => `
                            <span class="skill-tag">${skill}</span>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }
    }

    populateContact() {
        const { contact } = this.data;
        
        const contactLocation = document.getElementById('contact-location');
        if (contactLocation) {
            contactLocation.textContent = contact.location;
        }
        
        const contactLinks = document.getElementById('contact-links');
        if (contactLinks) {
            contactLinks.innerHTML = `
                <a href="mailto:${contact.email}" class="contact-link" data-tooltip="Email">
                    <i class="fas fa-envelope"></i>
                </a>
                <a href="${contact.linkedin}" class="contact-link" data-tooltip="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="${contact.github}" class="contact-link" data-tooltip="GitHub" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-github"></i>
                </a>
                <a href="${contact.instagram}" class="contact-link" data-tooltip="Instagram" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-instagram"></i>
                </a>
            `;
        }
    }
}

// Initialize portfolio loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioLoader();
});

// Add smooth scrolling for navigation links
document.addEventListener('click', (e) => {
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

// Add animation classes for filtered projects
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
