$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.wrapper-menu').addClass('menu-thin');
    } else {
        $('.wrapper-menu').removeClass('menu-thin');
    }
});

$(document).ready(function () {
    $('.hamburger').click(function () {
        $('.hamburger').toggleClass('hamburger-clicked');
        $('.line').toggleClass('line-hide');
        $('.nav-ul').toggleClass('nav-display');
    })
});

// tabs

$('.tab-header').click(function () {
    var tab_id = $(this).attr('data-tab');

    $("#" + tab_id).hasClass('tab-body-visible') ?

        $("#" + tab_id).removeClass('tab-body-visible')
        :
        $("#" + tab_id).addClass('tab-body-visible');

    $("#" + tab_id).hasClass('tab-body-visible') ?

        $("#btn" + tab_id).addClass('circle-btn-rotate')
        :
        $("#btn" + tab_id).removeClass('circle-btn-rotate');

});

$('.kurwamax').click(function () {
    var tab_id = $(this).attr('data-tab');
    $("#" + tab_id).removeClass('tab-body-visible');
    $("#btn" + tab_id).removeClass('circle-btn-rotate');
});

$("#gmap_canvas")
    .gmap3({action: 'init',
        options:{
            mapTypeControl:false,//hide mapTypeControl
            streetViewControl: false//set it to false to hide the "man"
        }
    });