import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import { rem } from '../utils/constants';

document.addEventListener('DOMContentLoaded', () => {
	try {
		lettersSwiper();
	} catch {}
	try {
		premiumApproachSwiper();
	} catch {}
});

function lettersSwiper() {
	const pagBox = document.querySelector('.letters-slider__pagination-box');
	const pag = document.querySelector('.letters-slider__pagination');
	const curSlide = pagBox.querySelector('.pag-cur');
	const lastSlide = pagBox.querySelector('.pag-last');

	const swiper = new Swiper('.letters-slider__swiper', {
		slidesPerView: 1,
		spaceBetween: rem(4),
		loop: true,
		grabCursor: true,
		pagination: {
			el: '.letters-slider__pagination',
			type: 'bullets',
		},
		navigation: {
			prevEl: '.letters-slider__navigation .navigation-prev',
			nextEl: '.letters-slider__navigation .navigation-next',
		},
		breakpoints: {
			1201: {
				slidesPerView: 3,
				spaceBetween: rem(4.8),

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

function premiumApproachSwiper() {
	const pagBox = document.querySelector('.premium-approach__pagination-box');
	const pag = document.querySelector('.premium-approach__pagination');
	const curSlide = pagBox.querySelector('.pag-cur');
	const lastSlide = pagBox.querySelector('.pag-last');

	const swiperPhoto = new Swiper('.premium-approach__photo-swiper', {
		slidesPerView: '1',
		spaceBetween: rem(2),
		loop: true,
		pagination: {
			el: '.premium-approach__pagination',
			type: 'bullets',
		},
		navigation: {
			prevEl: '.premium-approach__navigation-box .navigation-prev',
			nextEl: '.premium-approach__navigation-box .navigation-next',
		},
		breakpoints: {
			1201: {
				slidesPerView: 'auto',
				spaceBetween: rem(4.8),
				pagination: {
					type: 'progressbar',
				},
			},
			768: {
				slidesPerView: 'auto',
				spaceBetween: rem(6.4),
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

	// const listSlides = document.querySelectorAll('.premium-approach__list-swiper-slide swiper-slide')

	const swiperList = new Swiper('.premium-approach__list-swiper', {
		slidesPerView: 1,
		spaceBetween: rem(2),
		loop: true,

		pagination: {
			el: '.premium-approach__list-pagination',
		},
		breakpoints: {
			768: {
				// slidesPerView: listSlides.length,
				slidesPerView: 3,
				spaceBetween: 0,
				slidesPerGroup: 1,
				direction: 'vertical',
			},
		},
	});
}
