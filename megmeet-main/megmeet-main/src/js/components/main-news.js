import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function mainNews() {
  const mainNewsSwiper = new Swiper('.main-news__swiper', {
    slidesPerView: 1.15,
    slidesPerGroup: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      }
    },

    navigation: {
      prevEl: '.main-news__swiper-navigation--left',
      nextEl: '.main-news__swiper-navigation--right'
    }
  });
}

export default mainNews;
