import Swiper from 'swiper';
import { rem } from '../utils/constants';

const about_cycle__swiper = new Swiper('.about-cycle__swiper', {
    slidesPerView: 1,
    spaceBetween: rem(4),
    
    navigation: {
        nextEl: '.about-cycle__nav-right',
        prevEl: '.about-cycle__nav-left',
    },
    pagination: {
        el: ".about-cycle__pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3.3,
        }
    },
});