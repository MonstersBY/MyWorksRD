import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function currentVacancies() {
  const curSlide = document.querySelector('.current-vacancies__pagination-num--cur');
  const lastSlide = document.querySelector('.current-vacancies__pagination-num--last');
  const slides = document.querySelectorAll('.current-vacancies__right-swiper-slide');
  const slidesLeft = document.querySelectorAll('.current-vacancies__left-swiper-slide');

  slides.forEach((item, i) => (item.dataset.num = i));
  slidesLeft.forEach((item, i) => (item.dataset.num = i));
  slidesLeft[0].classList.add('active');

  const currentVacanciesLeftSwiper = new Swiper('.current-vacancies__left-swiper', {
    slidesPerView: 2,
    direction: 'vertical',
    slidesPerGroup: 1,
    // loop: true,
    spaceBetween: 20,
    allowTouchMove: false,
    speed: 800,

    breakpoints: {
      768: {}
    },

    navigation: {
      //   prevEl: '.current-vacancies__swiper-navigation--left',
      //   nextEl: '.current-vacancies__swiper-navigation--right'
    }
  });
  const currentVacanciesRightSwiper = new Swiper('.current-vacancies__right-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 21,
    // loop: true,
    speed: 800,
    allowTouchMove: false,
    breakpoints: {
      768: {}
    },
    pagination: {
      el: '.current-vacancies__pagination',
      type: 'progressbar'
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      prevEl: '.current-vacancies__swiper-navigation--left',
      nextEl: '.current-vacancies__swiper-navigation--right'
    },
    on: {
      init: (swiper) => {
        // curSlide.textContent = `0${+(swiper.slides[swiper.activeIndex].getAttribute('data-num')) + 1}`;
        // lastSlide.textContent = `0${swiper.slides.length}`;
        curSlide.textContent = `${(+swiper.slides[swiper.activeIndex].getAttribute('data-num') + 1)
          .toString()
          .padStart(2, '0')}`;
        lastSlide.textContent = `${swiper.slides.length.toString().padStart(2, '0')}`;
      },
      slideChange: function (swiper) {
        const activeSlide = document.querySelector(
          '.current-vacancies__right-swiper-slide.swiper-slide-visible'
        );
        // curSlide.textContent = `0${+swiper.slides[swiper.activeIndex].getAttribute('data-num') + 1}`;
        curSlide.textContent = `${(+swiper.slides[swiper.activeIndex].getAttribute('data-num') + 1)
        .toString()
        .padStart(2, '0')}`;
        slidesLeft.forEach((slide) => slide.classList.remove('active'));
        currentVacanciesLeftSwiper.slideTo(activeSlide.dataset.num);
        currentVacanciesLeftSwiper.slides[activeSlide.dataset.num].classList.add('active');
      }
    }
  });

  slidesLeft.forEach((item, i) => {
    item.addEventListener('click', () => {
      currentVacanciesRightSwiper.slideTo(item.dataset.num);
    });
  });
}

export default currentVacancies;
