$(document).ready(function () {

    var gallery = $('.gallery a').simpleLightbox();

    $('.homenav').mouseenter(function () {
        $(this).css({'opacity': 1});
    });
    $('.homenav').mouseleave(function () {
        $(this).css({'opacity': 0.6});
    });

    $(function () {
        $('.lettering').textillate({ in: { effect: 'fadeInRight' } });
    });

});
