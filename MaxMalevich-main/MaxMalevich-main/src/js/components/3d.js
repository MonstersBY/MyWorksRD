// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);
// ScrollTrigger.config({ ignoreMobileResize: true, autoRefreshEvents: 'DOMContentLoaded,load,resize' });

// const slidesEl = document.querySelectorAll('.hero__slide');

// if (slidesEl.length > 0) {
// 	const slidesArr = gsap.utils.toArray(slidesEl);
// 	console.log(slidesEl, slidesEl.length * slidesEl[0].clientHeight);

// 	const timeSlides = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: '.hero__container',
// 			start: 'top top',
// 			end: () => slidesEl.length * slidesEl[0].clientHeight + ' 100%',
// 			pin: true,
// 			scrub: 2,
// 			snap: {
// 				snapTo: 1 / (slidesEl.length - 1),
// 				duration: 1.5,
// 				delay: 0.0,
// 				inertia: false,
// 				ease: 'none',
// 			},
// 		},
// 	});

// 	// const timeLineSlides = gsap.timeline({
// 	// 	scrollTrigger: {
// 	// 		trigger: document.querySelector('.hero__container').parentElement,
// 	// 		start: 'top top',
// 	// 		end: () => slidesEl.length * slidesEl[0].clientHeight + ' 100%',
// 	// 		scrub: 2,
// 	// 	},
// 	// });

// 	slidesArr.forEach((item, id) => {
// 		const img = item.querySelector('img');
// 		const text = item.querySelector('.hero__text');
// 		if (id !== slidesArr.length - 1) {
// 			gsap.to(img, {
// 				scale: 2,
// 				scrollTrigger: {
// 					trigger: item,
// 					start: () => id * slidesEl[0].clientHeight + ' top',
// 					end: () => (id + 1) * slidesEl[0].clientHeight + ' top',
// 					scrub: 2,
// 				},
// 			});
// 			gsap.to(text, {
// 				scale: 5,
// 				scrollTrigger: {
// 					trigger: item,
// 					start: () => id * slidesEl[0].clientHeight + ' top',
// 					end: () => (id + 1) * slidesEl[0].clientHeight + ' top',
// 					scrub: 2,
// 				},
// 			});
// 		} else {
// 			// gsap.to(item, {
// 			// 	opacity: 0,
// 			// 	scrollTrigger: {
// 			// 		trigger: item,
// 			// 		start: () => (id + 1) * slidesEl[0].clientHeight - (slidesEl[0].clientHeight - 10) + ' top',
// 			// 		end: () => (id + 1) * slidesEl[0].clientHeight - (slidesEl[0].clientHeight - 10) + ' bottom',
// 			// 		scrub: 3,
// 			// 		markers: true,
// 			// 		onEnter: () => {
// 			// 			gsap.to(item, { duration: 2, scrollTo: { y: item.offsetTop + item.offsetHeight }, ease: 'power2.inOut' });
// 			// 		},
// 			// 	},
// 			// });
// 		}
// 		gsap.to(item, {
// 			zIndex: id * -1,
// 		});
// 		gsap.to(item, {
// 			opacity: 0,
// 			scrollTrigger: {
// 				trigger: item,
// 				start: () => (id + 1) * slidesEl[0].clientHeight - 200 + ' top',
// 				end: () => (id + 1) * slidesEl[0].clientHeight + ' top',
// 				scrub: 3,
// 				markers: true,
// 			},
// 		});
// 	});
// }

import Swiper from 'swiper';
import {
	Navigation,
	Pagination,
	Autoplay,
	EffectFade,
	EffectCoverflow,
	Thumbs,
	EffectCreative,
	Mousewheel,
} from "swiper/modules";

const kitchen_baner_swiper = new Swiper('.kitchen-baner_swiper', {
	modules: [Pagination, EffectCreative],
	allowTouchMove: false,
	speed: 5000,
	autoplay: {
		delay: 5000,
		stopOnLastSlide: true,
	},
	effect: "creative",
	creativeEffect: {
        prev: {
		  opacity: 0,
		  scale: 3,
		  translate: ["50%", 0, 0],
        },
        next: {
		  opacity: 0,
		  scale: 1,
        },
    },
	pagination: {
		el: '.kitchen-baner_pagination',
	},
});

const kitchen_baner_img = new Swiper('.kitchen-baner_img_swapper', {
	speed: 2500,
})
kitchen_baner_swiper.on('slideChange', function (e) {
	kitchen_baner_img.slideTo(kitchen_baner_swiper.activeIndex)
	if(kitchen_baner_swiper.slides.length -1 === kitchen_baner_swiper.activeIndex) {
		kitchen_baner_swiper.pagination.bullets[0].classList.add("swiper-pagination-bullet-active")
	}
});

const kitchen_baner_swiperr = new Swiper('.kitchen-baner_swiperr', {
	modules: [Pagination, EffectCreative],
	allowTouchMove: false,
	speed: 5000,
	autoplay: {
		delay: 700,
		stopOnLastSlide: true,
	},
	effect: "creative",
	creativeEffect: {
        prev: {
		  opacity: 0,
		  scale: 3,
		  translate: ["50%", 0, 0],
        },
        next: {
		  opacity: 0,
		  scale: 1,
        },
    },
	pagination: {
		el: '.kitchen-baner_pagination',
	},
});
kitchen_baner_swiperr.on('slideChange', function (e) {
	kitchen_baner_img.slideTo(kitchen_baner_swiperr.activeIndex)
	if(kitchen_baner_swiperr.slides.length -1 === kitchen_baner_swiperr.activeIndex) {
		kitchen_baner_swiperr.pagination.bullets[0].classList.add("swiper-pagination-bullet-active")
	}
});

const kitchen_baner_swiperrr = new Swiper('.kitchen-baner_swiperrr', {
	modules: [Pagination, EffectCreative],
	allowTouchMove: false,
	speed: 5000,
	autoplay: {
		delay: 1000,
		stopOnLastSlide: true,
	},
	effect: "creative",
	creativeEffect: {
        prev: {
		  opacity: 0,
		  scale: 3,
		  translate: ["50%", 0, 0],
        },
        next: {
		  opacity: 0,
		  scale: 1,
        },
    },
	pagination: {
		el: '.kitchen-baner_pagination',
	},
});
kitchen_baner_swiperrr.on('slideChange', function (e) {
	kitchen_baner_img.slideTo(kitchen_baner_swiperrr.activeIndex)
	if(kitchen_baner_swiperrr.slides.length -1 === kitchen_baner_swiperrr.activeIndex) {
		kitchen_baner_swiperrr.pagination.bullets[0].classList.add("swiper-pagination-bullet-active")
	}
});

const kitchen_baner_swiperrrr = new Swiper('.kitchen-baner_swiperrrr', {
	modules: [Pagination, EffectCreative],
	allowTouchMove: false,
	speed: 5000,
	autoplay: {
		delay: 1500,
		stopOnLastSlide: true,
	},
	effect: "creative",
	creativeEffect: {
        prev: {
		  opacity: 0,
		  scale: 3,
		  translate: ["50%", 0, 0],
        },
        next: {
		  opacity: 0,
		  scale: 1,
        },
    },
	pagination: {
		el: '.kitchen-baner_pagination',
	},
});
kitchen_baner_swiperrrr.on('slideChange', function (e) {
	kitchen_baner_img.slideTo(kitchen_baner_swiperrrr.activeIndex)
	if(kitchen_baner_swiperrrr.slides.length -1 === kitchen_baner_swiperrrr.activeIndex) {
		kitchen_baner_swiperrrr.pagination.bullets[0].classList.add("swiper-pagination-bullet-active")
	}
});