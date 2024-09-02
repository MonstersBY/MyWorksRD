import Swiper from 'swiper';
import { gsap, ScrollTrigger } from 'gsap/all';
import { Fancybox, Toolbar } from '@fancyapps/ui';
import { Thumbs } from 'swiper/modules';

window.addEventListener('DOMContentLoaded', () => {
  Swipers();

  gsap.registerPlugin(ScrollTrigger);

  if (window.screen.width > 768 && document.querySelector('.automatic')) {
    automaticsScrollAnimation();
  }

  if (document.querySelector('[data-fancybox]')) {
    const options = {
      animated: true,
      autoStart: false,

      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ['close']
        }
      },
      placeFocusBack: false,
      Thumbs: false
    };

    Fancybox.bind('[data-fancybox]', {
      ...options,

      on: {
        done: (fancybox) => {
          const fancyboxEl = fancybox.container,
            prevBtn = fancyboxEl.querySelector('.f-button.is-prev'),
            nextBtn = fancyboxEl.querySelector('.f-button.is-next');

          console.log(fancyboxEl);

          prevBtn &&
            (prevBtn.innerHTML = `
            <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM41 3.5L1 3.5V4.5L41 4.5V3.5Z" fill="#191817"/>
            </svg>
          `);

          nextBtn &&
            (nextBtn.innerHTML = `
            <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4.5H40V3.5H0V4.5Z" fill="#191817"/>
            </svg>
          `);
        }
      }
    });
  }
});

const automaticsScrollAnimation = () => {
  const block = document.querySelector('.automatic'),
    cards = block.querySelectorAll('.automatic__row-item.desktop'),
    duration = 1.5;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: block,
      start: 'middle 500px',
      end: 'bottom bottom',
      scrub: duration
    }
  });

  timeline
    .from(cards[0], {
      x: '57.2rem',
      duration
    })
    .from(cards[1], {
      x: '-57.2rem',
      duration
    })
    .from(cards[2], {
      x: '57.2rem',
      duration
    });
};

const Swipers = () => {
  const numbersSwiper = new Swiper('.numbers__swiper', {
    slidesPerView: 1.15,
    slidesPerGroup: 1,
    spaceBetween: 21,

    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },

    navigation: {
      prevEl: '.numbers__swiper-navigation--left',
      nextEl: '.numbers__swiper-navigation--right'
    }
  });

  const spheresSwiper = new Swiper('.spheres__swiper', {
    slidesPerView: 1.15,
    slidesPerGroup: 1,
    spaceBetween: 21,

    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    },

    navigation: {
      prevEl: '.spheres__swiper-navigation--left',
      nextEl: '.spheres__swiper-navigation--right'
    }
  });

  const resultsSwiper = new Swiper('.results__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    allowTouchMove: false,

    // grid: {
    //   rows: 4,
    //   fill: 'row'
    // },

    breakpoints: {
      768: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 40,

        grid: {
          rows: 1,
          fill: 'row'
        }
      }
    }
  });

  const resultsTitleSwiper = new Swiper('.results__title-swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    allowTouchMove: false,

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });

  if (document.querySelector('.results__title-swiper') && document.querySelector('.results__swiper')) {
    const nextBtn = document.querySelector('.results__swiper-navigation--right'),
      prevBtn = document.querySelector('.results__swiper-navigation--left');

    nextBtn.addEventListener('click', () => {
      resultsSwiper.slideNext();
      resultsTitleSwiper.slideNext();
    });

    prevBtn.addEventListener('click', () => {
      resultsSwiper.slidePrev();
      resultsTitleSwiper.slidePrev();
    });
  }

  const executionSwiper = new Swiper('.execution__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,

    breakpoints: {
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 40
      }
    },

    on: {
      init: (swiper) => {
        if (window.screen.width > 768) {
          const progressBar = document.querySelector(
              '.execution__swiper-progress .swiper-pagination-progress-bar'
            ),
            progressLine = document.querySelector(
              '.execution__swiper-progress .swiper-pagination-progress-line'
            ),
            current = document.querySelector('.execution__swiper-current'),
            all = document.querySelector('.execution__swiper-all');

          all.textContent =
            swiper.slides.length / 3 >= 10 ? swiper.slides.length / 3 : `0${swiper.slides.length / 3}`;

          current.textContent = `0${swiper.activeIndex + 1}`;

          progressLine.style.width = `${progressBar.clientWidth / all.textContent}px`;
        }
      },

      slideChange: (swiper) => {
        if (window.screen.width > 768) {
          const progressBar = document.querySelector(
              '.execution__swiper-progress .swiper-pagination-progress-bar'
            ),
            progressLine = document.querySelector(
              '.execution__swiper-progress .swiper-pagination-progress-line'
            ),
            current = document.querySelector('.execution__swiper-current'),
            all = document.querySelector('.execution__swiper-all');

          if (swiper.activeIndex == 0) {
            progressLine.style.width = `${progressBar.clientWidth / all.textContent}px`;
            current.textContent = `0${swiper.activeIndex + 1}`;
          } else {
            current.textContent =
              swiper.activeIndex - 1 >= 10 ? swiper.activeIndex - 1 : `0${swiper.activeIndex - 1}`;
            progressLine.style.width = `${
              (progressBar.clientWidth / all.textContent) * current.textContent
            }px`;
          }
        }
      }
    },

    pagination: {
      el: window.screen.width <= 768 && '.execution__swiper-pagination.mobile'
    },

    navigation: {
      prevEl: '.execution__swiper-navigation--left',
      nextEl: '.execution__swiper-navigation--right'
    }
  });
};
