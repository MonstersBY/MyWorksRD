import $ from 'jquery';
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

if($('.banner').length) {
		
	const banner_slider = new Swiper('.banner__slider', {
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
			},
			next: {
			  opacity: 0,
			  scale: 1,
			},
		},
		pagination: {
			el: '.banner_pagination',
		},
	});
	const banner_img = new Swiper('.banner__anim-img_swapper', {
		speed: 2500,
	})
	banner_slider.autoplay.stop()
	banner_slider.on('slideChange', function (e) {
		banner_img.slideTo(banner_slider.activeIndex)
		if(banner_slider.slides.length -1 === banner_slider.activeIndex) {
			banner_slider.pagination.bullets[0].classList.add("swiper-pagination-bullet-active")
		}
	});

	const bannerWrapper = document.querySelectorAll('.banner__anim-wrapper');
	const slideWidth = 60; // ширина одного слайда в процентах
	const gapWidth = 10; // ширина отступа между слайдами в rem
	const centerSlide = 10; // номер центрального слайда
	
	const slideWidthPercent = slideWidth; // ширина слайда в процентах
	const gapWidthPercent = (gapWidth / document.documentElement.clientWidth) * 100; // конвертация ширины отступа из rem в проценты
	
	const translateValue = `calc((50% - (${slideWidthPercent}% * ${centerSlide} + ${gapWidthPercent / 2} * (${centerSlide} - 1)))`;
	
	console.log('translateValue: ', translateValue);
	
	const mainImg = document.querySelector('.banner__anim-img.main');
	const header = document.querySelector('.header');
	const bannerSlider = document.querySelector('.banner__slider');
	const bannerText = document.querySelector('.banner__anim-text');
	
	if(localStorage.getItem('seeBanerAnim') !== 'true') {
		setTimeout(() => {
			bannerWrapper.forEach((wrapper, id) => {
				wrapper.classList.add('active');
				if (id === 1) {
					console.log('id: ', id);
					// const wrapperSlides = wrapper.querySelector('.banner__anim-img');
					// bannerWrapper[1].style.transform = `translateX(${translateValue})`;
				}
			});
			header.classList.remove('no-tran');
			// bannerText.classList.remove('no-tran');
		}, 1);
		
		setTimeout(() => {
			mainImg.classList.add('active');
			header.classList.remove('anim');
			// bannerText.classList.remove('anim');
		}, window.screen.width < 1200 ? 2200 : 4200 );
		
		// setTimeou
		
		setTimeout(() => {
			if(mainImg.querySelector('video')) {
				mainImg.querySelector('video').play()
			}
			bannerSlider.classList.remove('anim');
			document.body.classList.add('anim-ended');
			banner_slider.autoplay.start()
			localStorage.setItem('seeBanerAnim', 'true')
		}, window.screen.width < 1200 ? 3200 : 5200 );
	} else {
		if(mainImg.querySelector('video')) {
			mainImg.querySelector('video').play()
		}
		mainImg.style.transition = "none";
		mainImg.classList.add('active');
		bannerSlider.classList.remove('anim');
		document.body.classList.add('anim-ended');
		banner_slider.autoplay.start()
	}
}
	
const btnPlays = document.querySelectorAll('.btn-play');
const videos = document.querySelectorAll('.video-company');

videos.forEach((video, id) => {
	// video.addEventListener('loadeddata', () => {
	if (btnPlays[id]) {
		let isPause = true;
		setTimeout(() => {
			btnPlays[id].classList.add('play');
			btnPlays[id]?.addEventListener('click', () => {
				video.play();
				btnPlays[id].classList.add('pause');
				isPause = false;
			});
			video.addEventListener('play', () => {
				btnPlays[id].classList.add('pause');
				isPause = false;
			});

			video.addEventListener('pause', () => {
				console.log('pause');
				btnPlays[id].classList.remove('pause');
				isPause = true;
			});
			video.addEventListener('click', () => {
				if (isPause) {
					video.play();
				} else {
					video.pause();
				}
			});
		}, 1200);
	}
	// });
});
const imageContainer = document.querySelector('.image_slider__container');
// const btnsPhotos = document.querySelectorAll('.with_product__main-btn');

document.querySelector('.image_slider')?.addEventListener('input', e => {
	imageContainer.style.setProperty('--position', `${e.target.value}%`);
});

const cookie = document.querySelector('.cookie')

if(cookie) {
	document.querySelector('.cookie__btn').addEventListener('click', () => {
		cookie.classList.remove('cookie--show')
	})
}