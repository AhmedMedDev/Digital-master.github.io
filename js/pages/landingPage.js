/*global console, alert, $*/
$(window).ready(function () {
    'use strict';
    
    //Get Started Section
    //Starting Link 
    $('.starting .text .link a').hover(function () {
        $(this).css("letter-spacing", '6px');
        $('.starting .text .link a i').css({
            opacity : 1,
            transform : 'translate(0,0)'
        });
    }, function () {
        $(this).css("letter-spacing", '5px');
        $('.starting .link a i').css({
            opacity : 0,
            transform : 'translate(-15px,0)'
        });
    });
    
        //Get Started Section
    if ($(window).width() > 992) {
        $(window).scroll(function () {
            var windowScroll = $(window).scrollTop();
            if (windowScroll >= $('.starting .image img').offset().top - ($(window).height() - 200)) {
                $('.starting .image img').css({
                    transform : "translate(0, -140px)",
                    opacity : '1'
                });
            }
        });
    }

    if ($(window).width() <= 992) {
        $(window).scroll(function () {
            var windowScroll = $(window).scrollTop();
            if (windowScroll >= $('.starting .image img').offset().top - ($(window).height() - 200)) {
                $('.starting .image img').css({
                    opacity : '1'
                });
            }
        });
    }
    
       //Options Section

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.options .row:first-of-type .one').offset().top - ($(window).height() - 200)) {
            $('.options .row:first-of-type .one').css("opacity", '1');
        }
        if ($(window).scrollTop() >= $('.options .row:first-of-type .two').offset().top - ($(window).height() - 200)) {
            $('.options .row:first-of-type .two').css("opacity", '1');
        }
        if ($(window).scrollTop() >= $('.options .row:first-of-type .three').offset().top - ($(window).height() - 200)) {
            $('.options .row:first-of-type .three').css("opacity", '1');
        }
        if ($(window).scrollTop() >= $('.options .row:first-of-type .four').offset().top - ($(window).height() - 200)) {
            $('.options .row:first-of-type .four').css("opacity", '1');
        }
        if ($(window).scrollTop() >= $('.options .row:last-of-type .five').offset().top - ($(window).height() - 200)) {
            $('.options .row:last-of-type .five').css("opacity", '1');
        }
        if ($(window).scrollTop() >= $('.options .row:last-of-type .six').offset().top - ($(window).height() - 200)) {
            $('.options .row:last-of-type .six').css("opacity", '1');
        }
        if ($(window).scrollTop() >= $('.options .row:last-of-type .seven').offset().top - ($(window).height() - 200)) {
            $('.options .row:last-of-type .seven').css("opacity", '1');
        }
        if ($(window).scrollTop() >= $('.options .row:last-of-type .eight').offset().top - ($(window).height() - 200)) {
            $('.options .row:last-of-type .eight').css("opacity", '1');
        }
        
    });
    
    //traninig
    $(window).scroll(function () {
        $('header .image').css('top', $(window).scrollTop());
    });
    //header-link
    $('.trainings .link a').hover(function () {
        $(this).css("letter-spacing", '6px');
        $('.trainings .link a i').css({
            opacity : 1,
            transform : 'translate(0,0)'
        });
    }, function () {
        $(this).css("letter-spacing", '5px');
        $('.trainings .link a i').css({
            opacity : 0,
            transform : 'translate(-15px,0)'
        });
    });
    
    //ad section
    $('.ad .text .link a').hover(function () {
        $(this).css("letter-spacing", '6px');
        $('.ad .text .link a i').css({
            opacity : 1,
            transform : 'translate(0,0)'
        });
    }, function () {
        $(this).css("letter-spacing", '5px');
        $('.ad .link a i').css({
            opacity : 0,
            transform : 'translate(-15px,0)'
        });
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.ad .imag img').offset().top - ($(window).height() - 200)) {
            $('.ad .imag img').css({
                transform: 'rotate(0)',
                opacity : '1'
            });
        }
    });
    
    //work
    $('.work .text .link a').hover(function () {
        $(this).css("letter-spacing", '6px');
        $('.work .text .link a i').css({
            opacity : 1,
            transform : 'translate(0,0)'
        });
    }, function () {
        $(this).css("letter-spacing", '5px');
        $('.work .link a i').css({
            opacity : 0,
            transform : 'translate(-15px,0)'
        });
    });
    if ($(window).width() >= 992) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('.work .image').offset().top - ($(window).height() - 200)) {
                $('.work .image').css({
                    transform: 'rotate(0) translate(-200px,0)',
                    opacity : '1'
                });
            }
        });
    }
    if ($(window).width() <= 992) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('.work .image').offset().top - ($(window).height() - 200)) {
                $('.work .image').css({
                    opacity : '1'
                });
            }
        });
    }
    // Subscribe Form
    $('.subscribe .link a').hover(function () {
        $(this).css("letter-spacing", '6px');
        $('.subscribe .link a i').css({
            opacity : 1,
            transform : 'translate(0,0)'
        });
    }, function () {
        $(this).css("letter-spacing", '5px');
        $('.subscribe a i').css({
            opacity : 0,
            transform : 'translate(-15px,0)'
        });
    });
    
});
// Loading Overlay
/*$(window).on('load', function () {
    'use strict';
    
    $('.load-overlay').fadeOut(1000, function () {
        $(this).remove();
        $("body").css('overflow', 'auto');
    });
    $('header .content p:last-of-type').delay(1000).fadeIn(1000);
});*/
