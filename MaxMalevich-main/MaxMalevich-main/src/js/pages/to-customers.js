import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Navigation, EffectCreative, Pagination, EffectCoverflow, EffectFade, Thumbs } from 'swiper/modules';

import { rem } from '../utils/constants';

// document.addEventListener('DOMContentLoaded', () => {
// 	try {
//         toCustomersBannerSwiper ()
// 	} catch {}

// });

const to_customers_banner = document.querySelector('.to-customers-banner__swiper');

if(to_customers_banner) {
	const to_customers_box = document.querySelector('.to-customers-banner__inner');
	const pagination = to_customers_box.closest('.container').querySelector('.pagination');
	const cur = to_customers_box.closest('.container').querySelector('.pag-cur');
	const last = to_customers_box.closest('.container').querySelector('.pag-last');
	const lineSVG = pagination.querySelector('svg path');
	const svg = pagination.querySelector('svg');
	const navFurniture = document.querySelector('.furniture .navigation');

	const furnitureSwiper = new Swiper(to_customers_banner, {
		modules: [Navigation, Pagination],
		spaceBetween: rem(4),
		on: {
			init: swiper => {
				cur.textContent = `0${swiper.activeIndex + 1}`;
				last.textContent = swiper.slides.length > 9 ? `${swiper.slides.length}` : `0${swiper.slides.length}`;
				if (svg) {
					const svgWidth = 100;
					if (svgWidth) {
						const oneSlideWidth = svgWidth / swiper.slides.length;
						lineSVG?.setAttribute('d', `M0 1H${oneSlideWidth}`);
					}
				}
			},
			slideChange: function (swiper) {
				cur.textContent = swiper.activeIndex > 8 ? `${swiper.activeIndex + 1}` : `0${swiper.activeIndex + 1}`;
				if (svg) {
					const svgWidth = 100;
					if (svgWidth) {
						const oneSlideWidth = svgWidth / swiper.slides.length;
						const lineWidth = (swiper.activeIndex + 1) * oneSlideWidth;
						lineSVG?.setAttribute('d', `M0 1H${lineWidth}`);
					}
				}
			},
		},
		pagination: {
			el: window.screen.width < 768 && '.to-customers-banner__slider-bottom .pagination',
		},
		breakpoints: {
			1201: {
				slidesPerView: 3.9,
                spaceBetween: rem(4.8),
                centeredSlides: true,
				initialSlide: 2,
			},
			768: {
				slidesPerView: 1,
                spaceBetween: rem(4),
                centeredSlides: true,
				initialSlide: 0,
			},
		},
	});
	to_customers_box.querySelector('.navigation-prev').addEventListener('click', (e) => {
		furnitureSwiper.slidePrev()
	})
	to_customers_box.querySelector('.navigation-next').addEventListener('click', (e) => {
		furnitureSwiper.slideNext()
	})
	// const swiperList = new Swiper('to_customers_banner', {
	// 	slidesPerView: 1,
	// 	spaceBetween: rem(4),
	// 	loop: true,
    //     grabCursor: true,     
	// 	centeredSlides: true,
	// 	breakpoints: {
	// 		1201: {
	// 			slidesPerView: 3.9,
    //             spaceBetween: rem(4.8),
    //             centeredSlides: true,
	// 		},
	// 		768: {
	// 			slidesPerView: 1,
    //             spaceBetween: rem(4),
    //             centeredSlides: true,
	// 		},
           
	// 	},
		
	// });
}