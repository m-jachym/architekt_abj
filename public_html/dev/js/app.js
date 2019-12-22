$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('.wrapper-menu').addClass('menu-thin');
    }
    else {
        $('.wrapper-menu').removeClass('menu-thin');
    } 
});

$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('hamburger-clicked');
        $('.line').toggleClass('line-hide');
        $('.nav-ul').toggleClass('nav-display');     
    })
});

// tabs
let tabBody = $('.tab-body');
let circleBtn = $('.circle-btn');

$('.tab-header').click(function(){

    tabBody.hasClass('tab-body-visible') ?
    $('.tab-body').removeClass('tab-body-visible')
    :
    $('.tab-body').addClass('tab-body-visible');
    circleBtn.hasClass('circle-btn-rotate') ?
    $('.circle-btn').removeClass('circle-btn-rotate')
    :
    $('.circle-btn').addClass('circle-btn-rotate');
});