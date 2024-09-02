import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import popup from '../utils/popup';
import form from '../utils/form';

import { rem } from '../utils/constants';

document.addEventListener('DOMContentLoaded', () => {
	try {
		disignersBannerSwiper();
	} catch {}
	try {
		magazinesSwiper();
	} catch {}
	try {
		reviewsDisignersSwiper();
	} catch {}
	try {
		popup();
	} catch {}
	try {
		form();
	} catch {}
});

function disignersBannerSwiper() {
	const sliders = document.querySelectorAll('.designers-banner__swiper-slide');
	let rows = Math.ceil(sliders.length / 2);
	const swiper = new Swiper('.designers-banner__swiper', {
		slidesPerView: 1,
		spaceBetween: rem(4),
		grid: {
			rows: 1,
		},
		pagination: {
			el: '.designers-banner__swiper-pagination',
		},
		breakpoints: {
			1201: {
				slidesPerView: 4,
				spaceBetween: 0,
				grid: {
					rows: rows,
				},
			},
		},
	});
}

function magazinesSwiper() {
	const swiper = new Swiper('.magazines__swiper', {
		slidesPerView: 1,
		spaceBetween: rem(2),
		pagination: {
			el: '.magazines__swiper-pagination',
		},
		breakpoints: {
			1201: {
				slidesPerView: 4,
				spaceBetween: rem(4.8),
				slidesPerGroup: 1,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: rem(2),
				slidesPerGroup: 2,
			},
		},
	});
}

function reviewsDisignersSwiper() {
	const pagBox = document.querySelector('.reviews-disigners__video-pagination-box');
	const pag = document.querySelector('.reviews-disigners__video-pagination');
	const curSlide = pagBox.querySelector('.pag-cur');
	const lastSlide = pagBox.querySelector('.pag-last');

	const swiper = new Swiper('.reviews-disigners__video-swiper', {
		slidesPerView: 1,
		spaceBetween: rem(4),
		loop: true,
		autoHeight: true,
		pagination: {
			el: '.reviews-disigners__video-pagination',
			type: 'bullets',
		},
		navigation: {
			prevEl: '.reviews-disigners__video-navigation .navigation-prev',
			nextEl: '.reviews-disigners__video-navigation .navigation-next',
		},
		breakpoints: {
			1201: {
				slidesPerView: 3,
				spaceBetween: rem(4.8),
				slidesPerGroup: 1,
				pagination: {
					type: 'progressbar',
				},
			},
			768: {
				slidesPerView: 1,
				pagination: {
					type: 'progressbar',
				},
			},
		},
		on: {
			init: swiper => {
				curSlide.textContent = `0${swiper.slides[swiper.activeIndex].getAttribute('data-num')}`;
				lastSlide.textContent = `0${swiper.slides.length}`;
			},
			slideChange: function (swiper) {
				curSlide.textContent = `0${swiper.slides[swiper.activeIndex].getAttribute('data-num')}`;
			},
		},
	});
}
