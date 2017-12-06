$(document).ready(function () {

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
