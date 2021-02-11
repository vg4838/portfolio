$(window).on("load", function() {

	$(".loader .inner").fadeOut(500, function() {
		$(".loader").fadeOut(750);
	});

	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

});


$(document).ready(function() {
	$('#slides').superslides({
		animation:'fade',
		play:5000,
		pagination: false 

	});

	var typed = new Typed(".typed", {
		strings : ["Student at Rochester Institute of Technology.", "Software Engineer.", "Data Scientist."],
		startDelay: 1000,
		typeSpeed : 50,
		loop:true,
		showCursor:false
	});

	var owl = $('.owl-carousel');
	owl.owlCarousel({
	    items:4,
	    loop:true,
	    autoplay:true,
	    dots:true,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[1000])
	});
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	});

	var skillsTopOffset = $(".skillsSection").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;
	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

	        $('.chart').easyPieChart({
	            easing: 'easeInOut',
		        barColor: '#e8e8e8',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(percent/10);
		        }
	        });


		}


		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$(".counter").each(function() {
				var element = $(this);
				var endVal = parseFloat(element.text());
				console.log(endVal)
				element.countup(endVal, {decimalPlaces:2});
			})

			countUpFinished = true;

		}

	});


	$("[data-fancybox]").fancybox();


	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});

	$("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});

	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
	}
   
});