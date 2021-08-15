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
	anchors = document.querySelectorAll('a'),
	lastMobileLink = document.querySelector('#last'),
	buy = document.querySelector('#buy'),
	dataLink = document.querySelectorAll('[data-link]');

	function addTabIndex() {
		let links = document.querySelectorAll('[data-target]');

		links.forEach(function(link) {
			link.tabIndex = '0';
		});
	}

	function removeTabIndex() {
		let links = document.querySelectorAll('[data-target]');

		links.forEach(function(link) {
			link.tabIndex = '-5';
		});
	}

	function toggleStores(action = 'show') {
		if (action === 'show') {
			addTabIndex();
			stores.style.zIndex = '10';
		} else {
			removeTabIndex();
			stores.style.zIndex = '-5';
		}
	}

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
	
	for (let i = 0; i < dataLink.length; i++) {
		dataLink[i].addEventListener('focusout', function(event) {
			if (event.relatedTarget.dataset.link !== 'mobile-link') {
				if (i === 0) {
					close.focus()
				} else if (i === dataLink.length - 1) {
					home.focus();
				}
			}
		});
	}

	document.addEventListener('click', function(event) {
		if (event.target === mobile || event.target === h2) {
			mobile.classList.remove('shown');
			body.classList.remove('fixed');
		}

		if (event.target !== anchor) {
			toggleStores('hide');
		}
	});

	buy.addEventListener('mouseover', function() {
		toggleStores('show');
	});

	buy.addEventListener('click', function(event) {
		event.preventDefault();
	})

	stores.addEventListener('mouseleave', function(event) {
		event.stopPropagation();
		toggleStores('hide');
	});

	buy.addEventListener('focusin', function() {
		toggleStores('show');
	});

	buy.addEventListener('focusout', function(event) {
		if (event.relatedTarget === document.querySelector('#wattpad')) {
			toggleStores('hide');
		}
	});

	lastLink.addEventListener('focusout', function(event) {

		window.onerror = function() {
			return true;
		}

		if (event.relatedTarget.dataset.target !== 'link') {
			toggleStores('hide');
		}
	});
});