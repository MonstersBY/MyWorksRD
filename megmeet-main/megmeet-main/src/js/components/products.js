import $ from "jquery";
import Swiper from 'swiper';
import {
	Pagination,
	Navigation,
    EffectFade
} from "swiper/modules";
import { rem } from '../utils/constants';

const products_adv__swiper = new Swiper('.products-adv__swiper', {
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: '.products-adv__nav-right',
        prevEl: '.products-adv__nav-left',
    },
    pagination: {
        el: ".products-adv__pagination",
        type: "bullets",
        dynamicBullets: true,
    },
    breakpoints: {
        769: {
            pagination: {
                el: ".products-adv__pagination",
                type: "progressbar",
            },
        },
    },
});

const products_ad__swiper = new Swiper('.products-ad__swiper', {
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: rem(4),
    navigation: {
        nextEl: '.products-ad__nav-right',
        prevEl: '.products-ad__nav-left',
    },
    pagination: {
        el: ".products-ad__pagination",
        dynamicBullets: true,
    },

    breakpoints: {
        769: {
            slidesPerView: 3,
        },
    },
});