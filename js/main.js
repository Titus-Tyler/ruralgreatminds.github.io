(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
        
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    
    // Main carousel
    $(".carousel .owl-carousel").owlCarousel({
        autoplay: true,
        slideTransition: 'linear',
        items: 1,
        smartSpeed: 300,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });
    
    
    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });
    
    
    // Beneficiaries Carousel Implementation
(function($) {
    "use strict";
    
    // Carousel Configuration and Setup
    const initBeneficiariesCarousel = () => {
        const $carousel = $(".beneficiaries-carousel");
        const $container = $carousel.find(".carousel-container");
        const $cards = $carousel.find(".beneficiary-card");
        const cardWidth = $cards.first().outerWidth(true);
        const visibleCards = 3;
        let currentIndex = 0;
        
        // Initialize first three cards as active
        $cards.slice(0, visibleCards).addClass('active');
        
        // Set initial container width and cards position
        // $container.css({
        //     width: `${cardWidth * $cards.length}px`,
        //     display: 'flex',
        //     transition: 'transform 0.5s ease-in-out'
        // });
        
        // Navigation function
        const slideTo = (index) => {
            if (index < 0 || index > $cards.length - visibleCards) return;
            
            currentIndex = index;
            const translateX = -currentIndex * cardWidth;
            
            // Move the container
            $container.css('transform', `translateX(${translateX}px)`);
            
            // Update active states
            $cards.removeClass('active');
            $cards.slice(currentIndex, currentIndex + visibleCards).addClass('active');
            
            // Update indicators
            updateIndicators();
        };
        
        // Navigation Arrows Event Handlers
        $carousel.find('.carousel-arrow.prev').on('click', () => {
            slideTo(currentIndex - 1);
        });
        
        $carousel.find('.carousel-arrow.next').on('click', () => {
            slideTo(currentIndex + 1);
        });
        
        // Setup Indicators
        const totalSlides = $cards.length - visibleCards + 1;
        const $indicators = $carousel.find('.carousel-indicators');
        
        // Create indicators dynamically
        for (let i = 0; i < totalSlides; i++) {
            $indicators.append(
                $('<button>')
                    .addClass('indicator')
                    .attr({
                        'aria-label': `Go to slide ${i + 1}`,
                        'data-slide': i
                    })
            );
        }
        
        // Update indicators function
        const updateIndicators = () => {
            $indicators.find('.indicator').removeClass('active')
                .eq(currentIndex).addClass('active');
        };
        
        // Initialize first indicator as active
        updateIndicators();
        
        // Indicator click handlers
        $indicators.on('click', '.indicator', function() {
            const index = $(this).data('slide');
            slideTo(index);
        });
        
        // Auto-slide functionality
        let autoSlideTimer;
        
        const startAutoSlide = () => {
            autoSlideTimer = setInterval(() => {
                const nextIndex = (currentIndex + 1) % totalSlides;
                slideTo(nextIndex);
            }, 3000); // Slide every 3 seconds
        };
        
        const stopAutoSlide = () => {
            clearInterval(autoSlideTimer);
        };
        
        // Start auto-sliding
        // startAutoSlide();
        
        // Pause on hover
        $carousel.hover(stopAutoSlide, startAutoSlide);
        
        // Update on window resize
        $(window).on('resize', _.debounce(() => {
            const newCardWidth = $cards.first().outerWidth(true);
            if (newCardWidth !== cardWidth) {
                location.reload();
            }
        }, 250));
    };
    
    // Initialize when document is ready
    $(document).ready(function() {
        initBeneficiariesCarousel();
    });
    
})(jQuery);
    
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Related post carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);

