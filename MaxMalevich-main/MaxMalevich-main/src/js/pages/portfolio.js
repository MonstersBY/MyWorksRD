import Swiper from 'swiper';

window.addEventListener('DOMContentLoaded', () => {
	portfolioSwipers();

	document.querySelector('.portfolio-head') && categories();
});

function remToPx(remValue) {
	// Получаем текущий базовый размер шрифта (font-size) из элемента <html>
	var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

	// Переводим значение из rem в px
	var pxValue = remValue * htmlFontSize;

	// Округляем значение до целых пикселей (по желанию)
	return Math.round(pxValue) + 'px';
}

const categories = () => {
	const categoriesListContainer = document.querySelector('.portfolio-head__swiper .swiper-wrapper'),
		categoriesList = categoriesListContainer.querySelectorAll('.portfolio-head__swiper-slide');

	categoriesListContainer.addEventListener('click', e => {
		const target = e.target;

		if (target.classList.contains('portfolio-head__swiper-slide')) {
			categoriesList.forEach(category => {
				category.classList.remove('active');
			});

			target.classList.add('active');
		}
	});
};

const portfolioSwipers = () => {
	if (document.querySelector('.portfolio-head__categories')) {
		const categoriesContainer = document.querySelector('.portfolio-head__categories'),
			prevBtn = categoriesContainer.querySelector('.porfolio-head__swiper-prev'),
			nextBtn = categoriesContainer.querySelector('.porfolio-head__swiper-next');

		const categoriesSwiper = new Swiper('.portfolio-head__swiper', {
			slidesPerView: 'auto',
			slidesPerGroup: 1,
			spaceBetween: 18,
			freeMode: true,

			on: window.screen.width > 1200 && {
				slideChange: function (swiper) {
					if (!prevBtn.classList.contains('swiper-button-disabled')) {
						categoriesContainer.style.paddingLeft = '4.2rem';
						swiper.update();
					}

					if (!nextBtn.classList.contains('swiper-button-disabled')) {
						categoriesContainer.style.paddingLeft = '4.2rem';
						swiper.update();
					}
				},
			},

			breakpoints: {
				768: {
					freeMode: true,
				},

				1201: {
					freeMode: false,
				},
			},

			navigation: {
				prevEl: prevBtn,
				nextEl: nextBtn,
			},
		});
	}

	if (document.querySelector('.portfolio-list__swiper')) {
		const sliders = document.querySelectorAll('.portfolio-list__swiper');

		sliders.forEach(slider => {
			const parentItem = slider.closest('.portfolio-list__item'),
				nav = parentItem.querySelector('.navigation'),
				pag = parentItem.querySelector('.pagination'),
				prevEl = nav.querySelector('.navigation-prev'),
				nextEl = nav.querySelector('.navigation-next'),
				curSlide = pag.querySelector('.pag-cur'),
				lastSlide = pag.querySelector('.pag-last'),
				lineSVG = pag.querySelector('svg path'),
				svg = pag.querySelector('svg');

			new Swiper(slider, {
				slidesPerView: 1,
				slidesPerGroup: 1,
				effect: 'creative',

				creativeEffect: {
					limitProgress: 2,
					perspective: true,

					next: {
						translate: ['20.1rem', 0, -1],
						scale: 0.85,
						shadow: true,
					},

					prev: {
						translate: ['-100%', 0, 0],
					},
				},

				breakpoints: {
					768: {
						creativeEffect: {
							next: {
								translate: ['63.7rem', 0, -1],
							},
						},
					},

					1201: {
						creativeEffect: {
							limitProgress: 5,

							next: {
								translate: ['21.25rem', 0, -1],
							},

							prev: {
								translate: ['-100%', 0, 0],
							},
						},
					},
				},

				on: {
					init: swiper => {
						if (window.screen.width > 768) {
							const svgWidth = svg.querySelector('line').getAttribute('x2');
							const oneSlideWidth = svgWidth / swiper.slides.length;

							curSlide.textContent = `0${swiper.activeIndex + 1}`;
							lastSlide.textContent = `0${swiper.slides.length}`;

							lineSVG.setAttribute('d', `M0 1H${oneSlideWidth}`);
						}
					},
					slideChange: function (swiper) {
						if (window.screen.width > 768) {
							const svgWidth = svg.querySelector('line').getAttribute('x2');
							const oneSlideWidth = svgWidth / swiper.slides.length;
							const lineWidth = (swiper.activeIndex + 1) * oneSlideWidth;

							const activeSLide = swiper.slides[swiper.activeIndex];

							curSlide.textContent = `0${swiper.activeIndex + 1}`;

							lineSVG.setAttribute('d', `M0 1H${lineWidth}`);

							console.log(swiper.activeIndex, swiper.slides.length);
						}
					},
				},

				pagination: {
					el: window.screen.width <= 768 && slider.closest('.portfolio-list__item').querySelector('.portfolio-list__swiper-pagination'),
				},

				navigation: {
					prevEl,
					nextEl,
				},
			});
		});
	}
};
