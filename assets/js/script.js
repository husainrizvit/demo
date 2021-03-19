$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 70) {
            $('.massively-top__row').addClass('hidden');
            $('.massively__intro-hidden').css("opacity", "1").css("transform", "translateY(-50px)");
        } else if ($(this).scrollTop() < 70) {
            $('.massively-top__row').removeClass('hidden');
            $('.massively__intro-hidden').css("opacity", "0").css("transform", "translateY(10px)");
        }
    });
    $('.toggle-button').click(function() {
        $('.nav-wrap').addClass('responsive');
        $(this).hide();
        $('.nav-wrap--close').show();
    });

    $('.nav-wrap--close').click(function() {
        $('.nav-wrap').removeClass('responsive');
        $(this).hide();
        $('.toggle-button').show();
    });
    $('.massively-navbar__links li a').click(function() {
        $(this).addClass("active");
    });
    $(window).scroll(function() {
        let scrollTop = $(window).scrollTop();
        $('.massively-wrapper').css("background-position", 'top ' + scrollTop + "px");

    })
    $('.massively-hover').click(function() {
        window.scrollBy(0, 150);
    });



});