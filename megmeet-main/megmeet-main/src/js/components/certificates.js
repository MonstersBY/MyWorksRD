import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function certificates() {
  const curSlide = document.querySelector('.certificates__pagination-num--cur');
  const lastSlide = document.querySelector('.certificates__pagination-num--last');
  const slides = document.querySelectorAll('.certificates__swiper-slide');
  const slidesInner = document.querySelectorAll('.certificates__slide-inner');

  slides.forEach((item, i) => (item.dataset.num = i));

  const certificatesSwiper = new Swiper('.certificates__swiper', {
    slidesPerView: '1',
    spaceBetween: 21,
    loop: true,
    speed: 800,
    centeredSlides: false,
    allowTouchMove: false,

    pagination: {
      el: '.certificates__pagination',
      type: 'bullets',
      dynamicBullets: true
    },
    navigation: {
      prevEl: '.certificates__swiper-navigation--left',
      nextEl: '.certificates__swiper-navigation--right'
    },
    breakpoints: {
      768: {
        slidesPerView: 4.35,
        spaceBetween: 40,
        spaceBetween: rem(4),
        centeredSlides: true,
        pagination: {
          type: 'progressbar'
        }
      }
    },
    on: {
      init: (swiper) => {
        curSlide.textContent = `${(+swiper.slides[swiper.activeIndex].getAttribute('data-num') + 1)
          .toString()
          .padStart(2, '0')}`;
        lastSlide.textContent = `${swiper.slides.length.toString().padStart(2, '0')}`;
      },
      slideChange: function (swiper) {
        curSlide.textContent = `${(+swiper.slides[swiper.activeIndex].getAttribute('data-num') + 1)
          .toString()
          .padStart(2, '0')}`;
      }
    }
  });
  setTimeout(() => {
    slides.forEach((item, i) => item.classList.add('_transition'));
  }, 100);


}

export default certificates;
