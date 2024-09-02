import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import { rem } from '../utils/constants';

document.addEventListener('DOMContentLoaded', () => {
	try {
		if (window.innerWidth < 1201) {
			fasadesSwiper();
		}
	} catch {}
	try {
		showMoreManufacturers()
	} catch {}
});

function fasadesSwiper() {
	// const texts = document.querySelectorAll('.facades__list-text')
	// texts.forEach(text => text.style.transition = 'opacity 2s cubic-bezier(0.2, 0.2, 0, 1.2)')

	const swiper = new Swiper('.facades__list', {
		slidesPerView: 'auto',
		spaceBetween: rem(-20),
		centeredSlides: true,
		speed: 1000,
		initialSlide: 6,
		freeMode: true,
		pagination: {
			el: '.facades__swiper-pagination',
		},
		breakpoints: {
			768: {
				slidesPerView: 'auto',
				spaceBetween: rem(-20),
				centeredSlides: true,
				speed: 1000,
				initialSlide: 6,
				freeMode: true,
				pagination: {
					el: '.facades__swiper-pagination',
				},
			},
		},
	});

	// const items = document.querySelectorAll('.facades__list-item');
	// setTimeout(() => {
	// 	items.forEach(item => (item.style.transition = 'margin 1s'));
	// }, 100);

	const slides = document.querySelectorAll('.facades__list-item');

	// Добавляем обработчик событий клика на каждый слайд
	slides.forEach((slide, index) => {
		slide.addEventListener('click', () => {
			// Обновляем активный слайд с помощью метода Swiper (предполагается, что у вас есть переменная swiper, содержащая экземпляр Swiper)
			swiper.slideTo(index); // Это изменит активный слайд на слайд с индексом index
			slides.forEach(item => item.classList.remove('swiper-slide-active'));
			slide.classList.add('swiper-slide-active');
		});
	});
}

function showMoreManufacturers() {
	const manufacturersItem = document.querySelectorAll('.manufacturers__list-item');
	const btn = document.querySelector('.manufacturers__show-more-btn');
	btn.addEventListener('click', () => {
		manufacturersItem.forEach(item => {
			if (!item.classList.contains('manufacturers__list-item--show')) item.classList.add('manufacturers__list-item--show');
			btn.remove()
		});
	});
}
