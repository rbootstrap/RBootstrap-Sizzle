jQuery(document).ready(function($){
	
	"use strict";
	
	/*==========================*/	
	/******** Preloader ******/	
	/*==========================*/
	$('.preloader').delay(350).fadeOut('slow');
	
	/*==========================*/	
	/***** Smooth Scrolling *****/	
	/*==========================*/
	// Add smooth scrolling to all links in navbar + Section Links and the Slider
	$(".navbar a.internal, section a.internal, .apple-slider a.internal").on('click', function(event) {
		// Prevent default anchor click behavior
		event.preventDefault();
	
		// Store hash
		var hash = this.hash;
	
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (1500) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 1500, function(){
		// Add hash (#) to URL when done scrolling (default click behavior)
		window.location.hash = hash;
		});
	});
	
	/*==========================*/	
	/********* Waypoints ********/	
	/*==========================*/
	var scrolling = false;
	function onScrollInit( items, trigger ) {
		items.each( function() {
		var osElement = $(this),
		osAnimationClass = osElement.attr('data-os-animation'),
		osAnimationDuration = osElement.attr('data-os-animation-duration');
	
		osElement.css({
			'-webkit-animation-duration':  osAnimationDuration,
			'-moz-animation-duration':     osAnimationDuration,
			'animation-duration':          osAnimationDuration
		});
	
		var osTrigger = ( trigger ) ? trigger : osElement;
			
		osTrigger.waypoint(function() {
			osElement.addClass('animated').addClass(osAnimationClass);
		},{
			triggerOnce: true,
			offset: '700'
			});
		});
	}
	
	$(window).on('scroll', function(){
		if(!scrolling){
			onScrollInit( $('.os-animation') );
			scrolling = true;
		}
	});
	
	onScrollInit( $('.os-animation') );
	onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
	
	/*==========================*/	
	/********* Main Slider ******/	
	/*==========================*/
	$('.apple-slider').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		speed: 300,
		pauseOnHover: false,
		slidesToShow: 1,
		adaptiveHeight: false,
		fade:false,
	});
	
	/*==========================*/	
	/**** Testimonial Manager ***/	
	/*==========================*/
	$('.testimonial_manager_text').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		speed: 300,
		pauseOnHover: false,
		slidesToShow: 1,
		adaptiveHeight: false,
		fade:false,
	});
	
	/*==========================*/	
	/******* Our Menu Area ******/	
	/*==========================*/
	$('.our_menu_content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.our_menu_navigator',
		adaptiveHeight: true
	});
	
	$('.our_menu_navigator').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.our_menu_content',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true
			}
		},
		{
			breakpoint: 600,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});

	/*==========================*/	
	/******** Back To Top *******/	
	/*==========================*/
	var offset = 220;
	var duration = 1500;
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.back-to-top').fadeIn(duration);
		} else {
			jQuery('.back-to-top').fadeOut(duration);
		}
	});
					
	jQuery('.back-to-top').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	})

	/*=================================================================*/	
	/******** Fix Placeholder Issue in IE9 and other browsers *******/	
	/*=================================================================*/
	$('input, textarea').placeholder();
	
});	

	/*==========================*/	
	/******** Google Map *******/	
	/*==========================*/
	if($('#map-location').length){
		var map;
		map = new GMaps({
			el: '#map-location',
			zoom: 15,
			scrollwheel:false,
			//Set Latitude and Longitude Here
			lat: 34.4143704,
			lng: -119.6967133
		});
		  
		//Add map Marker
		map.addMarker({
			icon: 'images/icon/location_icon.png',
			lat: 34.4143704,
			lng: -119.6967133,
			infoWindow: {
				content: '<p class="map-info text-center"><strong>Sizzle Tacquiera</strong> <br/>310 Chapala St, Santa Barbara, CA 93101<br/> +1 805-966-9180 </p>'
			}
		});
	}
	



