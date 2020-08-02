/*global console, alert, $*/
$(window).ready(function () {
    'use strict';
    
    
    //NavBar
    if ($(window).width() > 992) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 10) {
                $(".navbar").css('padding', '.7rem 2rem');
            } else {
                $(".navbar").css('padding', '1.2rem 2rem');
            }
        });
    }
    
    
    //header image
    $(window).scroll(function () {
        $('header .image').css('top', $(window).scrollTop());
    });
    
    
    //header-link
    $('header .content .header-link a').hover(function () {
        $(this).css("letter-spacing", '6px');
        $('header .content .header-link a i').css({
            opacity : 1,
            transform : 'translate(0,0)'
        });
    }, function () {
        $(this).css("letter-spacing", '5px');
        $('header .content .header-link a i').css({
            opacity : 0,
            transform : 'translate(-15px,0)'
        });
    });
});
