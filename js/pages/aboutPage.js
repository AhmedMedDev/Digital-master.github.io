/*global console, alert, $*/
$(window).ready(function () {
    'use strict';
    
    //Start Breif Section
    if ($(window).width() > 992) {
        $('.breif .image').css({
            opacity : '1',
            transform : 'rotate(0deg) translate(0,-100px)'
        });
    }
    if ($(window).width() < 992) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('.breif .image').offset().top - ($(window).height() - 300)) {
                $('.breif .image').css({
                    opacity : '1'
                });
            }
        });
    }
    //End Breif Section
    
    //Start Team Section
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.team .one').offset().top - ($(window).height() - 200)) {
            $('.team .one').css('opacity', "1");
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.team .two').offset().top - ($(window).height() - 200)) {
            $('.team .two').css('opacity', "1");
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.team .three').offset().top - ($(window).height() - 200)) {
            $('.team .three').css('opacity', "1");
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.team .four').offset().top - ($(window).height() - 200)) {
            $('.team .four').css('opacity', "1");
        }
    });
    //End Team Section
    
    
    //Start Values Section
    
    //image
    $(window).scroll(function () {
        if ($(window).scrollTop() > $('.values .image').offset().top - ($(window).height() - 200)) {
            $('.values .image').css('opacity', '1');
        }
    });
    
    //Text
    $(window).scroll(function () {
        if ($(window).scrollTop() > $('.values .text h2').offset().top - ($(window).height() - 200)) {
            $('.values .text h2, .values .text p:first-of-type').css('opacity', '1');
        }
    });
    
    $(window).scroll(function () {
        if ($(window).scrollTop() > $('.values .text p:first-of-type').offset().top - ($(window).height() - 200)) {
            $('.values .text p:first-of-type').css('opacity', '1');
        }
    });
    
    $(window).scroll(function () {
        if ($(window).scrollTop() > $('.values .text .links li:first-of-type').offset().top - ($(window).height() - 200)) {
            $('.values .text .links li:first-of-type').css('opacity', '1');
        }
    });
    
    $(window).scroll(function () {
        if ($(window).scrollTop() > $('.values .text .links li:nth-of-type(2)').offset().top - ($(window).height() - 200)) {
            $('.values .text .links li:nth-of-type(2)').css('opacity', '1');
        }
    });
    
    $(window).scroll(function () {
        if ($(window).scrollTop() > $('.values .text .links li:last-of-type').offset().top - ($(window).height() - 150)) {
            $('.values .text .links li:last-of-type').css('opacity', '1');
        }
    });
    
    //links
    //firstLink
    $('.values .text .links li:first-of-type a').on('click', function (event) {
        event.preventDefault();
        if ($('.values .text .links li:first-of-type i').hasClass('fa-plus-circle')) {
            $('.values .text .links li:first-of-type').animate({
                height : '523px'
            }, 'fast');
            $('.values .text .links li:first-of-type i').removeClass('fa-plus-circle').addClass('fa-minus-circle');
        } else {
            $('.values .text .links li:first-of-type').animate({
                height : '70px'
            }, 'fast');
            $('.values .text .links li:first-of-type i').removeClass('fa-minus-circle').addClass('fa-plus-circle');
        }
    });
    
    //secondLink
    $('.values .text .links li:nth-of-type(2) a').on('click', function (event) {
        event.preventDefault();
        if ($('.values .text .links li:nth-of-type(2) i').hasClass('fa-plus-circle')) {
            $('.values .text .links li:nth-of-type(2)').animate({
                height : '523px'
            }, 'fast');
            $('.values .text .links li:nth-of-type(2) i').removeClass('fa-plus-circle').addClass('fa-minus-circle');
        } else {
            $('.values .text .links li:nth-of-type(2)').animate({
                height : '70px'
            }, 'fast');
            $('.values .text .links li:nth-of-type(2) i').removeClass('fa-minus-circle').addClass('fa-plus-circle');
        }
    });
    
    //thirdLink
    $('.values .text .links li:last-of-type a').on('click', function (event) {
        event.preventDefault();
        if ($('.values .text .links li:last-of-type i').hasClass('fa-plus-circle')) {
            $('.values .text .links li:last-of-type').animate({
                height : '523px'
            }, 'fast');
            $('.values .text .links li:last-of-type i').removeClass('fa-plus-circle').addClass('fa-minus-circle');
        } else {
            $('.values .text .links li:last-of-type').animate({
                height : '70px'
            }, 'fast');
            $('.values .text .links li:last-of-type i').removeClass('fa-minus-circle').addClass('fa-plus-circle');
        }
    });
    
    
    //Features Section
    
    //link
    $('.features .link a').hover(function () {
        $(this).css("letter-spacing", '6px');
        $('.features .link a i').css({
            opacity : 1,
            transform : 'translate(0,0)'
        });
    }, function () {
        $(this).css("letter-spacing", '5px');
        $('.features .link a i').css({
            opacity : 0,
            transform : 'translate(-15px,0)'
        });
    });
    
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.features .link').offset().top - ($(window).height() - 200)) {
            $('.features .link').css('opacity', '1');
        }
    });
    
    //icons
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.features li:first-of-type').offset().top - ($(window).height() - 200)) {
            $('.features ul li:first-of-type').css('opacity', '1');
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.features ul li:nth-of-type(2)').offset().top - ($(window).height() - 200)) {
            $('.features ul li:nth-of-type(2)').css('opacity', '1');
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.features ul li:nth-of-type(3)').offset().top - ($(window).height() - 200)) {
            $('.features ul li:nth-of-type(3)').css('opacity', '1');
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.features ul li:nth-of-type(4)').offset().top - ($(window).height() - 200)) {
            $('.features ul li:nth-of-type(4)').css('opacity', '1');
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.features ul li:nth-of-type(5)').offset().top - ($(window).height() - 200)) {
            $('.features ul li:nth-of-type(5)').css('opacity', '1');
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.features ul li:nth-of-type(6)').offset().top - ($(window).height() - 200)) {
            $('.features ul li:nth-of-type(6)').css('opacity', '1');
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.features ul li:nth-of-type(7)').offset().top - ($(window).height() - 200)) {
            $('.features ul li:nth-of-type(7)').css('opacity', '1');
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.features ul li:last-of-type').offset().top - ($(window).height() - 200)) {
            $('.features ul li:last-of-type').css('opacity', '1');
        }
    });
    //image
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.features .image').offset().top - ($(window).height() - 200)) {
            $('.features .image').css('opacity', '1');
        }
    });

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
