'use strict';

window.addEventListener('DOMContentLoaded', event => {
    let menu = document.querySelector('#burger-menu'),
	mobile = document.querySelector('#mobile-menu'),
	close = document.querySelector('#close-menu'),
	body = document.querySelector('body'),
	h2 = document.querySelector('h2'),
	anchor = document.querySelectorAll('.button'),
	footerAnchors = document.querySelectorAll('footer a'),
	dataLink = document.querySelectorAll('[data-link]');

	menu.addEventListener('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		mobile.classList.add('shown');
		body.classList.add('fixed');
		anchor.forEach(function(item) {
			item.tabIndex = '-1'
		});

		footerAnchors.forEach(function(item) {
			item.tabIndex = '-1';
		});

		dataLink.forEach(function(item) {
			item.tabIndex = '0';
		});

		menu.tabIndex = '-1';
	});

	close.addEventListener('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		mobile.classList.remove('shown');
		body.classList.remove('fixed');
		anchor.forEach(function(item) {
			item.tabIndex = '0'
		});

		footerAnchors.forEach(function(item) {
			item.tabIndex = '0';
		});

		dataLink.forEach(function(item) {
			item.tabIndex = '-1';
		});

		menu.tabIndex = '0';
	});
	

	document.addEventListener('click', function(event) {
		if (event.target === mobile || event.target === h2) {
			mobile.classList.remove('shown');
			body.classList.remove('fixed');
		}
	});
});