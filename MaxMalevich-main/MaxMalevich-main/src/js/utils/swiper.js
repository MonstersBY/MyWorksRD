import Swiper from 'swiper';
import { Navigation, EffectCreative, Pagination, EffectCoverflow, EffectFade, Thumbs } from 'swiper/modules';

function remToPx(remValue) {
	// Получаем текущий базовый размер шрифта (font-size) из элемента <html>
	var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

	// Переводим значение из rem в px
	var pxValue = remValue * htmlFontSize;

	// Округляем значение до целых пикселей (по желанию)
	return Math.round(pxValue) + 'px';
}

const sliders = document.querySelectorAll('.swiper');

if (sliders.length > 0) {
	sliders.forEach(slider => {
		const nav = slider.querySelector('.navigation');
		const pag = slider.querySelector('.pagination');
		const prevEl = nav && nav.querySelector('.navigation-prev');
		const nextEl = nav && nav.querySelector('.navigation-next');
		const curSlide = pag && pag.querySelector('.pag-cur');
		const lastSlide = pag && pag.querySelector('.pag-last');
		const lineSVG = pag && pag.querySelector('svg path');
		const svg = pag && pag.querySelector('svg');
		console.log('slider, prevEl, nextEl: ', slider, prevEl, nextEl, prevEl ? true : false);
		const sliderSw = new Swiper(slider, {
			modules: [Pagination],
			slidesPerView: 1,
			spaceBetween: 20,
			allowTouchMove: true,
			speed: 1000,
			effect: slider.classList.contains('production__slider--fade') ? 'fade' : '',
			fadeEffect: {
				crossFade: true,
			},
			navigation: {
				prevEl: prevEl ? prevEl : false,
				nextEl: nextEl ? nextEl : false,
			},
			pagination: {
				el: slider.querySelector('.pagination') || false,
			},
			on: {
				init: swiper => {
					curSlide && (curSlide.textContent = `0${swiper.activeIndex + 1}`);
					lastSlide && (lastSlide.textContent = `0${swiper.slides.length}`);
					if (svg) {
						const svgWidth = svg.clientWidth;
						console.log(svgWidth);
						const oneSlideWidth = swiper.slides.length ? svgWidth / swiper.slides.length : 0;
						console.log(oneSlideWidth, svgWidth);
						lineSVG?.setAttribute('d', `M0 1H${oneSlideWidth}`);
					}
				},
				slideChange: function (swiper) {
					curSlide && (curSlide.textContent = `0${swiper.activeIndex + 1}`);
					if (svg) {
						const svgWidth = svg.clientWidth;
						const oneSlideWidth = swiper.slides.length ? svgWidth / swiper.slides.length : 0;
						const lineWidth = (swiper.activeIndex + 1) * oneSlideWidth;
						console.log(oneSlideWidth, svgWidth);
						lineSVG?.setAttribute('d', `M0 1H${lineWidth}`);
					}
					// Находим ближайшую svg этой полоски и берем ее path
					// path d="M0 1H62.4" stroke="#D3965F" stroke-width="1.4"
					// Далее у path нужно взять атрибут d - и у него поменять последние цифры после H,
					// чтобы отрисовать линию зависящую от слайдов и менять ее относительно текущего
				},
			},
			breakpoints: {
				1200: {
					pagination: false,
				},
				767: {
					pagination: false,
				},
			},
		});
		// prevEl.addEventListener('click', e => {
		// 	sliderSw.slidePrev();
		// });
		// nextEl.addEventListener('click', e => {
		// 	sliderSw.slideNext();
		// });
	});
}

const furnitureSlider = document.querySelector('.furniture__slider');

if (furnitureSlider) {
	const pagination = furnitureSlider.closest('.container').querySelector('.pagination');
	const cur = furnitureSlider.closest('.container').querySelector('.pag-cur');
	const last = furnitureSlider.closest('.container').querySelector('.pag-last');
	const lineSVG = pagination.querySelector('svg path');
	const svg = pagination.querySelector('svg');
	const navFurniture = document.querySelector('.furniture .navigation');

	const furnitureSwiper = new Swiper(furnitureSlider, {
		modules: [Navigation, Pagination, EffectCreative],
		slidesPerView: 1,
		speed: 1200,
		allowTouchMove: true,
		on: {
			init: swiper => {
				cur.textContent = `0${swiper.activeIndex + 1}`;
				last.textContent = `0${swiper.slides.length}`;
				if (svg) {
					const svgWidth = 77;
					console.log(svgWidth);
					if (svgWidth) {
						const oneSlideWidth = svgWidth / swiper.slides.length;
						console.log(oneSlideWidth, svgWidth);
						lineSVG?.setAttribute('d', `M0 1H${oneSlideWidth}`);
					}
				}
			},
			slideChange: function (swiper) {
				console.log(123);
				cur.textContent = `0${swiper.activeIndex + 1}`;
				if (svg) {
					const svgWidth = 77;
					if (svgWidth) {
						const oneSlideWidth = svgWidth / swiper.slides.length;
						const lineWidth = (swiper.activeIndex + 1) * oneSlideWidth;
						console.log(oneSlideWidth, svgWidth);
						lineSVG?.setAttribute('d', `M0 1H${lineWidth}`);
					}
				}
			},
		},
		effect: 'creative',
		creativeEffect: {
			limitProgress: 2,

			prev: {
				translate: ['0', '20.1rem', 0],
				opacity: 0,
				zIndex: -1,
			},
			next: {
				translate: ['54.6rem', '-8.5rem', 0],
			},
		},
		pagination: {
			el: window.screen.width < 768 && '.furniture__slider-bottom .pagination',
		},
		// navigation: {
		// 	prevEl: navFurniture.querySelector('.navigation-prev'),
		// 	nextEl: navFurniture.querySelector('.navigation-next'),
		// },
		breakpoints: {
			1201: {
				allowTouchMove: true,
				slidesPerView: 3,
				// spaceBetween: `${remToPx(10)}rem`,
				creativeEffect: {
					limitProgress: 4,
					progressMultiplier: 1,
					prev: {
						translate: ['0', '20.1rem', 0],
						opacity: 0,
						zIndex: -1,
					},
					next: {
						translate: ['53.6rem', '-8.5rem', 0],
					},
				},
			},
			768: {
				slidesPerView: 1,

				creativeEffect: {
					limitProgress: 2,

					next: {
						translate: ['104.6rem', '-18rem', 0],
					},
				},
			},
		},
	});
	navFurniture.querySelector('.navigation-prev').addEventListener('click', (e) => {
		furnitureSwiper.slidePrev()
	})
	navFurniture.querySelector('.navigation-next').addEventListener('click', (e) => {
		furnitureSwiper.slideNext()
	})
}

const facadesNext = document.querySelector('.authors__facades .navigation-next');
const facadesPrev = document.querySelector('.authors__facades .navigation-prev');

const navExamples = document.querySelector('.examples .navigation');
console.log('window.innerWidth: ', window.innerWidth);

const exampelsSwiper = document.querySelector('.examples__slider');
if (exampelsSwiper) {
	const swiperExText = new Swiper('.examples__slider-thumbs', {
		modules: [EffectCreative],
		slidesPerView: 5,
		loop: true,
		centeredSlides: true,
		effect: 'creative',
		allowTouchMove: false,
		creativeEffect: {
			limitProgress: 3,
			progressMultiplier: 4,
			prev: {
				origin: 'left center',
				translate: ['-27%', 7, 0],
				// rotate: [0, 100, 0],
			},
			next: {
				origin: 'right center',
				translate: ['27%', 7, 0],
				// rotate: [0, -100, 0],
			},
		},
		breakpoints: {
			1201: {
				// spaceBetween: 0,
				// slidesPerView: 'auto',
				// initialSlide: 3,
			},
			768: {
				// effect: 'slide',
				slidesPerView: 3,
				initialSlide: 3,
				loopAdditionalSlides: 2,
				creativeEffect: {
					limitProgress: 2,
					progressMultiplier: 3,
					prev: {
						origin: 'left center',
						translate: ['-32%', 11, 0],
						// rotate: [0, 100, 0],
					},
					next: {
						origin: 'right center',
						translate: ['32%', 11, 0],
						// rotate: [0, -100, 0],
					},
				},
			},
		},
	});
	var swiper = new Swiper('.examples__slider', {
		modules: [EffectCoverflow, Navigation, Pagination, Thumbs],
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		loop: true,
		spaceBetween: remToPx(2),
		slidesPerView: 1,
		allowTouchMove: true,
		thumbs: { swiper: swiperExText },
		navigation: {
			prevEl: navExamples.querySelector('.navigation-prev'),
			nextEl: navExamples.querySelector('.navigation-next'),
		},
		coverflowEffect: {
			// rotate: 80,
			rotate: 75,
			stretch: -30,
			depth: 300,
			scale: 0.8,
			modifier: 0.5,
			slideShadows: true,
		},
		pagination: {
			el: '.examples-pag',
		},
		breakpoints: {
			1200: {
				spaceBetween: 0,
				slidesPerView: 'auto',
				allowTouchMove: false,
				initialSlide: 1,
			},
			767: {
				initialSlide: 0,
				// effect: 'slide',
				allowTouchMove: false,
				slidesPerView: 'auto',
				coverflowEffect: {
					rotate: 60,
					stretch: 40,
					depth: 80,
					scale: 0.8,
					modifier: 1,
					slideShadows: true,
				},
			},
		},
	});
	navExamples.querySelector('.navigation-prev').addEventListener('click', () => {
		swiperExText.slidePrev();
		swiper.slidePrev();
	});
	navExamples.querySelector('.navigation-next').addEventListener('click', () => {
		swiperExText.slideNext();
		swiper.slideNext();
	});
}

let swiper3 = null;
if (window.innerWidth < 769) {
	swiper3 = new Swiper('.authors__selected--mob', {
		modules: [EffectFade],
		effect: 'fade',
		slidesPerView: 'auto',
		spaceBetween: remToPx(2),
		allowTouchMove: false,
		speed: 1000,
		loop: true,
	});
} else {
	swiper3 = new Swiper('.authors__selected', {
		modules: [EffectFade],
		effect: 'fade',
		slidesPerView: 'auto',
		spaceBetween: remToPx(2),
		allowTouchMove: false,
		speed: 1000,
		loop: true,
	});
}

const swiper2 = new Swiper('.authors__project', {
	modules: [EffectFade, Thumbs],
	effect: 'fade',
	slidesPerView: 'auto',
	spaceBetween: remToPx(2),
	allowTouchMove: false,
	speed: 1000,
	loop: true,
	thumbs: {
		swiper: swiper3,
	},
});

const swiper1 = new Swiper('.authors__facades-slider', {
	modules: [Pagination, Thumbs],
	slidesPerView: 'auto',
	spaceBetween: remToPx(5.4),
	allowTouchMove: true,
	speed: 1000,
	pagination: {
		el: '.authors__facades-pag',
	},
	loop: true,
	thumbs: { swiper: swiper2 },
	effect: 'creative',
	creativeEffect: {
		limitProgress: 3,

		prev: {
			opacity: 0,
		},

		next: {
			opacity: 1,
			translate: ['25rem', 0, 0],
		},
	},

	breakpoints: {
		768: {
			creativeEffect: {
				next: {
					translate: ['54rem', 0, 0],
				},
			},
		},
		1201: {
			spaceBetween: remToPx(2),
			allowTouchMove: false,
			creativeEffect: {
				next: {
					translate: ['27rem', 0, 0],
				},
			},
		},
	},
});

const btnZoom = document.querySelectorAll('.authors__selected-zoom');
btnZoom.forEach(btn => {
	btn.addEventListener('click', e => {
		console.log(e.target);
		const img = e.target.nextElementSibling;
		console.log(img);
		img.classList.toggle('zoomed');
	});
});

facadesPrev?.addEventListener('click', () => {
	swiper1.slidePrev();
	swiper2.slidePrev();
	swiper3.slidePrev();
});

facadesNext?.addEventListener('click', () => {
	swiper1.slideNext();
	swiper2.slideNext();
	swiper3.slideNext();
});

const newsPag = document.querySelector('.news__pag');
const swiperNews = new Swiper('.news__slider', {
	modules: [Pagination],
	slidesPerView: 'auto',
	spaceBetween: remToPx(0.8),
	loop: true,
	loopedSlides: 4,
	initialSlide: 3,
	centeredSlides: false,
	pagination: {
		el: newsPag ? newsPag : null,
	},
	navigation: {
		prevEl: '.news__pag .navigation-prev',
		nextEl: '.news__pag .navigation-next',
	},
	breakpoints: {
		1201: {
			centeredSlides: true,
			spaceBetween: remToPx(4.8),
			pagination: {
				el: null,
			},
		},
		768: {
			centeredSlides: true,
			pagination: {
				el: null,
			},
		},
	},
});

if (window.innerWidth < 1201) {
	const swiperProcess = new Swiper('.process__list-slider', {
		modules: [Pagination],
		slidesPerView: 1,
		spaceBetween: remToPx(9.6),
		pagination: {
			el: '.process__pagination',
		},
		breakpoints: {
			768: {
				slidesPerView: 'auto',
			},
		},
	});
}

const reviewsBlock = document.querySelector('.reviews__list');

if (reviewsBlock) {
	const pagination = reviewsBlock.querySelector('.pagination');
	const cur = reviewsBlock.querySelector('.pag-cur');
	const last = reviewsBlock.querySelector('.pag-last');
	const lineSVG = pagination.querySelector('svg path');
	const svg = pagination.querySelector('svg');
	const swiperReviews = new Swiper('.reviews__list', {
		// modules: [Navigation, Pagination],
		slidesPerView: 3,
		spaceBetween: remToPx(4.8),
		navigation: {
			prevEl: '.reviews__list-controls .navigation-prev',
			nextEl: '.reviews__list-controls .navigation-next',
		},
		on: {
			init: swiper => {
				cur.textContent = `0${swiper.activeIndex + 1}`;
				last.textContent = `0${swiper.slides.length}`;
				if (svg) {
					const svgWidth = 312;
					console.log(svgWidth);
					if (svgWidth) {
						const oneSlideWidth = svgWidth / swiper.slides.length;
						console.log(oneSlideWidth, svgWidth);
						lineSVG?.setAttribute('d', `M0 1H${oneSlideWidth}`);
					}
				}
			},
			slideChange: function (swiper) {
				cur.textContent = `0${swiper.activeIndex + 1}`;
				if (svg) {
					const svgWidth = 312;
					if (svgWidth) {
						const oneSlideWidth = svgWidth / swiper.slides.length;
						const lineWidth = (swiper.activeIndex + 1) * oneSlideWidth;
						console.log(oneSlideWidth, svgWidth);
						lineSVG?.setAttribute('d', `M0 1H${lineWidth}`);
					}
				}
			},
		},
	});
}

const mailsList = document.querySelector('.mails__list');

if (mailsList) {
	const pagination = mailsList.closest('.container').querySelector('.pagination');
	const navigation = mailsList.closest('.container').querySelector('.navigation');
	const cur = pagination.querySelector('.pag-cur');
	const last = pagination.querySelector('.pag-last');
	const lineSVG = pagination.querySelector('svg path');
	const svg = pagination.querySelector('svg');
	const mailsSwiper = new Swiper('.mails__list', {
		// modules: [Navigation, Pagination],
		slidesPerView: 3,
		spaceBetween: remToPx(4.8),
		navigation: {
			prevEl: navigation.querySelector('.navigation-prev'),
			nextEl: navigation.querySelector('.navigation-next'),
		},
		on: {
			init: swiper => {
				cur.textContent = `0${swiper.activeIndex + 1}`;
				last.textContent = `0${swiper.slides.length}`;
				if (svg) {
					const svgWidth = 312;
					console.log(svgWidth);
					if (svgWidth) {
						const oneSlideWidth = svgWidth / swiper.slides.length;
						console.log(oneSlideWidth, svgWidth);
						lineSVG?.setAttribute('d', `M0 1H${oneSlideWidth}`);
					}
				}
			},
			slideChange: function (swiper) {
				cur.textContent = `0${swiper.activeIndex + 1}`;
				if (svg) {
					const svgWidth = 312;
					if (svgWidth) {
						const oneSlideWidth = svgWidth / swiper.slides.length;
						const lineWidth = (swiper.activeIndex + 1) * oneSlideWidth;
						console.log(oneSlideWidth, svgWidth);
						lineSVG?.setAttribute('d', `M0 1H${lineWidth}`);
					}
				}
			},
		},
	});
}
const projectSlider = document.querySelector('.project__slider');

if (projectSlider) {
	const swiperExText = new Swiper(projectSlider, {
		modules: [Pagination],
		slidesPerView: 1,
		spaceBetween: 20,
		pagination: {
			el: '.project__content-slider .pagination',
		},
	});
}

// if (document.querySelector('.image_slider__container') && window.screen.width < 768) {
// 	const imageSlider = new Swiper('.image_slider__container', {
// 		slidesPerView: 1,
// 		slidesPerGroup: 1,
// 		spaceBetween: 10,

// 		pagination: {
// 			el: '.image-container__pagination',
// 		},
// 	});
// }
