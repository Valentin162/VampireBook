'use strict';

window.addEventListener('DOMContentLoaded', event => {
    let menu = document.querySelector('#burger-menu'),
	mobile = document.querySelector('#mobile-menu'),
	close = document.querySelector('#close-menu'),
	body = document.querySelector('body'),
	h2 = document.querySelector('h2'),
	dropdown = document.querySelector('.dropdown'),
	stores = document.querySelector('#stores'),
	lastLink = stores.lastElementChild,
	home = document.querySelector('#home'),
	about = document.querySelector('#about'),
	anchor = document.querySelector('a'),
	lastMobileLink = document.querySelector('#last');

	menu.addEventListener('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		mobile.classList.add('shown');
		body.classList.add('fixed');
	});

	close.addEventListener('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		mobile.classList.remove('shown');
		body.classList.remove('fixed');
	});
	
	lastMobileLink.addEventListener('focusout', function() {
		if (document.activeElement !== close) {
			close.focus();
		}
	});

	document.addEventListener('click', function(event) {
		if (event.target === mobile || event.target === h2) {
			mobile.classList.remove('shown');
			body.classList.remove('fixed');
		}

		if (event.target !== anchor) {
			stores.style.display = 'none';
		}
	});

	dropdown.addEventListener('focus', function() {
		stores.style.display = 'block';
	});

	lastLink.addEventListener('focusout', function() {
		console.log('none');
		stores.style.display = 'none';
	});
});