// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	var hashLinks = document.querySelectorAll("a[href^='#']");
	[].forEach.call(hashLinks, function (link) {
		link.addEventListener("click", function (event) {
			event.preventDefault();
			history.pushState({}, "", link.href);
			history.pushState({}, "", link.href);
			history.back();
		});
	});

})
