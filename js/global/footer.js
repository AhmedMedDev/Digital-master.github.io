/*global console, alert, $*/
$(window).ready(function () {
    'use strict';
    
    //Footer
    $(window).scroll(function () {
        if ($(window).scrollTop() > $('footer').offset().top - ($(window).height())) {
            $('footer').css('opacity', '1');
        }
    });
    //footer-link
    $('footer .content .footer-link a').hover(function () {
        $(this).css("letter-spacing", '6px');
        $('footer .content .footer-link a i').css({
            opacity : 1,
            transform : 'translate(0,0)'
        });
    }, function () {
        $(this).css("letter-spacing", '5px');
        $('footer .content .footer-link a i').css({
            opacity : 0,
            transform : 'translate(-15px,0)'
        });
    });
});