if (typeof themeConfig == "undefined") {
    themeConfig = {};
  }

  var ghosthunter_key = themeConfig.ghostSearchKey;

(function($) {
    "use strict";
// ================================
// Theme Options
// ================================

    // Fixed Header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 90) {
            $(".header-navigation").addClass("fixed-nav");
        } else {
            $(".header-navigation").removeClass("fixed-nav");
        }
    });
    // Preloader
    if ($('.loading-main').length > 0) {
        $(window).on('load', function() {
            $('.loading-main').fadeOut();
            $('.pre-loader').delay(350).fadeOut("slow", 0.0);
            $('body').css({
                'overflow-y': 'scroll'
            });
        });
    }
    // Responsive menu
    $('.slimmenu').slimmenu({
        resizeWidth: '992',
        collapserTitle: '',
        animSpeed: 'fast',
        easingEffect: null,
        indentChildren: true,
    });
    // Slider Carousel
 
    // Company Carousel
 
    // Testimonial Carousel
 
    
    // Parallax Window
    
  
    // Wow Animation
     var wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       10,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
    // Video Modal
    if ($('.popup-youtube, .popup-vimeo, .popup-gmaps').length > 0) {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true,
        });
    }
 
       // Slider Carousel
       if ($('.slider-carousel').length > 0) {
        $('.slider-carousel').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplay:true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                }
            }
        })
    }  
    // Home Top
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 1000,
        $back_to_top = $('.home-top');
        $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });
    
// Add smooth scrolling to all links
$("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
 
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});

  // Search

  var searchHint = '';
  if (typeof themeConfig.searchHint !== 'undefined' && themeConfig.searchHint != '') {
    $('.search-input').attr('placeholder', themeConfig.searchHint);
  }

  var includeBodyInSearch = true;
  if (typeof themeConfig.includeBodyInSearch !== 'undefined' && themeConfig.includeBodyInSearch != '' && typeof themeConfig.includeBodyInSearch === "boolean") {
    includeBodyInSearch = themeConfig.includeBodyInSearch;
  }

  var searchField = $('.search-input').ghostHunter({
    results: '.search-results',
    onKeyUp: true,
    displaySearchInfo: false,
    includebodysearch: includeBodyInSearch,
    result_template: "<a id='gh-id-{{ref}}' class='gh-search-item' href='{{link}}'><h2 class='search-post-title'>{{title}}</h2><h6 class='search-post-link'>{{link}}</h6> <p class='search-post-desc'>{{description}}</p></a>",
    onComplete: function(results) {
      $('.search-results').fadeIn();
    }
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      searchField.clear();
      $('.search-input').val('').blur();
      $('.search-results').fadeOut();
    }
  });

  
    $('.print-link').on( 'click', function() {
        window.print();
      });


})(jQuery);

 