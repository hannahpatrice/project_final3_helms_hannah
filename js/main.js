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

//CUSTOM JS

    var changeImg = document.getElementById('changeme');

    changeImg.addEventListener('click', function () {
        if (document.getElementById('changeme').src = 'img/aboutside.jpg') {
            document.getElementById('changeme').src = 'img/aboutside2.jpg'
        }
		// WHY IS THIS BELOW NOT WORKING
		//else {
        //    document.getElementById('changeme').src = 'img/aboutside.jpg';
        //}
    });
});
