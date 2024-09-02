import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

window.$ = window.jQuery = require('jquery');

import { rem } from '../utils/constants';
import { animateHeader, animateFooter, animateFooterMob, observerHtml } from './main';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  if (document.querySelector('.main-history')) {
    if (window.innerWidth > 767) {
      animateHeader(1.5, 'power2');
      animateHistory(1, 'power2');
      historySwiper();
      observerHtml();
    } else {
      historySwiperMob();
    }
  }
});

let scrollCounter = 1;
let scrollCounter2 = 1;
let scrolling = false;
let executedFunctions = {};

function historySwiper() {
  const mainPageFull = new fullpage('#fullpage', {
    scrollingSpeed: 800,
    scrollOverflow: false,
    normalScrollElements: '#history-slide, .header',
    responsiveWidth: 768,
    onLeave: function (origin, destination, direction, trigger) {
      if (!executedFunctions[destination.anchor] && destination.anchor == 'footer' && direction == 'down') {
        animateFooter(2, 'power2.in');
        executedFunctions[destination.anchor] = true;
      }
    }
  });

  const slidesLength = document.querySelectorAll('.history-slide__swiper-slide').length * 2;
  window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
      if (scrollCounter2 > slidesLength) {
        console.log(slidesLength);
        mainPageFull.moveTo(2);
        scrollCounter2 = slidesLength;
      }
    }
  });

  const historySwiperThumb = new Swiper('.history-slide__thumb-swiper', {
    slidesPerView: '1',
    allowTouchMove: false,
    spaceBetween: rem(2),
    speed: 800
  });

  const historySwiper = new Swiper('.history-slide__swiper', {
    direction: 'vertical',
    slidesPerView: 'auto',
    allowTouchMove: false,
    speed: 800
  });

  const btnNext = document.querySelector('.history-slide__btn--next');
  const btnPrev = document.querySelector('.history-slide__btn--prev');

  btnPrev.style.opacity = '0.5';

  btnNext.addEventListener('click', () => {
    if (!scrolling) {
      scrolling = true;
      if (scrollCounter <= slides.length * 2 - 1) {
        scrollCounter++;
        btnPrev.style.opacity = '1';
      }
      if (scrollCounter2 <= slides.length * 2) {
        scrollCounter2++;
      }
      if (scrollCounter === slides.length * 2) {
        btnNext.style.opacity = '0.5';
      }

      console.log(scrollCounter2);
      const slide = document.querySelector('.swiper-slide-active');
      const contentBox = slide.querySelector('.history-slide__content-box');
      const img = slide.querySelectorAll('.history-slide__img-box img');

      if (scrollCounter % 2 === 0) {
        scrollBottom(contentBox, img);
      } else {
        historySwiper.slideNext();
        historySwiperThumb.slideNext();
      }

      setTimeout(() => {
        scrolling = false;
      }, 800);
    }
  });

  btnPrev.addEventListener('click', () => {
    if (!scrolling) {
      scrolling = true;
      if (scrollCounter > 1) {
        scrollCounter--;
        btnNext.style.opacity = '1';
      }
      if (scrollCounter === 1) {
        btnPrev.style.opacity = '0.5';
      }

      if (scrollCounter2 > 1) {
        scrollCounter2--;
      }

      const slide = document.querySelector('.swiper-slide-active');
      const contentBox = slide.querySelector('.history-slide__content-box');
      const img = slide.querySelectorAll('.history-slide__img-box img');

      if (scrollCounter % 2 !== 0) {
        scrollTop(contentBox, img);
      } else {
        historySwiper.slidePrev();
        historySwiperThumb.slidePrev();
      }

      setTimeout(() => {
        scrolling = false;
      }, 800);
    }
  });

  const slides = document.querySelectorAll('.history-slide__swiper-slide');
  let touchStartY = 0;
  let touchEndY = 0;
  slides.forEach((slide, i) => {
    const contentBox = slide.querySelector('.history-slide__content-box');
    const img = slide.querySelectorAll('.history-slide__img-box img');

    slide.addEventListener('wheel', (event) => {
      if (!scrolling) {
        scrolling = true;
        if (event.deltaY > 0) {
          if (scrollCounter <= slides.length * 2 - 1) {
            scrollCounter++;
            btnPrev.style.opacity = '1';
          }
          if (scrollCounter2 <= slides.length * 2) {
            scrollCounter2++;
          }
          if (scrollCounter === slides.length * 2) {
            btnNext.style.opacity = '0.5';
          }
        } else {
          if (scrollCounter > 1) {
            scrollCounter--;
            btnNext.style.opacity = '1';
          }
          if (scrollCounter === 1) {
            btnPrev.style.opacity = '0.5';
          }
          if (scrollCounter2 > 1) {
            scrollCounter2--;
          }
        }

        console.log(scrollCounter2);

        console.log(scrollCounter);
        if (event.deltaY > 0) {
          if (scrollCounter % 2 === 0) {
            scrollBottom(contentBox, img);
          } else {
            historySwiper.slideNext();
            historySwiperThumb.slideNext();
          }
        } else {
          if (scrollCounter % 2 !== 0) {
            scrollTop(contentBox, img);
          } else {
            historySwiper.slidePrev();
            historySwiperThumb.slidePrev();
          }
        }

        setTimeout(() => {
          scrolling = false;
        }, 800);
      }
    });
  });

  function scrollBottom(contentBox, img) {
    gsap.to(contentBox, {
      duration: 0.8,
      scrollTop: contentBox.scrollHeight - contentBox.clientHeight, // Прокручиваем до конца
      ease: 'power2'
    });
    gsap.to(img, {
      duration: 0.8,
      scale: 1.15,
      ease: 'power2'
    });
  }

  function scrollTop(contentBox, img) {
    gsap.to(contentBox, {
      duration: 1,
      scrollTop: 0, // Прокручиваем до верха
      ease: 'power2' // Эффект анимации
    });
    gsap.to(img, {
      duration: 1,
      scale: 1,
      ease: 'power2'
    });
  }
}

function animateHistory(duration, ease) {
  const bg = document.querySelector('.history-bg'),
    contentTitle = document.querySelector('.history-slide__content-title span'),
    title = document.querySelector('.history-slide__title'),
    btn = document.querySelector('.history-slide__favorite-btn'),
    billet = document.querySelector('.history-slide__billet'),
    img = document.querySelector('.history-slide__img-box img'),
    favoriteText = document.querySelector('.history-slide__favorite-text-desc span'),
    btnBox = document.querySelector('.history-slide__btn-box'),
    slide = document.querySelector('.history-slide__thumb-swiper-slide');
  const tl = gsap.timeline();

  tl.from(bg, {
    duration,
    ease,
    height: 0
  })
    .from(
      contentTitle,
      {
        duration,
        ease,
        y: '-200%',
        rotateZ: '20deg'
      },
      `-=${duration}`
    )
    .from(
      title,
      {
        duration,
        ease,
        x: '-200%'
      },
      `-=${duration}`
    )
    .from(
      btn,
      {
        duration,
        ease,
        y: '200%'
      },
      `-=${duration}`
    )
    .from(
      billet,
      {
        duration,
        ease,
        x: '200%'
      },
      `-=${duration}`
    )
    .from(
      img,
      {
        duration,
        ease,
        height: 0,
        scale: 1.3
      },
      `-=${duration}`
    )
    .from(
      favoriteText,
      {
        duration,
        ease,
        y: '-200%'
      },
      `-=${duration}`
    )
    .from(
      btnBox,
      {
        duration,
        ease,
        y: '-200%'
      },
      `-=${duration}`
    )
    .from(
      slide,
      {
        duration,
        ease,
        y: '-200%'
      },
      `-=${duration}`
    );
}

function historySwiperMob() {
  const swiperMain = new Swiper('.history-slide-mob__main-swiper', {
    slidesPerView: '1',
    spaceBetween: rem(2),
    autoHeight: true,
    speed: 800,
    navigation: {
      nextEl: '.history-slide-mob__btn--next',
      prevEl: '.history-slide-mob__btn--prev'
    }
  });

  const swiperTitle = new Swiper('.history-slide-mob__title-swiper', {
    slidesPerView: '1',
    spaceBetween: rem(2),
    speed: 800,
    effect: 'fade',
    allowTouchMove: false,
    fadeEffect: {
      crossFade: true
    }
  });

  const swiperThumb = new Swiper('.history-slide-mob__thumb-swiper', {
    slidesPerView: '1',
    spaceBetween: rem(2),
    speed: 800,
    effect: 'fade',
    allowTouchMove: false,
    fadeEffect: {
      crossFade: true
    }
  });

  swiperMain.controller.control = [swiperTitle, swiperThumb];
  //   swiper2.controller.control = [swiper1, swiper3];
  //   swiper3.controller.control = [swiper1, swiper2];
}
