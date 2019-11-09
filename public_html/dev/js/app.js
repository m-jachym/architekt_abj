$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $('.wrapper-menu').addClass('menu-thin');
    }
    else {
        $('.wrapper-menu').removeClass('menu-thin');
    } 
})

$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('hamburger-clicked');
        $('.line').toggleClass('line-hide');
        $('.nav-ul').toggleClass('nav-display');     
    })
})