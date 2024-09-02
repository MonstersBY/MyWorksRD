import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function newsDetArticle() {
    const newsDetArticleSwiper = new Swiper('.news-det-article__swiper', {
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.news-det-article__swiper-navigation--right',
            prevEl: '.news-det-article__swiper-navigation--left',
        },
        pagination: {
            el: ".news-det-article__swiper-pagination",
            type: "bullets",
            dynamicBullets: true,
        },
        breakpoints: {
            769: {
         
            },
        },
    });
}

export default newsDetArticle;
