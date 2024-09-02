import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/utils';
import CircleType from 'circletype';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

document.addEventListener('DOMContentLoaded', () => {
    try {
        articleMinSlider();
    } catch {}
    try {
        detailedPortfolioMinSlider();
    } catch {}
    try {
        employeesSlider();
    } catch {}
    try {
        certificatesSlider();
    } catch {}
    try {
        qualitySlider();
    } catch {}
    try {
        fancy();
    } catch {}
});

function articleMinSlider() {
    const swiper = new Swiper('.article__content-swiper', {
        slidesPerView: 1,
        loop: 'true',
        spaceBetween: rem(2),
        grabCursor: true,
        speed: 1000,
        navigation: {
            nextEl: '.article__btn-next',
            prevEl: '.article__btn-prev'
        },
        pagination: {
            el: '.article__fractions',
            type: 'fraction'
        },
        breakpoints: {
            769: {
                slidesPerView: 2
            }
        }
    });
}
function detailedPortfolioMinSlider() {
    const swiper = new Swiper('.detailed-portfolio__content-swiper', {
        slidesPerView: 1,
        loop: 'true',
        spaceBetween: rem(2),
        grabCursor: true,
        speed: 1000,
        navigation: {
            nextEl: '.detailed-portfolio__btn-next',
            prevEl: '.detailed-portfolio__btn-prev'
        },
        pagination: {
            el: '.detailed-portfolio__fractions',
            type: 'fraction'
        },
        breakpoints: {
            769: {
                slidesPerView: 2
            }
        }
    });
}
function employeesSlider() {
    const swiper = new Swiper('.employees__swiper', {
        slidesPerView: 1,
        loop: 'true',
        spaceBetween: rem(2),
        grabCursor: true,
        speed: 1000,
        effect: 'fade',
        navigation: {
            nextEl: '.employees__btn-next',
            prevEl: '.employees__btn-prev'
        },
        pagination: {
            el: '.employees__fractions',
            type: 'fraction'
        }
    });
}
function certificatesSlider() {
    const swiper = new Swiper('.certificates__swiper', {
        slidesPerView: 1,
        loop: 'true',
        spaceBetween: rem(2.4),
        grabCursor: true,
        speed: 1000,
        navigation: {
            nextEl: '.certificates__btn-next',
            prevEl: '.certificates__btn-prev'
        },
        pagination: {
            el: '.certificates__fractions',
            type: 'fraction'
        },
        breakpoints: {
            769: {
                slidesPerView: 4
            }
        }
    });
}
function qualitySlider() {
    const circleType = new CircleType(document.querySelector('.quality-banner__circle'));

    const swiperMin = new Swiper('.quality-banner__swiper', {
        slidesPerView: 1,
        loop: 'true',
        spaceBetween: rem(2.4),
        grabCursor: true,
        speed: 1000,
        navigation: {
            nextEl: '.quality-banner__btn-next',
            prevEl: '.quality-banner__btn-prev'
        },
        pagination: {
            el: '.quality-banner__fractions',
            type: 'fraction'
        },
        breakpoints: {
            769: {
                slidesPerView: 4
            }
        }
    });
}
function fancy() {
    Fancybox.bind('[data-fancybox]', {
        Carousel: {
            Navigation: {
                prevTpl: `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="29" viewBox="0 0 31 29" fill="none">
          <path d="M29.9197 14.5811L1.08098 14.5805" stroke="#FBF7EB" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.51562 20.9645L1.08095 14.5809L7.51562 8.19727" stroke="#FBF7EB" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
                nextTpl: `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="29" viewBox="0 0 31 29" fill="none">
          <path d="M1.08034 14.5805L29.919 14.5812" stroke="#FBF7EB" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M23.4844 8.19715L29.919 14.5808L23.4844 20.9644" stroke="#FBF7EB" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`
            }
        }
    });
}
