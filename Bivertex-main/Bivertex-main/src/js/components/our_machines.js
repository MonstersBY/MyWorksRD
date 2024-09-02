import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { rem } from '../utils/constants';

document.addEventListener('DOMContentLoaded', () => {
    const our_machines__top = new Swiper('.our_machines__top', {
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        spaceBetween: rem(1.3),
        preventClicks :true,
        a11y: false,
        // speed: 300,
    
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                spaceBetween: rem(0.5)
            }
        }
    });

    const our_machines__bottom = new Swiper('.our_machines__bottom', {
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        spaceBetween: rem(1.3),
        preventClicks :true,
        a11y: false,
        // speed: 300,
    
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                spaceBetween: rem(0.5)
            }
        }
    });

    $(".our_machines__pagination-next").on("click", function () {
		our_machines__top.slideNext();
		our_machines__bottom.slideNext();
	});
    $(".our_machines__pagination-prev").on("click", function () {
		our_machines__top.slidePrev();
		our_machines__bottom.slidePrev();
	});

    Fancybox.bind('[data-fancybox]', {
        idle: false,
        Thumbs: false,
        Carousel: {
            transition: "slide",
        },
        Toolbar: {
            display: {
              left: [],
              middle: [],
              right: ['close'],
            },
            items: {
                close: {
                    tpl: '<svg class="f-button-close" data-fancybox-close width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.75" width="60.5" height="60.5" rx="7.25" stroke="white" stroke-width="1.5"/><g clip-path="url(#clip0_2298_13735)"><path fill-rule="evenodd" clip-rule="evenodd" d="M37.5285 25.5304L38.0588 25.0001L36.9982 23.9395L36.4678 24.4698L30.9982 29.9395L25.5285 24.4698L24.9982 23.9395L23.9375 25.0001L24.4678 25.5304L29.9375 31.0001L24.4678 36.4698L23.9375 37.0001L24.9982 38.0608L25.5285 37.5304L30.9982 32.0608L36.4678 37.5304L36.9982 38.0608L38.0588 37.0001L37.5285 36.4698L32.0588 31.0001L37.5285 25.5304ZM30.9983 30L29.9982 31.0001L30.9983 32.0003L31.9985 31.0001L30.9983 30Z" fill="white"/></g><defs><clipPath id="clip0_2298_13735"><rect width="24" height="24" fill="white" transform="translate(19 19)"/></clipPath></defs></svg>',
                },
            },
        },
        Carousel: {
            Navigation: {
                prevTpl:
                    `<svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M61 28.5L61 9C61 4.58172 57.4183 1 53 1L9 1C4.58172 1 1 4.58172 1 9L1 53C1 57.4183 4.58172 61 9 61L53 61C57.4183 61 61 57.4183 61 53L61 34" stroke="rgba(255, 255, 255, 1)" stroke-width="1.5"/>
                    <path d="M59 31L17 31" stroke="rgba(255, 255, 255, 1)" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
                    <path d="M32 15L16 30.2605M16.0133 31.6802L31.9281 47" stroke="rgba(255, 255, 255, 1)" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
                </svg>`,
                nextTpl:
                    `<svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 28.5V9C1 4.58172 4.58172 1 9 1H53C57.4183 1 61 4.58172 61 9V53C61 57.4183 57.4183 61 53 61H9C4.58172 61 1 57.4183 1 53V34" stroke="rgba(255, 255, 255, 1)" stroke-width="1.5"/>
                    <path d="M45 31L3 31" stroke="rgba(255, 255, 255, 1)" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
                    <path d="M30 15L46 30.2605M45.9867 31.6802L30.0719 47" stroke="rgba(255, 255, 255, 1)" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
                </svg>`,
            },
        },
        prev: {
            tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev>123</button>',
        },
        next: {
            tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next>3</button>',
        },
        on: {
            init: function () {
                $(".fancybox-bg").fadeIn();
            },
            close: function () {
                $(".fancybox-bg").fadeOut();
            },
        },
    });
    $(".fancybox-bg").on("click", function () {
        Fancybox.close();
    });
});