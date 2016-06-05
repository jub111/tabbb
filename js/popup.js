var popup = document.getElementById('popup');
var overlay = document.getElementById('overlay');
var close_button = document.getElementById('close-popup');

if(getURLParameter('installation') == 'success') {
	open_modal();
}

close_button.addEventListener("click", close_modal);
overlay.addEventListener("click", close_modal);

function open_modal() {
	popup.style.display = "block";
}
function close_modal() {
	popup.style.display = "none";
}
function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}
