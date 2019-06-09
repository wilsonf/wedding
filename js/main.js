;(function () {
	
	'use strict';

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('#page').hasClass('offcanvas') ) {

    			$('#page').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
	    	}
	    }
		});

		$(document).scroll(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('#page').hasClass('offcanvas') ) {

    			$('#page').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
	    	}
	    }
		});
	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.addClass('js-fh5co-nav-jump')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);

			if ( $('#page').hasClass('offcanvas') ) {
				$('#page').removeClass('offcanvas');
			} else {
				$('#page').addClass('offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};

	var smoothScrolling = function() {
		// smooth scrolling
        $(function () {
	      $(document).scroll(function () {
	        var $nav = $(".fh5co-nav");
	        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	      });
	    });
    
    	$(".fh5co-nav ul li a[href^='#']").on('click', function(e) {
	   		// prevent default anchor click behavior
	   		e.preventDefault();
		
	   		// store hash
	   		var hash = this.hash;

	   		// animate
	   		$('html, body').animate({
	   		    scrollTop: $(hash).offset().top
	   		  }, 800, function(){

	   		    // when done, add hash to url
	   		    // (default click behaviour)
	   		    window.location.hash = hash;
		     });
	    });
	}

	var jumpMenu = function() {

		$('body').on('click', '.js-fh5co-nav-jump', function(event){
			var $this = $(this);


		if ( $('body').hasClass('overflow offcanvas') ) {
			$('body').removeClass('overflow offcanvas');
		}
		$this.toggleClass('active');
		$('.js-fh5co-nav-toggle').toggleClass('active')

		//    // store hash
		//    var hash = $this.get('a').hash;

		//    // animate
		//    $('html, body').animate({
		//        scrollTop: $(hash).offset().top
		//      }, 800, function(){

		//        // when done, add hash to url
		//        // (default click behaviour)
		//        window.location.hash = hash;
		//      });
		});
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
			autoplay: true
		});
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	var rsvpSubmission = function() {
		const scriptURL ="https://script.google.com/macros/s/AKfycby5_pb1AcpgiIOaT2W_7jvsORvNFTpUDbE9lwCxa3TbCUJBY_I/exec"
		$('#submit-rsvp').on('click', function(event){
	  	$.ajax({
		  type: "POST",
		  url: scriptURL,
		  data: $("#rsvp-submit-form").serialize(),
		  success: function(data) {
		  	$("#rsvp-modal-success").show()
		  },
   		  dataType: 'json',
		});
		event.preventDefault()
	  });
	}

	
	$(function(){
		mobileMenuOutsideClick();
		parallax();
		offcanvasMenu();
		smoothScrolling();
		burgerMenu();
		jumpMenu();
		contentWayPoint();
		dropdown();
		testimonialCarousel();
		goToTop();
		loaderPage();
		counter();
		counterWayPoint();
		rsvpSubmission();
	});


}());
