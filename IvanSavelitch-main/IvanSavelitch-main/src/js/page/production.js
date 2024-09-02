import 'inputmask';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

window.$ = window.jQuery = require('jquery');

import { rem } from '../utils/constants';
import { animateHeader, animateFooter, animateFooterMob, observerHtml } from './main';
export const modules = {};

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  if (document.querySelector('.main-production')) {
    animateHeader(3, 'power2');
    productionHeroAnim(duration, ease);
    productionGallerySwiper();
    productionHeroFavorite();
    if (window.innerWidth > 767) {
      let executedFunctions = {};
      let bg = document.querySelectorAll('.family-production__bg');

      const mainPageFull = new fullpage('#fullpage', {
        scrollingSpeed: 1500,
        scrollOverflow: false,
        fitToSection: false,
        // afterLoad
        // onLeave
        afterLoad: function (origin, destination, direction, trigger) {
          if (destination.anchor == 'family-production') {
            bg.forEach((item) => item.classList.add('active'));
            //   if (!executedFunctions[destination.anchor]) {
            //     familyProductionAnim(duration, ease);
            //     executedFunctions[destination.anchor] = true;
            //   }
          }
        },

        onLeave: function (origin, destination, direction, trigger) {
          if (destination.anchor == 'production-hero') {
            if (direction == 'up') {
              bg.forEach((item) => item.classList.remove('active'));
            }
          }
          if (destination.anchor == 'family-production') {
            if (!executedFunctions[destination.anchor]) {
              familyProductionAnim(duration, 'power2');
              executedFunctions[destination.anchor] = true;
            }
          }

          if (destination.anchor == 'production-gallery') {
            if (direction == 'down') {
              bg.forEach((item) => {
                if (item.classList.contains('family-production__bg--anim')) {
                  gsap.to(item, { duration: 1.5, y: '-200%' });
                }
                setTimeout(() => {
                  item.classList.remove('active');
                }, 1500);
              });
              if (!executedFunctions[destination.anchor]) {
                productionGalleryAnim('power2');
                executedFunctions[destination.anchor] = true;
              }
            }
          }
          if (destination.anchor == 'production-num__item-last') {
            if (direction == 'up') {
              bg.forEach((item) => {
                item.classList.add('active');
                if (item.classList.contains('family-production__bg--anim')) {
                  gsap.to(item, { duration: 1.5, y: '0' });
                }
              });
            }
          }
          if (
            !executedFunctions[destination.anchor] &&
            destination.anchor == 'footer' &&
            direction == 'down'
          ) {
            animateFooter(duration, ease);
            executedFunctions[destination.anchor] = true;
          }
        }
      });

      document.querySelector('.production-hero__info-scroll-btn').addEventListener('click', () => {
        mainPageFull.moveTo(2);
      });

      observerHtml();
    } else {
      gsap.to(window, { duration: 0.5, scrollTo: '.header' });
      const scroll = document.querySelector(`.production-hero__info-scroll-btn`);

      scroll.addEventListener('click', (e) => {
        document.querySelector('.family-production').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });

      setTimeout(() => {
        familyProductionAnimMob(duration, 'power2');
        animateProductionNum('.production-num__item-wrapper--first');
        animateProductionNum('.production-num__item-wrapper--second');
        animateProductionNum('.production-num__item-wrapper--third');
        animBgMob();
        productionGalleryAnimMob();
        animateFooterMob(duration, ease);
      }, 1000);
    }
  }
});

let duration = 2;
let ease = 'power2.in';

function productionHeroFavorite() {
  const favoriteBtns = document.querySelector('.production-hero__info-favorite-btn');
  favoriteBtns.addEventListener('click', () => {
    favoriteBtns.classList.toggle('active');
  });
}

function productionHeroAnim(duration, ease) {
  const title = document.querySelector('.production-hero__title-box-wrapper'),
    imgBox = document.querySelectorAll('.production-hero__title-img-box'),
    imgList = document.querySelector('.production-hero__title-img-wrapper'),
    scroll = document.querySelector('.production-hero__info-scroll-btn'),
    list = document.querySelector('.production-hero__info-list'),
    favorite = document.querySelector('.production-hero__info-favorite-box');

  gsap
    .timeline()

    .from(title, {
      duration: 1.5,
      ease: 'power2.inOut',
      width: 0
    })
    .from(
      imgList,
      {
        duration: 2,
        ease: 'power2.inOut',
        y: 800
      },
      '-=1.5'
    )
    .from(
      scroll,
      {
        duration: 2,
        ease: 'power2.inOut',
        y: 500
      },
      '-=2'
    )
    .from(
      favorite,
      {
        duration: 2,
        ease: 'power2.inOut',
        width: 0
      },
      '-=2'
    )
    .from(
      list,
      {
        duration: 2,
        ease: 'power2.inOut',
        height: 0
      },
      '-=2'
    )
    .from(
      imgBox,
      {
        duration: 2,
        ease: 'power2.inOut',
        rotateZ: '20deg'
      },
      '-=2'
    )
    .from(imgBox[3], {
      duration: 1.5,
      ease: 'power2.in',
      keyframes: {
        '0%': { rotationY: '0deg', y: '0' },
        '10%': { rotateZ: '5deg' },
        '40%': { rotationY: '90deg' },
        '70%': { rotationY: '180deg' },
        '100%': { y: '-800' }
      }
    })
    .from(imgBox[2], {
      duration: 1.5,
      ease: 'power2.in',
      keyframes: {
        '0%': { rotationY: '0deg', y: '0' },
        '10%': { rotateZ: '5deg' },
        '40%': { rotationY: '90deg' },
        '70%': { rotationY: '180deg' },
        '100%': { y: '-800' }
      },
      onUpdate: function () {
        gsap.to(imgBox[2].querySelector('img'), {
          duration: 0.5,
          opacity: 1
        });
      }
    })
    .from(imgBox[1], {
      duration: 1.5,
      ease: 'power2.in',
      keyframes: {
        '0%': { rotationY: '0deg', y: '0' },
        '10%': { rotateZ: '5deg' },
        '40%': { rotationY: '90deg' },
        '70%': { rotationY: '180deg' },
        '100%': { y: '-800' }
      },
      onUpdate: function () {
        gsap.to(imgBox[1].querySelector('img'), {
          duration: 0.5,
          opacity: 1
        });
      }
    })
    .from(imgBox[0], {
      duration: 1.5,
      ease: 'power2.in',
      keyframes: {
        '0%': { rotationY: '0deg', y: '0' },
        '10%': { rotateZ: '5deg' },
        '40%': { rotationY: '90deg' },
        '70%': { rotationY: '180deg' },
        '100%': { y: '-800' }
      },
      onUpdate: function () {
        gsap.to(imgBox[0].querySelector('img'), {
          duration: 0.5,
          opacity: 1
        });
      }
    });
}

function familyProductionAnim(duration, ease) {
  const title = document.querySelectorAll('.family-production--anim-text span'),
    imgFirst = document.querySelectorAll('.family-production--anim-img-first'),
    imgSecond = document.querySelectorAll('.family-production--anim-img-second'),
    imgThird = document.querySelectorAll('.family-production--anim-img-third'),
    list = document.querySelector('.family-production__standard-list'),
    deskTextLeft = document.querySelector('.family-production__family-row-text span'),
    bottomText = document.querySelectorAll('.family-production--anim-img-text span'),
    img = document.querySelector('.family-production__img-img-box img');

  title.forEach((item) => (item.style.opacity = 0));
  imgFirst.forEach((item) => (item.style.opacity = 0));
  imgSecond.forEach((item) => (item.style.opacity = 0));
  imgThird.forEach((item) => (item.style.opacity = 0));
  list.style.opacity = 0;
  deskTextLeft.style.opacity = 0;
  bottomText.forEach((item) => (item.style.opacity = 0));
  img.style.opacity = 0;

  setTimeout(() => {
    gsap
      .timeline()
      .from(title, {
        duration: 1,
        ease,
        keyframes: {
          '0%': { y: '250', rotateZ: '-10deg', opacity: 1 },
          '100%': { y: '0', rotateZ: '0' }
        }
      })
      .from(
        imgFirst,
        {
          duration: 1.5,
          ease,
          keyframes: {
            '0%': { x: '100', opacity: 1 },
            '100%': { x: '0' }
          }
        },
        `-=0.2`
      )
      .from(imgSecond, {
        duration: 1,
        ease,
        keyframes: {
          '0%': { x: '80', opacity: 1 },
          '100%': { x: '0' }
        }
      })
      .from(
        imgThird,
        {
          duration: 1.5,
          ease,
          keyframes: {
            '0%': { x: '130', opacity: 1 },
            '100%': { x: '0' }
          }
        },
        `-=1`
      )
      .from(
        list,
        {
          duration: 1.5,
          ease,
          keyframes: {
            '0%': { y: '-400', opacity: 1 },
            '100%': { y: '0' }
          }
        },
        `-=1.5`
      )
      .from(
        deskTextLeft,
        {
          duration: 1.5,
          ease,
          keyframes: {
            '0%': { y: '-50', opacity: 1 },
            '100%': { y: '0' }
          }
        },
        `-=1.5`
      )
      .from(
        bottomText,
        {
          duration: 1.5,
          ease,
          keyframes: {
            '0%': { x: '150', opacity: 1 },
            '100%': { x: '0' }
          }
        },
        `-=1.5`
      )
      .from(
        img,
        {
          duration: 1.5,
          ease,
          keyframes: {
            '0%': { scaleY: 0, opacity: 1 },
            '100%': { scaleY: 1 }
          }
        },
        `-=1.5`
      );
  }, 500);
}

function familyProductionAnimMob(duration, ease) {
  const title = document.querySelectorAll('.family-production--anim-text span'),
    imgFirst = document.querySelectorAll('.family-production--anim-img-first'),
    imgSecond = document.querySelectorAll('.family-production--anim-img-second'),
    imgThird = document.querySelectorAll('.family-production--anim-img-third'),
    list = document.querySelector('.family-production__standard-list'),
    deskTextLeft = document.querySelector('.family-production__family-row-text span'),
    bottomText = document.querySelectorAll('.family-production--anim-img-text span'),
    img = document.querySelector('.family-production__img-img-box img'),
    section = document.querySelector('.family-production');

  title.forEach((item) => (item.style.opacity = 0));
  imgFirst.forEach((item) => (item.style.opacity = 0));
  imgSecond.forEach((item) => (item.style.opacity = 0));
  imgThird.forEach((item) => (item.style.opacity = 0));
  list.style.opacity = 0;
  deskTextLeft.style.opacity = 0;
  bottomText.forEach((item) => (item.style.opacity = 0));
  img.style.opacity = 0;

  let first = true;

  function handleFirstScroll() {
    if (first) {
      gsap
        .timeline()
        .from(title, {
          duration: 3,
          ease,
          keyframes: {
            '0%': { y: '250', rotateZ: '-10deg', opacity: 1 },
            '100%': { y: '0', rotateZ: '0' }
          }
        })
        .from(
          imgFirst,
          {
            duration: 3,
            ease,
            keyframes: {
              '0%': { x: '100', opacity: 1 },
              '100%': { x: '0' }
            }
          },
          `-=3`
        )
        .from(
          imgSecond,
          {
            duration: 1,
            ease,
            keyframes: {
              '0%': { x: '80', opacity: 1 },
              '100%': { x: '0' }
            }
          },
          `-=3`
        )
        .from(
          imgThird,
          {
            duration: 3,
            ease,
            keyframes: {
              '0%': { x: '130', opacity: 1 },
              '100%': { x: '0' }
            }
          },
          `-= 3`
        )
        .from(
          list,
          {
            duration: 3,
            ease,
            keyframes: {
              '0%': { y: '-400', opacity: 0 },
              '100%': { y: '0', opacity: 1 }
            }
          },
          `-=3`
        )
        .from(
          deskTextLeft,
          {
            duration: 3,
            ease,
            keyframes: {
              '0%': { y: '-50', opacity: 1 },
              '100%': { y: '0' }
            }
          },
          `-=3`
        )
        .from(
          bottomText,
          {
            duration: 3,
            ease,
            keyframes: {
              '0%': { x: '150', opacity: 1 },
              '100%': { x: '0' }
            }
          },
          `-=3`
        )
        .from(
          img,
          {
            duration: 3,
            ease,
            keyframes: {
              '0%': { scaleY: 0, opacity: 1 },
              '100%': { scaleY: 1 }
            }
          },
          `-=3`
        );
      first = false;
    }
  }
  ScrollTrigger.matchMedia({
    '(prefers-reduced-motion: no-preference)': function () {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        toggleActions: 'play pause resume reverse',
        onEnter: () => handleFirstScroll()
      });
    }
  });
}

function animateProductionNum(selector) {
  let first = true;
  const productionNum = document.querySelector(selector);
  function handleFirstScroll() {
    if (first) {
      // gsap.to(window, { duration: durationScroll, scrollTo: productionNum });
      gsap.timeline().from(productionNum, {
        duration: 3,
        ease: 'power2',
        keyframes: {
          '0%': { scale: 0, opacity: 0 },
          '100%': { scale: 1, opacity: 1 }
        }
      });
      first = false;
    }
  }
  if (productionNum) {
    ScrollTrigger.matchMedia({
      '(prefers-reduced-motion: no-preference)': function () {
        ScrollTrigger.create({
          trigger: productionNum,
          start: window.screen.width > 768 ? 'top 50%' : 'top 100%',
          toggleActions: 'play pause resume reverse',
          onEnter: () => handleFirstScroll()
        });
      }
    });
  }
}

function animBgMob() {
  let bg = document.querySelectorAll('.family-production__bg');

  let lastScrollTop = 0;

  function handleScroll() {
    // Получаем координаты верхней и нижней границы блока
    const rectFamily = document.querySelector('.family-production').getBoundingClientRect();
    const rectNum = document.querySelector('.production-gallery').getBoundingClientRect();
    const topFamilyOffset = rectFamily.top;
    const bottomNumOffset = rectNum.top;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Текущая позиция скролла

    if (scrollTop > lastScrollTop) {
      if (topFamilyOffset <= -100 && bottomNumOffset >= 1000) {
        bg.forEach((item) => {
          item.classList.add('active');
          if (item.classList.contains('family-production__bg--anim')) {
            gsap.to(item, { duration: 0, y: '0' });
          }
        });
      } else if (topFamilyOffset <= 0 && bottomNumOffset < 1000) {
        bg.forEach((item) => {
          if (item.classList.contains('family-production__bg--anim')) {
            gsap.to(item, { duration: 1, y: '-100%' });
          }
          setTimeout(() => {
            item.classList.remove('active');
          }, 1000);
        });
      }
    } else {
      if (topFamilyOffset <= -100 && bottomNumOffset >= 800) {
        bg.forEach((item) => {
          item.classList.add('active');
          if (item.classList.contains('family-production__bg--anim')) {
            gsap.to(item, { duration: 1, y: '0' });
          }
        });
      } else if (topFamilyOffset >= 0 && bottomNumOffset > 0) {
        bg.forEach((item) => item.classList.remove('active'));
      }
    }

    lastScrollTop = scrollTop; // Обновляем предыдущую позицию скролла
  }

  // Добавляем обработчик события прокрутки
  window.addEventListener('scroll', handleScroll);
}

function productionGallerySwiper() {
  const swiperDesk = new Swiper('.production-gallery__swiper', {
    grabCursor: true,
    effect: 'creative',
    allowTouchMove: false,
    loop: true,
    speed: 1000,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -1],
        opacity: 0.5
      },
      next: {
        translate: ['100%', 0, 0]
      }
    },
    navigation: {
      nextEl: '.production-gallery__swiper-btn--next',
      prevEl: '.production-gallery__swiper-btn--prev'
    }
  });

  const swiperMob = new Swiper('.production-gallery__mobile-swiper', {
    grabCursor: true,
    // loop: true,
    speed: 1000,
    slidesPerView: 'auto',
    spaceBetween: rem(4),
    navigation: {
      nextEl: '.production-gallery__mobile-swiper-btn--next',
      prevEl: '.production-gallery__mobile-swiper-btn--prev'
    }
  });
}

function productionGalleryAnim(ease) {
  const title = document.querySelector('.production-gallery__title'),
    textBox = document.querySelector('.production-gallery__text-box'),
    swiperBtnBox = document.querySelector('.production-gallery__swiper-btn-box'),
    swipers = document.querySelectorAll('.production-gallery__swiper');

  title.style.opacity = 0;
  textBox.style.opacity = 0;
  swiperBtnBox.style.opacity = 0;
  swipers.forEach((item) => (item.style.opacity = 0));
  gsap
    .timeline()
    .from(title, {
      duration: 3,
      ease,
      keyframes: {
        '0%': { y: '500', opacity: 0 },
        '100%': { y: '0', opacity: 1 }
      }
    })
    .from(
      textBox,
      {
        duration: 3,
        ease,
        keyframes: {
          '0%': { y: '500', opacity: 0 },
          '100%': { y: '0', opacity: 1 }
        }
      },
      '-=2.5'
    )
    .from(
      swiperBtnBox,
      {
        duration: 3,
        ease,
        keyframes: {
          '0%': { y: '500', opacity: 0 },
          '100%': { y: '0', opacity: 1 }
        }
      },
      '-=2.5'
    )
    .from(
      swipers[0],
      {
        duration: 3,
        ease,
        keyframes: {
          '0%': { y: '500', opacity: 0 },
          '100%': { y: '0', opacity: 1 }
        }
      },
      '-=3'
    )
    .from(
      swipers[1],
      {
        duration: 3,
        ease,
        keyframes: {
          '0%': { y: '500', opacity: 0 },
          '100%': { y: '0', opacity: 1 }
        }
      },
      '-=3'
    )
    .from(
      swipers[2],
      {
        duration: 3,
        ease,
        keyframes: {
          '0%': { y: '500', opacity: 0 },
          '100%': { y: '0', opacity: 1 }
        }
      },
      '-=3'
    )
    .from(
      swipers[3],
      {
        duration: 3,
        ease,
        keyframes: {
          '0%': { y: '500', opacity: 0 },
          '100%': { y: '0', opacity: 1 }
        }
      },
      '-=2.5'
    )
    .from(
      swipers[4],
      {
        duration: 3,
        ease,
        keyframes: {
          '0%': { y: '500', opacity: 0 },
          '100%': { y: '0', opacity: 1 }
        }
      },
      '-=3'
    )
    .from(
      swipers[5],
      {
        duration: 3,
        ease,
        keyframes: {
          '0%': { y: '500', opacity: 0 },
          '100%': { y: '0', opacity: 1 }
        }
      },
      '-=3'
    )
    .from(
      swipers[6],
      {
        duration: 3,
        ease,
        keyframes: {
          '0%': { y: '500', opacity: 0 },
          '100%': { y: '0', opacity: 1 }
        }
      },
      '-=3'
    );
}

function productionGalleryAnimMob() {
  const title = document.querySelector('.production-gallery__title'),
    textBox = document.querySelectorAll('.production-gallery__text'),
    swiperBtnBox = document.querySelector('.production-gallery__mobile-swiper-btn-box'),
    swipers = document.querySelector('.production-gallery__mobile-swiper'),
    section = document.querySelector('.production-gallery');

  title.style.opacity = 0;
  textBox.forEach((item) => (item.style.opacity = 0));
  swiperBtnBox.style.opacity = 0;
  swipers.style.opacity = 0;

  let first = true;

  function handleFirstScroll() {
    if (first) {
      gsap
        .timeline()
        .from(title, {
          duration: 3,
          ease: 'power2',
          keyframes: {
            '0%': { y: '500', opacity: 0 },
            '100%': { y: '0', opacity: 1 }
          }
        })
        .from(
          textBox[0],
          {
            duration: 3,
            ease: 'power2',
            keyframes: {
              '0%': { y: '500', opacity: 0 },
              '100%': { y: '0', opacity: 1 }
            }
          },
          '-=2.8'
        )
        .from(
          swipers,
          {
            duration: 3,
            ease: 'power2',
            keyframes: {
              '0%': { y: '500', opacity: 0 },
              '100%': { y: '0', opacity: 1 }
            }
          },
          '-=2.8'
        )
        .from(
          textBox[1],
          {
            duration: 3,
            ease: 'power2',
            keyframes: {
              '0%': { y: '500', opacity: 0 },
              '100%': { y: '0', opacity: 1 }
            }
          },
          '-=2.8'
        )
        .from(
          swiperBtnBox,
          {
            duration: 3,
            ease: 'power2',
            keyframes: {
              '0%': { y: '500', opacity: 0 },
              '100%': { y: '0', opacity: 1 }
            }
          },
          '-=2.8'
        );
      first = false;
    }
  }
  ScrollTrigger.matchMedia({
    '(prefers-reduced-motion: no-preference)': function () {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        toggleActions: 'play pause resume reverse',
        onEnter: () => handleFirstScroll()
      });
    }
  });
}
