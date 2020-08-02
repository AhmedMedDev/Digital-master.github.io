/*global console, alert, $*/
$(window).ready(function () {
    'use strict';
    
    //ScrollTop Button
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 900) {
            $('.scrollTop').css('opacity', "1");
        } else {
            $('.scrollTop').css('opacity', "0");
        }
    });
    $('.scrollTop').on('click', function () {
        $('html, body').animate({
            scrollTop : '0'
        }, 800);
    });
    
});