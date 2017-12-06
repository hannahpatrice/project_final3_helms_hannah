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

//HOME PAGE TEXT EFFECTS

    $(function () {
        $('.lettering').textillate({ in: { effect: 'fadeInRight' } });
    });

});
