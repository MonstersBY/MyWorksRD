import Swiper from 'swiper';

window.addEventListener('DOMContentLoaded', () => {
	Swipers();
});

const Swipers = () => {
	if (document.querySelector('.article-slider__swiper')) {
		const block = document.querySelector('.article-slider'),
			prevEl = block.querySelector('.navigation-prev'),
			nextEl = block.querySelector('.navigation-next'),
			curSlide = block.querySelector('.pag-cur'),
			lastSlide = block.querySelector('.pag-last'),
			svg = block.querySelector('.pagination svg'),
			lineSVG = svg.querySelector('path'),
			svgWidth = svg.querySelector('line').getAttribute('x2');

		const articleSlider = new Swiper('.article-slider__swiper', {
			slidesPerView: 'auto',
			slidesPerGroup: 1,
			spaceBetween: 10,
			centeredSlides: true,
			initialSlide: 0,

			breakpoints: {
				1201: {
					initialSlide: 2,
					spaceBetween: 48,
				},
				376: {
					spaceBetween: 20,
					initialSlide: 1,
				},
			},

			on: {
				init: swiper => {
					const oneSlideWidth = svgWidth / swiper.slides.length;

					curSlide.textContent = swiper.activeIndex >= 10 ? `${swiper.activeIndex + 1}` : `0${swiper.activeIndex + 1}`;
					lastSlide.textContent = swiper.slides.length >= 10 ? `${swiper.slides.length}` : `0${swiper.slides.length}`;

					lineSVG.setAttribute('d', `M0 1H${oneSlideWidth * (swiper.activeIndex + 1)}`);
				},
				slideChange: function (swiper) {
					const oneSlideWidth = svgWidth / swiper.slides.length;
					const lineWidth = (swiper.activeIndex + 1) * oneSlideWidth;

					curSlide.textContent = swiper.activeIndex + 1 >= 10 ? `${swiper.activeIndex + 1}` : `0${swiper.activeIndex + 1}`;

					lineSVG.setAttribute('d', `M0 1H${lineWidth}`);
					// Находим ближайшую svg этой полоски и берем ее path
					// path d="M0 1H62.4" stroke="#D3965F" stroke-width="1.4"
					// Далее у path нужно взять атрибут d - и у него поменять последние цифры после H,
					// чтобы отрисовать линию зависящую от слайдов и менять ее относительно текущего
				},
			},

			pagination: {
				el: window.screen.width <= 1200 && document.querySelector('.article-slider__swiper-pagination'),
			},

			navigation: {
				prevEl,
				nextEl,
			},
		});
	}
};
