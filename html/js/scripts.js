jQuery(function ($) {

    'use strict';

    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */

    $(window).ready(function() {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');
    });

    /* ---------------------------------------------- /*
     * Bootstrap Tooltip
    /* ---------------------------------------------- */

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });

    // -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------

    (function () {
        var nav = $('.navbar');
        var scrolled = false;

        $(window).scroll(function () {

            if (110 < $(window).scrollTop() && !scrolled) {
                nav.addClass('sticky animated fadeInDown').animate({ 'margin-top': '0px' });

                scrolled = true;
            }

            if (110 > $(window).scrollTop() && scrolled) {
                nav.removeClass('sticky animated fadeInDown').css('margin-top', '0px');

                scrolled = false;
            }
        });

    }());


    // -------------------------------------------------------------
    // Portfolio Carousel
    // -------------------------------------------------------------

    (function () {

        $('.fleet-carousel').owlCarousel({
            loop:true,
            margin:0,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        })


        // Navigation
        var owl = $('.fleet-carousel');
        owl.owlCarousel();

        // Go to the next item
        $('.fleet-carousel-navigation .next').on('click', function(){
            owl.trigger('next.owl.carousel');
        })

        // Go to the previous item
        $('.fleet-carousel-navigation .prev').on('click', function(){
            owl.trigger('prev.owl.carousel', [300]);
        });


    }());



    // -------------------------------------------------------------
    // Sticky Elements
    // -------------------------------------------------------------

    $(function () {

        $(".sticky-div").stick_in_parent({

            container: $(".sticky-container"),
            offset_top: 90
        });


    });


    // -------------------------------------------------------------
    // Menu Search Button
    // -------------------------------------------------------------

    $(function () {
        $('a[href="#search"]').on('click', function(event) {
            event.preventDefault();
            $('#search').addClass('open');
            $('#search > form > input[type="search"]').focus();
        });

        $('#search, #search button.close').on('click keyup', function(event) {
            if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
                $(this).removeClass('open');
            }
        });

    });

    // -------------------------------------------------------------
    // OffCanvas
    // -------------------------------------------------------------

    (function () {
        $('button.navbar-toggle').HippoOffCanvasMenu({

        documentWrapper: '#st-container',
        contentWrapper : '.st-content',
        position       : 'hippo-offcanvas-left',    // class name
        // opener         : 'st-menu-open',            // class name
        effect         : 'slide-in-on-top',             // class name
        closeButton    : '#off-canvas-close-btn',
        menuWrapper    : '.offcanvas-menu',                 // class name below-pusher
        documentPusher : '.st-pusher'

        });
        var ico = $('<i class="fa fa-caret-right"></i>');
        $('#offcanvasMenu li:has(ul) > a').append(ico);

        $('#offcanvasMenu > li:has(ul)').on('click',function(){
            $(this).toggleClass('open');
        });
    }());


    // -------------------------------------------------------------
    // Detect IE version
    // -------------------------------------------------------------
    (function () {
        function getIEVersion() {
            var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
            return match ? parseInt(match[1]) : false;
        }


        if( getIEVersion() ){
            $('html').addClass('ie'+getIEVersion());
        }


        if( $('html').hasClass('ie9') || $('html').hasClass('ie10')  ){

            $('.submenu-wrapper').each(function(){

               $(this).addClass('no-pointer-events');

            });

        }

    }());

    // ------------------------------------------------------------------
    // jQuery for back to Top
    // ------------------------------------------------------------------

    (function(){

          $('body').append('<div id="toTop"><i class="fa fa-angle-double-up"></i></div>');

            $(window).scroll(function () {
                if ($(this).scrollTop() != 0) {
                    $('#toTop').fadeIn();
                } else {
                    $('#toTop').fadeOut();
                }
            });

        $('#toTop').on('click',function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    }());

	// -----------------------------------------------------------------
	//STELLAR FOR BACKGROUND SCROLLING
	// ------------------------------------------------------------------

	$(window).load(function() {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

		}else {
		    $.stellar({
			    horizontalScrolling: false,
			    responsive: true
		    });
		}

	});

}); // JQuery end