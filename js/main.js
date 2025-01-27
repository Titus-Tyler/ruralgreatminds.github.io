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
    
    const initBeneficiariesCarousel = () => {
        const $carousel = $(".beneficiaries-carousel");
        const $container = $carousel.find(".carousel-container");
        const $cards = $carousel.find(".beneficiary-card");
        const visibleCards = 3;
        let currentIndex = 0;
        
        // Initial setup
        $container.css({
            display: 'flex',
            justifyContent: 'center',
            gap: '30px'
        });

        // Function to update visible cards with slide effect
        const updateVisibleCards = (index, direction) => {
            $cards.hide().removeClass('active');
            
            // Show three cards starting from the current index
            for(let i = 0; i < visibleCards; i++) {
                let cardIndex = (index + i) % $cards.length;
                if(cardIndex < 0) cardIndex = $cards.length + cardIndex;
                
                const $card = $cards.eq(cardIndex);
                const startPosition = direction === 'right' ? 100 : -100;
                
                $card
                    .show()
                    .addClass('active')
                    .css({
                        transform: `translateX(${startPosition}px)`,
                        opacity: 0
                    })
                    .animate({
                        transform: 'translateX(0)',
                        opacity: 1
                    }, 400);
            }
        };

        // Initialize first three cards
        updateVisibleCards(0, 'right');
        
        // Navigation function
        const slideTo = (index, direction) => {
            currentIndex = index;
            
            // Handle wrapping
            if(currentIndex >= $cards.length) {
                currentIndex = 0;
            }
            if(currentIndex < 0) {
                currentIndex = $cards.length - 1;
            }
            
            updateVisibleCards(currentIndex, direction);
        };
        
        // Auto-slide functionality
        const startAutoSlide = () => {
            return setInterval(() => {
                slideTo(currentIndex + 1, 'right');
            }, 2000); // Slide every 2 seconds
        };
        
        let autoSlideTimer = startAutoSlide();
        
        // Pause on hover
        $carousel.hover(
            () => clearInterval(autoSlideTimer),
            () => autoSlideTimer = startAutoSlide()
        );
        
        // Navigation Arrows Event Handlers
        $carousel.find('.carousel-arrow.prev').on('click', () => {
            clearInterval(autoSlideTimer);
            slideTo(currentIndex - 1, 'left');
            autoSlideTimer = startAutoSlide();
        });
        
        $carousel.find('.carousel-arrow.next').on('click', () => {
            clearInterval(autoSlideTimer);
            slideTo(currentIndex + 1, 'right');
            autoSlideTimer = startAutoSlide();
        });
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

