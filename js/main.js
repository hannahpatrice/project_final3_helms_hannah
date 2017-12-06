$(document).ready(function () {

// LIGHTBOX

    var gallery = $('.gallery a').simpleLightbox();

// HOME PAGE MENU HOVER

    $('.homenav').mouseenter(function () {
        $(this).css({'opacity': 1});
    });
    $('.homenav').mouseleave(function () {
        $(this).css({'opacity': 0.6});
    });

// TEAM HOVER CHANGE

    $('.bigger').mouseenter(function () {
        $(this).css({'background-color': 'rgba(0, 128, 128, 0.65)', 'color': 'white', 'padding': '1%'});
    });
    $('.bigger').mouseleave(function () {
        $(this).css({'background-color': 'white', 'color': 'black', 'padding': '0%'});
    });

//HOME PAGE TEXT EFFECTS

    $(function () {
        $('.lettering').textillate({ in: { effect: 'fadeInRight' } });
    });

});
