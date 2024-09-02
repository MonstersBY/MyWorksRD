import Swiper from 'swiper';

window.addEventListener('DOMContentLoaded', () => {
	newsSwipers();
});

const newsSwipers = () => {
	const eventsSwiper = new Swiper('.events__swiper', {
		slidesPerView: 'auto',
		slidesPerGroup: 1,
		spaceBetween: 4,

		breakpoints: {
			767: {
				spaceBetween: 32,
			},

			1200: {
				centeredSlides: true,
				spaceBetween: 50,
				initialSlide: 3,
			},
		},

		pagination: {
			el: '.events__swiper-pagination',
		},

		navigation: {
			prevEl: '.events__swiper-prev',
			nextEl: '.events__swiper-next',
		},
	});
};
