import 'inputmask';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

window.$ = window.jQuery = require('jquery');

import { rem } from '../utils/constants';
export const modules = {};

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  if (document.querySelector('.main-home')) {
    mainHeroSwiper();
    aboutOurfarmFavorite();
    latestNewsSwiper();
    preloader().then(() => {
      document.querySelector('.preloader').classList.add('preloader-remove');
      animateHeader(duration, easeHeader);
      mainHeroAnim(duration, ease);
    });
    if (window.innerWidth > 767) {
      let executedFunctions = {};
      new fullpage('#fullpage', {
        scrollingSpeed: 1500,
        scrollOverflow: false,
        fitToSection: false,
        bigSectionsDestination: 'top',
        // afterLoad
        // onLeave
        onLeave: function (origin, destination, direction, trigger) {
          if (
            !executedFunctions[destination.anchor] &&
            destination.anchor == 'catalog-block' &&
            direction == 'down'
          ) {
            catalogBannerAnimation(duration, ease);
            executedFunctions[destination.anchor] = true;
          }
          if (!executedFunctions[destination.anchor] && destination.anchor == 'love' && direction == 'down') {
            loveAnimation(duration, ease);
            executedFunctions[destination.anchor] = true;
          }

          if (
            !executedFunctions[destination.anchor] &&
            destination.anchor == 'development' &&
            direction == 'down'
          ) {
            developmentText();
            developmentAnimation();
            executedFunctions[destination.anchor] = true;
          }

          if (
            !executedFunctions[destination.anchor] &&
            destination.anchor == 'about-our-farm' &&
            direction == 'down'
          ) {
            aboutOurFarmAnim(duration, ease);
            executedFunctions[destination.anchor] = true;
          }
          if (
            !executedFunctions[destination.anchor] &&
            destination.anchor == 'latest-news' &&
            direction == 'down'
          ) {
            latestNewsAnim(duration, ease);
            executedFunctions[destination.anchor] = true;
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
      observerHtml();
    } else {
      gsap.to(window, { duration: 0.5, scrollTo: '.header' });
      setTimeout(() => {
        document.body.style.overflow = '';
        catalogBannerAnimationMob(duration, ease);
        loveAnimationMob(duration, ease);
        aboutOurFarmAnimMob(duration, ease);
        latestNewsAnimMob(duration, ease);
        animateFooterMob(duration, ease);
        developmentText();
        developmentAnimation();
      }, 5000);
    }
  }
});

let duration = 3;
let centerAnim = window.innerWidth > 768 ? '90%' : '40%';
let ease = 'power2.inOut';
let easeHeader = window.innerWidth > 768 ? 'power2.inOut' : 'power2';

// Функция, которая будет вызываться при изменении классов элемента <html>
function handleHtmlClassChanges(mutationsList) {
  mutationsList.forEach((mutation) => {
    if (mutation.attributeName === 'class') {
      const html = document.documentElement;
      if (html.classList.contains('lock')) {
        fullpage_api.setAllowScrolling(false);
      } else {
        fullpage_api.setAllowScrolling(true);
      }
    }
  });
}

export function observerHtml() {
  const observer = new MutationObserver(handleHtmlClassChanges);
  const config = { attributes: true, attributeFilter: ['class'] };
  observer.observe(document.documentElement, config);
}

function preloader() {
  return new Promise((resolve, reject) => {
    document.body.style.overflow = 'hidden';
    const preloader = document.querySelector('.preloader'),
      num = document.querySelector('.preloader__content-num'),
      percent = document.querySelector('.preloader__content-percent'),
      text = document.querySelector('.preloader__content-text'),
      content = document.querySelector('.preloader__content-bg'),
      logo = document.querySelector('.header__logo--preloader'),
      nav = document.querySelector('.header__nav'),
      btnBox = document.querySelector('.header__btn-box'),
      leftBg = document.querySelector('.preloader__bg--left'),
      rightBg = document.querySelector('.preloader__bg--right'),
      contentBox = document.querySelector('.preloader__content')

    nav.style.opacity = 0;
    btnBox.style.opacity = 0;
    contentBox.style.opacity = 1;
    leftBg.style.opacity = 1;
    rightBg.style.opacity = 1;

    for (let i = 0; i < 100; i++) {
      if (i < 20 || i > 80) {
        const span = document.createElement('span');
        span.textContent = i + 1;
        num.appendChild(span);
      }
    }
    const tl = gsap.timeline();

    tl.from(num, {
      duration: 1.5,
      opacity: 0,
      y: 500,
      x: -500,
      ease: 'power2.inOut' // Эффект анимации
    })
      .from(
        percent,
        {
          duration: 1.5,
          opacity: 0,
          y: 500,
          x: 500,
          ease: 'power2.inOut' // Эффект анимации
        },
        '-=1.5'
      )
      .from(
        logo,
        {
          duration: 1.5,
          y: '-100',
          opacity: 0,
          ease: 'power2.inOut' // Эффект анимации
        },
        '-=1.5'
      )
      .from(
        content,
        {
          duration: 1.5,
          opacity: 0,
          scale: 0,
          ease: 'power2.inOut' // Эффект анимации
        },
        '-=1.5'
      )
      .from(
        text,
        {
          duration: 1.5,
          opacity: 0,
          y: 400,
          x: 200,
          scale: 0.3,
          ease: 'power2.inOut' // Эффект анимации
        },
        '-=1.5'
      )
      .from(
        leftBg,
        {
          duration: 1.5,
          opacity: 0,
          scale: 0.5,
          ease: 'power2.inOut' // Эффект анимации
        },
        '-=1.5'
      )
      .from(
        rightBg,
        {
          duration: 1.5,
          opacity: 0,
          scale: 0.3,
          ease: 'power2.inOut' // Эффект анимации
        },
        '-=1.5'
      )
      .to(num, {
        duration: 3,
        scrollTop: num.scrollHeight - num.clientHeight, // Прокручиваем до конца
        ease: 'power2.inOut' // Эффект анимации
      })
      .to(content, {
        duration: 0.5,
        opacity: 0,
        scale: 0.3,
        ease: 'power2.inOut' // Эффект анимации
      })
      .to(
        num,
        {
          duration: 0.5,
          opacity: 0,
          scale: 0.3,
          ease: 'power2.inOut' // Эффект анимации
        },
        '-=0.5'
      )
      .to(
        percent,
        {
          duration: 0.5,
          opacity: 0,
          scale: 0.3,
          ease: 'power2.inOut' // Эффект анимации
        },
        '-=0.5'
      )
      .to(
        leftBg,
        {
          duration: 0.5,
          opacity: 0,
          scale: 0.3,
          ease: 'power2.inOut' // Эффект анимации
        },
        '-=0.5'
      )
      .to(
        rightBg,
        {
          duration: 0.5,
          opacity: 0,
          scale: 0.3,
          ease: 'power2.inOut' // Эффект анимации
        },
        '-=0.5'
      )
      .to(
        text,
        {
          duration: 0.5,
          opacity: 0,
          scale: 0.3,
          ease: 'power2.inOut', // Эффект анимации
          onComplete: () => resolve()
        },
        '-=0.5'
      );
  });
}

export function animateHeader(duration, ease) {
  let header = document.querySelector('.header');
  const nav = header.querySelector('.header__nav');
  const btnBox = header.querySelector('.header__btn-box');
  const logo = header.querySelector('.header__logo');

  const tl = gsap.timeline();

  if (header.classList.contains('header--anim')) {
    nav.style.opacity = 0;
    btnBox.style.opacity = 0;
    logo.style.opacity = 0;
    tl.from(nav, {
      duration: duration,
      ease,
      keyframes: {
        '0%': { y: '-100', opacity: 0 },
        [centerAnim]: { opacity: 1 },
        '100%': { y: '0' }
      }
    })
      .from(
        btnBox,
        {
          duration: duration,
          ease,
          keyframes: {
            '0%': { y: '-100', opacity: 0 },
            [centerAnim]: { opacity: 1 },
            '100%': { y: '0' }
          }
        },
        `-=${duration}`
      )
      .from(
        logo,
        {
          duration: duration,
          ease,
          keyframes: {
            '0%': { y: '-100', opacity: 0 },
            [centerAnim]: { opacity: 1 },
            '100%': { y: '0' }
          }
        },
        `-=${duration}`
      );
  } else if (header.classList.contains('header--main')) {
    nav.style.opacity = 0;
    btnBox.style.opacity = 0;
    tl.from(nav, {
      duration: duration,
      ease,
      keyframes: {
        '0%': { y: '-100', opacity: 0 },
        [centerAnim]: { opacity: 1 },
        '100%': { y: '0' }
      }
    }).from(
      btnBox,
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { y: '-100', opacity: 0 },
          [centerAnim]: { opacity: 1 },
          '100%': { y: '0' }
        }
      },
      `-=${duration}`
    );
  }
}

// ----------------mainHero-----------------------------
// ----------------mainHero-----------------------------
// ----------------mainHero-----------------------------

function mainHeroSwiper() {
  const favoriteBtns = document.querySelectorAll('.main-hero__favorites-swiper-slide-btn');
  favoriteBtns.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  let speed = 1000;

  const swiperThumb = new Swiper('.main-hero__thumb-swiper ', {
    slidesPerView: 3,
    allowTouchMove: false,
    speed: speed,
    spaceBetween: rem(1.6),
    loop: true,
    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const swiperFavorite = new Swiper('.main-hero__favorites-swiper', {
    slidesPerView: 1,
    allowTouchMove: false,
    speed: speed,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const swiperStat = new Swiper('.main-hero__stat-swiper', {
    slidesPerView: 1,
    allowTouchMove: false,
    speed: speed,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const swiperLink = new Swiper('.main-hero__link-swiper ', {
    slidesPerView: 1,
    allowTouchMove: false,
    speed: speed,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const swiperWeight = new Swiper('.main-hero__weight-swiper ', {
    slidesPerView: 1,
    allowTouchMove: false,
    speed: speed,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const swiperTitle = new Swiper('.main-hero__title-swiper ', {
    slidesPerView: 1,
    allowTouchMove: false,
    spaceBetween: rem(1),
    speed: speed,
    loop: true,
    direction: 'vertical',

    breakpoints: {
      768: {}
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const imgBoxs = document.querySelectorAll('.main-hero__center-swiper-slide-img-box');

  setTimeout(() => {
    imgBoxs.forEach((item) => {
      item.style.transition = 'opacity 0.7s, scale 1s'; // Исправлена опечатка и изменено на 'transform'
    });
  }, 0);

  const swiperCenter = new Swiper('.main-hero__center-swiper ', {
    allowTouchMove: false,
    speed: speed,
    loop: true,
    spaceBetween: rem(2),
    slidesPerView: 1,
    centeredSlides: false,
    breakpoints: {
      768: {
        spaceBetween: rem(48),
        slidesPerView: 2.75,
        centeredSlides: true
      }
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    }
  });

  const prevButton = document.querySelector('.main-hero__swiper-btn--prev');
  const nextButton = document.querySelector('.main-hero__swiper-btn--next');
  let isTransitioning = false;
  let activeSlide;
  let prevSlide;
  let nextSlide;

  nextButton.addEventListener('click', () => {
    if (!isTransitioning) {
      isTransitioning = true;
      activeSlide = document.querySelector(
        '.main-hero__center-swiper-slide.swiper-slide-active .main-hero__center-swiper-slide-img-box'
      );
      prevSlide = document.querySelector(
        '.main-hero__center-swiper-slide.swiper-slide-prev .main-hero__center-swiper-slide-img-box'
      );
      activeSlide.style.transformOrigin = 'left bottom';
      prevSlide.style.transformOrigin = 'center center';

      setTimeout(() => {
        isTransitioning = false;
      }, 1000); // Задержка в 1000 миллисекунд (1 секунда)
    }
  });
  prevButton.addEventListener('click', () => {
    if (!isTransitioning) {
      isTransitioning = true;
      activeSlide = document.querySelector(
        '.main-hero__center-swiper-slide.swiper-slide-active .main-hero__center-swiper-slide-img-box'
      );
      nextSlide = document.querySelector(
        '.main-hero__center-swiper-slide.swiper-slide-next .main-hero__center-swiper-slide-img-box'
      );

      activeSlide.style.transformOrigin = 'center center';
      nextSlide.style.transformOrigin = 'left bottom';
      setTimeout(() => {
        isTransitioning = false;
      }, 1000); // Задержка в 1000 миллисекунд (1 секунда)
    }
  });
}

function mainHeroAnim(duration, ease) {
  const section = document.querySelector('.main-hero'),
    title = document.querySelector('.main-hero__title'),
    link = document.querySelector('.main-hero__link-swiper-box'),
    favorite = document.querySelector('.main-hero__favorites-swiper-box'),
    center = document.querySelector(
      '.main-hero__center-swiper-slide.swiper-slide-active .main-hero__center-swiper-slide-img-box img'
    ),
    thumbActive = document.querySelector(
      '.main-hero__thumb-swiper-slide .main-hero__thumb-swiper-slide-inner'
    ),
    thumbNext = document.querySelector(
      '.main-hero__thumb-swiper-slide.swiper-slide-next .main-hero__thumb-swiper-slide-inner'
    ),
    thumbNextNext = document.querySelector(
      '.main-hero__thumb-swiper-slide.swiper-slide-next + .swiper-slide .main-hero__thumb-swiper-slide-inner'
    ),
    titleBox = document.querySelector('.main-hero__title-swiper-wrapper-box'),
    swiperBtnBox = document.querySelector('.main-hero__swiper-btn-box'),
    bg = document.querySelector('.main-hero__bg');

  const tl = gsap.timeline();

  tl.from(title, {
    duration: duration,
    ease,
    keyframes: {
      '0%': { scale: '0', opacity: 0 },
      [centerAnim]: { scale: '1.05', opacity: 1 },
      '100%': { scale: '1' }
    }
  })
    .from(
      bg,
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { x: '-200', y: '400', opacity: 0 },
          [centerAnim]: { x: '40', y: '40', opacity: 1 },
          '100%': { x: '0', y: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      link,
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { scale: '0', y: '150', opacity: 0 },
          [centerAnim]: { scale: '1.05', y: '-5', opacity: 1 },
          '100%': { scale: '1', y: 0 }
        }
      },
      `-=${duration}`
    )
    .from(
      favorite,
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { x: '+=400', opacity: 0 },
          [centerAnim]: { x: '-5', opacity: 1 },
          '100%': { x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      titleBox,
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { x: '-=400', opacity: 0 },
          [centerAnim]: { x: '+5', opacity: 1 },
          '100%': { x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      swiperBtnBox,
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { x: '-=400', opacity: 0 },
          [centerAnim]: { x: '+5', opacity: 1 },
          '100%': { x: 0 }
        }
      },
      `-=${duration}`
    )
    .from(
      center,
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { scale: '0', y: '+=150', x: '+=80', opacity: 0 },
          [centerAnim]: { scale: '1.015 ', y: 0, x: 0, opacity: 1 },
          '100%': { scale: '1', y: 0, x: 0 }
        }
      },
      `-=${duration}`
    )
    .from(
      thumbActive,
      {
        duration: 2.8,
        ease,
        keyframes: {
          '0%': { y: '+=150', x: '+=50', opacity: 0 },
          [centerAnim]: { y: '-15', x: '0', opacity: 1 },
          '100%': { y: '0', x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      thumbNext,
      {
        duration: 2.9,
        ease,
        keyframes: {
          '0%': { y: '+=150', x: '+=50', opacity: 0 },
          [centerAnim]: { y: '-15', x: '0', opacity: 1 },
          '100%': { y: '0', x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      thumbNextNext,
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { y: '+=150', x: '+=50', opacity: 0 },
          [centerAnim]: { y: '-15', x: '0', opacity: 1 },
          '100%': { y: '0', x: '0' }
        }
      },
      `-=${duration}`
    );
}

// ----------------catalogBannerAnimation-----------------------------
// ----------------catalogBannerAnimation-----------------------------
// ----------------catalogBannerAnimation-----------------------------

function catalogBannerAnimation(duration, ease) {
  const block = document.querySelector('.catalog-block'),
    title = block.querySelector('.catalog-block__title'),
    tagsContainer = block.querySelector('.catalog-block__tags'),
    tags = tagsContainer.querySelectorAll('.catalog-block__tag'),
    slides = block.querySelectorAll('.catalog-block__slide');

  const timeline = gsap.timeline();

  timeline
    .from(title, {
      duration,
      ease,
      keyframes: {
        '0%': { x: -500, opacity: 0 },
        [centerAnim]: { x: 25, opacity: 1 },
        '100%': { x: 0 }
      }
    })
    .from(
      slides[0],
      {
        duration,
        ease,
        keyframes: {
          '0%': { y: 500, opacity: 0 },
          [centerAnim]: { y: -25, opacity: 1 },
          '100%': { y: 0 }
        }
      },
      0
    )
    .from(
      slides[1],
      {
        duration,
        ease,
        keyframes: {
          '0%': { y: 500, opacity: 0 },
          [centerAnim]: { y: -30, opacity: 1 },
          '100%': { y: 0 }
        }
      },
      '<'
    )
    .from(
      slides[2],
      {
        duration,
        ease,
        keyframes: {
          '0%': { y: 500, opacity: 0 },
          [centerAnim]: { y: -35, opacity: 1 },
          '100%': { y: 0 }
        }
      },
      '<'
    )
    .from(
      slides[3],
      {
        duration,
        ease,
        keyframes: {
          '0%': { y: 500, opacity: 0 },
          [centerAnim]: { y: -40, opacity: 1 },
          '100%': { y: 0 }
        }
      },
      '<'
    )
    .from(
      tags[0],
      {
        duration,
        ease,
        keyframes: {
          '0%': { x: -200, y: -500, opacity: 0, rotateZ: 0 },
          [centerAnim]: { x: 10, y: 15, rotateZ: window.screen.width > 768 ? -9 : -10, opacity: 1 },
          '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? -9 : -10, opacity: 1 }
        }
      },
      0
    )
    .from(
      tags[1],
      {
        duration,
        ease,
        keyframes: {
          '0%': { x: -100, y: -500, opacity: 0, rotateZ: 0 },
          [centerAnim]: { x: 5, y: 15, rotateZ: window.screen.width > 768 ? 6 : 9, opacity: 1 },
          '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 6 : 9, opacity: 1 }
        }
      },
      '<'
    )
    .from(
      tags[2],
      {
        duration,
        ease,
        keyframes: {
          '0%': { y: -500, opacity: 0, rotateZ: 0 },
          [centerAnim]: { y: 10, rotateZ: window.screen.width > 768 ? 7 : 11, opacity: 1 },
          '100%': { y: 0, rotateZ: window.screen.width > 768 ? 7 : 11, opacity: 1 }
        }
      },
      '<'
    )
    .from(
      tags[3],
      {
        duration,
        ease,
        keyframes: {
          '0%': { x: -400, y: -200, opacity: 0, rotateZ: 0 },
          [centerAnim]: { x: 15, y: 5, rotateZ: window.screen.width > 768 ? 9 : 13, opacity: 1 },
          '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 9 : 13, opacity: 1 }
        }
      },
      '<'
    )
    .from(
      tags[4],
      {
        duration,
        ease,
        keyframes: {
          '0%': { x: -200, y: -400, opacity: 0, rotateZ: 0 },
          [centerAnim]: { x: 10, y: 5, rotateZ: window.screen.width > 768 ? 8 : -8, opacity: 1 },
          '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 8 : -8, opacity: 1 }
        }
      },
      '<'
    )
    .from(
      tags[5],
      {
        duration,
        ease,
        keyframes: {
          '0%': { x: -100, y: -400, opacity: 0, rotateZ: 0 },
          [centerAnim]: { x: 0, y: 10, rotateZ: window.screen.width > 768 ? -7 : 4, opacity: 1 },
          '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? -7 : 4, opacity: 1 }
        }
      },
      '<'
    );
}

function catalogBannerAnimationMob(duration, ease) {
  const block = document.querySelector('.catalog-block'),
    title = block.querySelector('.catalog-block__title'),
    tagsContainer = block.querySelector('.catalog-block__tags'),
    tags = tagsContainer.querySelectorAll('.catalog-block__tag'),
    slides = block.querySelectorAll('.catalog-block__slide');

  title.style.opacity = 0;
  tags.forEach((item) => (item.style.opacity = 0));
  slides.forEach((item) => (item.style.opacity = 0));

  const timeline = gsap.timeline();
  let first = true;
  function handleFirstScroll() {
    if (first) {
      timeline
        .from(title, {
          duration,
          ease,
          keyframes: {
            '0%': { x: -500, opacity: 0 },
            [centerAnim]: { x: 25, opacity: 1 },
            '100%': { x: 0 }
          }
        })
        .from(
          slides[0],
          {
            duration,
            ease,
            keyframes: {
              '0%': { y: 500, opacity: 0 },
              [centerAnim]: { y: -25, opacity: 1 },
              '100%': { y: 0 }
            }
          },
          `-=${duration}`
        )
        .from(
          slides[1],
          {
            duration,
            ease,
            keyframes: {
              '0%': { y: 500, opacity: 0 },
              [centerAnim]: { y: -30, opacity: 1 },
              '100%': { y: 0 }
            }
          },
          `-=${duration}`
        )
        .from(
          slides[2],
          {
            duration,
            ease,
            keyframes: {
              '0%': { y: 500, opacity: 0 },
              [centerAnim]: { y: -35, opacity: 1 },
              '100%': { y: 0 }
            }
          },
          `-=${duration}`
        )
        .from(
          slides[3],
          {
            duration,
            ease,
            keyframes: {
              '0%': { y: 500, opacity: 0 },
              [centerAnim]: { y: -40, opacity: 1 },
              '100%': { y: 0 }
            }
          },
          `-=${duration}`
        )
        .from(
          tags[0],
          {
            duration,
            ease,
            keyframes: {
              '0%': { x: -200, y: -500, opacity: 0, rotateZ: 0 },
              [centerAnim]: { x: 10, y: 15, rotateZ: window.screen.width > 768 ? -9 : -10, opacity: 1 },
              '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? -9 : -10, opacity: 1 }
            }
          },
          `-=${duration}`
        )
        .from(
          tags[1],
          {
            duration,
            ease,
            keyframes: {
              '0%': { x: -100, y: -500, opacity: 0, rotateZ: 0 },
              [centerAnim]: { x: 5, y: 15, rotateZ: window.screen.width > 768 ? 6 : 9, opacity: 1 },
              '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 6 : 9, opacity: 1 }
            }
          },
          `-=${duration}`
        )
        .from(
          tags[2],
          {
            duration,
            ease,
            keyframes: {
              '0%': { y: -500, opacity: 0, rotateZ: 0 },
              [centerAnim]: { y: 10, rotateZ: window.screen.width > 768 ? 7 : 11, opacity: 1 },
              '100%': { y: 0, rotateZ: window.screen.width > 768 ? 7 : 11, opacity: 1 }
            }
          },
          `-=${duration}`
        )
        .from(
          tags[3],
          {
            duration,
            ease,
            keyframes: {
              '0%': { x: -400, y: -200, opacity: 0, rotateZ: 0 },
              [centerAnim]: { x: 15, y: 5, rotateZ: window.screen.width > 768 ? 9 : 13, opacity: 1 },
              '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 9 : 13, opacity: 1 }
            }
          },
          `-=${duration}`
        )
        .from(
          tags[4],
          {
            duration,
            ease,
            keyframes: {
              '0%': { x: -200, y: -400, opacity: 0, rotateZ: 0 },
              [centerAnim]: { x: 10, y: 5, rotateZ: window.screen.width > 768 ? 8 : -8, opacity: 1 },
              '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? 8 : -8, opacity: 1 }
            }
          },
          `-=${duration}`
        )
        .from(
          tags[5],
          {
            duration,
            ease,
            keyframes: {
              '0%': { x: -100, y: -400, opacity: 0, rotateZ: 0 },
              [centerAnim]: { x: 0, y: 10, rotateZ: window.screen.width > 768 ? -7 : 4, opacity: 1 },
              '100%': { x: 0, y: 0, rotateZ: window.screen.width > 768 ? -7 : 4, opacity: 1 }
            }
          },
          `-=${duration}`
        );
      first = false;
    }
  }

  ScrollTrigger.matchMedia({
    '(prefers-reduced-motion: no-preference)': function () {
      ScrollTrigger.create({
        trigger: block,
        start: 'top bottom',
        scrub: 1,
        toggleActions: 'play pause resume reverse',
        onEnter: () => handleFirstScroll()
      });
    }
  });
}

// ----------------loveAnimation-----------------------------
// ----------------loveAnimation-----------------------------
// ----------------loveAnimation-----------------------------

function loveAnimation(duration, ease) {
  const block = document.querySelector('.love'),
    titleLeft = block.querySelector('.love__title-left'),
    titleRight = block.querySelector('.love__title-right'),
    heart = block.querySelector('.love__heart'),
    mainSlide = block.querySelector('.love__swiper-slide:first-child'),
    slideBackground = block.querySelector('.love__swiper-background'),
    sliderNavigation = block.querySelector('.love__swiper-navigation'),
    tags = block.querySelectorAll('.love__tag'),
    bottomLeft = block.querySelector('.love__bottom-text:first-child'),
    bottomMiddle = block.querySelector('.love__bottom-swiper'),
    bottomRight = block.querySelector('.love__bottom-text:last-child');

  const timeline = gsap.timeline();

  timeline
    .from(titleLeft, {
      duration,
      ease,
      keyframes: {
        '0%': { x: -700, opacity: 0 },
        [centerAnim]: { x: 25, opacity: 1 },
        '100%': { x: 0 }
      }
    })
    .from(
      titleRight,
      {
        duration,
        ease,
        keyframes: {
          '0%': { x: 1000, opacity: 0 },
          [centerAnim]: { x: -25, opacity: 1 },
          '100%': { x: 0 }
        }
      },
      0
    )
    .from(
      heart,
      {
        duration,
        ease,
        keyframes: {
          '0%': { y: -300, opacity: 0, scale: 2.5 },
          [centerAnim]: { y: 25, opacity: 1, scale: 1 },
          '100%': { y: 0, opacity: 1, scale: 1 }
        }
      },
      0
    )
    .from(
      mainSlide,
      {
        duration,
        ease,
        keyframes: {
          0: { y: 100, opacity: 0 },
          [centerAnim]: { y: -15, scale: 1.1, opacity: 1 },
          '100%': { y: 0, scale: 1 }
        }
      },
      0
    )
    .from(
      slideBackground,
      {
        duration,
        ease,
        keyframes: {
          '0%': { y: 100, scale: 0.5, opacity: 0 },
          [centerAnim]: { y: -15, scale: 1, opacity: 1 },
          '100%': { y: 0, scale: 1 }
        }
      },
      0
    )
    .from(
      sliderNavigation,
      {
        duration,
        ease,
        keyframes: {
          '0%': { x: 500, opacity: 0 },
          [centerAnim]: { x: -25, opacity: 1 },
          '100%': { x: 0 }
        }
      },
      0
    )
    .from(
      tags[0],
      {
        duration,
        ease,
        keyframes: {
          '0%': { y: -500, opacity: 0, rotateZ: -31 },
          [centerAnim]: { y: 10, opacity: 1, rotateZ: 1 },
          '100%': { y: 0, opacity: 1, rotateZ: -1 }
        }
      },
      0
    )
    .from(
      tags[1],
      {
        duration,
        ease,
        keyframes: {
          '0%': { y: -470, opacity: 0, rotateZ: -31 },
          [centerAnim]: { y: 10, opacity: 1, rotateZ: 12 },
          '100%': { y: 0, opacity: 1, rotateZ: 9 }
        }
      },
      0
    )
    .from(
      tags[2],
      {
        duration,
        ease,
        keyframes: {
          '0%': { y: -440, opacity: 0, rotateZ: -31 },
          [centerAnim]: { y: 10, opacity: 1, rotateZ: -8 },
          '100%': { y: 0, opacity: 1, rotateZ: -8 }
        }
      },
      0
    )
    .from(
      bottomLeft,
      {
        duration,
        ease,
        keyframes: {
          '0%': { y: 100, x: -50, opacity: 0 },
          [centerAnim]: { y: -10, x: 15, opacity: 1 },
          '100%': { y: 0, x: 0, opacity: 1 }
        }
      },
      0
    )
    .from(
      bottomMiddle,
      {
        duration,
        ease,
        keyframes: {
          '0%': { y: 100, opacity: 0 },
          [centerAnim]: { y: -10, opacity: 1 },
          '100%': { y: 0, opacity: 1 }
        }
      },
      0
    )
    .from(
      bottomRight,
      {
        duration,
        ease,
        keyframes: {
          '0%': { y: 100, x: 50, opacity: 0 },
          [centerAnim]: { y: -10, x: -15, opacity: 1 },
          '100%': { y: 0, x: 0, opacity: 1 }
        }
      },
      0
    );
}

function loveAnimationMob(duration, ease) {
  const block = document.querySelector('.love'),
    titleHead = block.querySelector('.love__head'),
    heart = block.querySelector('.love__heart'),
    mainSlide = block.querySelector('.love__swiper-slide:first-child'),
    slideBackground = block.querySelector('.love__swiper-background'),
    sliderNavigation = block.querySelector('.love__swiper-navigation'),
    tags = block.querySelectorAll('.love__tag'),
    bottomLeft = block.querySelector('.love__bottom-text:first-child'),
    bottomMiddle = block.querySelector('.love__bottom-swiper'),
    bottomRight = block.querySelector('.love__bottom-text:last-child');

  titleHead.style.opacity = 0;
  heart.style.opacity = 0;
  mainSlide.style.opacity = 0;
  slideBackground.style.opacity = 0;
  sliderNavigation.style.opacity = 0;
  //   tags.forEach(item => item.style.opacity = 0);
  bottomLeft.style.opacity = 0;
  bottomMiddle.style.opacity = 0;
  bottomRight.style.opacity = 0;

  const timeline = gsap.timeline();
  let first = true;

  function handleFirstScroll() {
    // gsap.to(window, {
    //   duration: duration,
    //   scrollTo: block
    // });
    if (first) {
      timeline
        .from(titleHead, {
          duration,
          ease,
          keyframes: {
            '0%': { x: -700, opacity: 0 },
            [centerAnim]: { x: 25, opacity: 1 },
            '100%': { x: 0 }
          }
        })

        .from(
          heart,
          {
            duration,
            ease,
            keyframes: {
              '0%': { y: -300, opacity: 0, scale: 2.5 },
              [centerAnim]: { y: 25, opacity: 1, scale: 1 },
              '100%': { y: 0, opacity: 1, scale: 1 }
            }
          },
          0
        )
        .from(
          mainSlide,
          {
            duration,
            ease,
            keyframes: {
              0: { y: 100, opacity: 0 },
              [centerAnim]: { y: -15, scale: 1.1, opacity: 1 },
              '100%': { y: 0, scale: 1 }
            }
          },
          0
        )
        .from(
          slideBackground,
          {
            duration,
            ease,
            keyframes: {
              '0%': { y: 100, scale: 0.5, opacity: 0 },
              [centerAnim]: { y: -15, scale: 1, opacity: 1 },
              '100%': { y: 0, scale: 1 }
            }
          },
          0
        )
        .from(
          sliderNavigation,
          {
            duration,
            ease,
            keyframes: {
              '0%': { x: 500, opacity: 0 },
              [centerAnim]: { x: -25, opacity: 1 },
              '100%': { x: 0 }
            }
          },
          0
        )
        .from(
          tags[0],
          {
            duration,
            ease,
            keyframes: {
              '0%': { y: -500, opacity: 0, rotateZ: -31 },
              [centerAnim]: { y: 10, opacity: 1, rotateZ: 1 },
              '100%': { y: 0, opacity: 1, rotateZ: -1 }
            }
          },
          0
        )
        .from(
          tags[1],
          {
            duration,
            ease,
            keyframes: {
              '0%': { y: -470, opacity: 0, rotateZ: -31 },
              [centerAnim]: { y: 10, opacity: 1, rotateZ: 12 },
              '100%': { y: 0, opacity: 1, rotateZ: 9 }
            }
          },
          0
        )
        .from(
          tags[2],
          {
            duration,
            ease,
            keyframes: {
              '0%': { y: -440, opacity: 0, rotateZ: -31 },
              [centerAnim]: { y: 10, opacity: 1, rotateZ: -8 },
              '100%': { y: 0, opacity: 1, rotateZ: -8 }
            }
          },
          0
        )
        .from(
          bottomLeft,
          {
            duration,
            ease,
            keyframes: {
              '0%': { y: 100, x: -50, opacity: 0 },
              [centerAnim]: { y: -10, x: 15, opacity: 1 },
              '100%': { y: 0, x: 0, opacity: 1 }
            }
          },
          0
        )
        .from(
          bottomMiddle,
          {
            duration,
            ease,
            keyframes: {
              '0%': { y: 100, opacity: 0 },
              [centerAnim]: { y: -10, opacity: 1 },
              '100%': { y: 0, opacity: 1 }
            }
          },
          0
        )
        .from(
          bottomRight,
          {
            duration,
            ease,
            keyframes: {
              '0%': { y: 100, x: 50, opacity: 0 },
              [centerAnim]: { y: -10, x: -15, opacity: 1 },
              '100%': { y: 0, x: 0, opacity: 1 }
            }
          },
          0
        );
      first = false;
    }
  }

  ScrollTrigger.matchMedia({
    '(prefers-reduced-motion: no-preference)': function () {
      ScrollTrigger.create({
        trigger: block,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        toggleActions: 'play pause resume reverse',
        onEnter: () => handleFirstScroll()
      });
    }
  });
}

// ----------------aboutOurFarm-----------------------------
// ----------------aboutOurFarm-----------------------------
// ----------------aboutOurFarm-----------------------------

function aboutOurfarmFavorite() {
  const favoriteBtns = document.querySelector('.about-our-farm__content-favorite-btn');
  favoriteBtns.addEventListener('click', () => {
    favoriteBtns.classList.toggle('active');
  });
}

function aboutOurFarmAnim(duration, ease) {
  const title = document.querySelector('.about-our-farm__title'),
    leavesLeft = document.querySelector('.about-our-farm__title-img-box--left'),
    leavesRight = document.querySelector('.about-our-farm__title-img-box--right'),
    list = document.querySelector('.about-our-farm__standard-list'),
    info = document.querySelector('.about-our-farm__content-info-box'),
    num = document.querySelector('.about-our-farm__content-num-box'),
    fav = document.querySelector('.about-our-farm__content-favorite-box'),
    img = document.querySelector('.about-our-farm__img-box'),
    link = document.querySelector('.about-our-farm__link'),
    section = document.querySelector('#about-our-farm');

  gsap
    .timeline()
    .from(title, {
      duration: duration,
      ease,
      keyframes: {
        '0%': { x: '-100', y: '200', opacity: 0 },
        [centerAnim]: { x: '0', y: '-15', opacity: 1 },
        '100%': { y: '0', x: '0' }
      }
    })
    .from(
      img,
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { x: '150', y: '100', scale: 0.5, opacity: 0 },
          [centerAnim]: { y: '0', x: '0', scale: 1.05, opacity: 1 },
          '100%': { y: '0', x: '0', scale: 1 }
        }
      },
      `-=${duration}`
    )
    .from(
      link,
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { x: '80', scale: 0.8, opacity: 0 },
          [centerAnim]: { x: '0', scale: 1.05, opacity: 1 },
          '100%': { x: '0', scale: 1 }
        }
      },
      `-=${duration}`
    )
    .from(
      list,
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { x: '-20', y: '60', opacity: 0 },
          [centerAnim]: { x: '15', y: '-6', opacity: 1 },
          '100%': { y: '0', x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      leavesLeft,
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { x: '-400', opacity: 0 },
          [centerAnim]: { x: '15', opacity: 1 },
          '100%': { x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      leavesRight,
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { x: '400', opacity: 0 },
          [centerAnim]: { x: '15', opacity: 1 },
          '100%': { x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      info,
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { x: '-300', scale: 0.8, opacity: 0 },
          [centerAnim]: { x: '15', scale: 1.05, opacity: 1 },
          '100%': { x: '0', scale: 1 }
        }
      },
      `-=${duration}`
    )
    .from(
      num,
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { x: '300', y: '100', scale: 0.8, opacity: 0 },
          [centerAnim]: { x: '0', y: '0', scale: 1.05, opacity: 1 },
          '100%': { x: '0', y: '0', scale: 1 }
        }
      },
      `-=${duration}`
    )
    .from(
      fav,
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { x: '300', scale: 0.8, opacity: 0 },
          [centerAnim]: { x: '15', scale: 1.05, opacity: 1 },
          '100%': { scale: 1, x: '0' }
        }
      },
      `-=${duration}`
    );
}

function aboutOurFarmAnimMob(duration, ease) {
  const title = document.querySelector('.about-our-farm__title'),
    leavesLeft = document.querySelector('.about-our-farm__title-img-box--left'),
    leavesRight = document.querySelector('.about-our-farm__title-img-box--right'),
    list = document.querySelector('.about-our-farm__standard-list'),
    info = document.querySelector('.about-our-farm__content-info-box'),
    num = document.querySelector('.about-our-farm__content-num-box'),
    fav = document.querySelector('.about-our-farm__content-favorite-box'),
    img = document.querySelector('.about-our-farm__img-box'),
    link = document.querySelector('.about-our-farm__link'),
    section = document.querySelector('.about-our-farm');

  title.style.opacity = 0;
  leavesLeft.style.opacity = 0;
  leavesRight.style.opacity = 0;
  list.style.opacity = 0;
  info.style.opacity = 0;
  num.style.opacity = 0;
  fav.style.opacity = 0;
  img.style.opacity = 0;
  link.style.opacity = 0;

  let first = true;

  function handleFirstScroll() {
    if (first) {
      //   gsap.to(window, {
      //     duration: duration,
      //     scrollTo: section
      //   });
      gsap
        .timeline()
        .from(title, {
          duration: duration,
          ease,
          keyframes: {
            '0%': { x: '-100', y: '200', opacity: 0 },
            [centerAnim]: { x: '0', y: '-15', opacity: 1 },
            '100%': { y: '0', x: '0' }
          }
        })
        .from(
          img,
          {
            duration: duration,
            ease,
            keyframes: {
              '0%': { x: '150', y: '100', scale: 0.5, opacity: 0 },
              [centerAnim]: { y: '0', x: '0', scale: 1.05, opacity: 1 },
              '100%': { y: '0', x: '0', scale: 1 }
            }
          },
          `-=${duration}`
        )
        .from(
          link,
          {
            duration: duration,
            ease,
            keyframes: {
              '0%': { x: '80', scale: 0.8, opacity: 0 },
              [centerAnim]: { x: '0', scale: 1.05, opacity: 1 },
              '100%': { x: '0', scale: 1 }
            }
          },
          `-=${duration}`
        )
        .from(
          list,
          {
            duration: duration,
            ease,
            keyframes: {
              '0%': { x: '-20', y: '60', opacity: 0 },
              [centerAnim]: { x: '15', y: '-6', opacity: 1 },
              '100%': { y: '0', x: '0' }
            }
          },
          `-=${duration}`
        )
        .from(
          leavesLeft,
          {
            duration: duration,
            ease,
            keyframes: {
              '0%': { x: '-400', opacity: 0 },
              [centerAnim]: { x: '15', opacity: 1 },
              '100%': { x: '0' }
            }
          },
          `-=${duration}`
        )
        .from(
          leavesRight,
          {
            duration: duration,
            ease,
            keyframes: {
              '0%': { x: '400', opacity: 0 },
              [centerAnim]: { x: '15', opacity: 1 },
              '100%': { x: '0' }
            }
          },
          `-=${duration}`
        )
        .from(
          info,
          {
            duration: duration,
            ease,
            keyframes: {
              '0%': { x: '-300', scale: 0.8, opacity: 0 },
              [centerAnim]: { x: '15', scale: 1.05, opacity: 1 },
              '100%': { x: '0', scale: 1 }
            }
          },
          `-=${duration}`
        )
        .from(
          num,
          {
            duration: duration,
            ease,
            keyframes: {
              '0%': { x: '300', y: '100', scale: 0.8, opacity: 0 },
              [centerAnim]: { x: '0', y: '0', scale: 1.05, opacity: 1 },
              '100%': { x: '0', y: '0', scale: 1 }
            }
          },
          `-=${duration}`
        )
        .from(
          fav,
          {
            duration: duration,
            ease,
            keyframes: {
              '0%': { x: '300', scale: 0.8, opacity: 0 },
              [centerAnim]: { x: '15', scale: 1.05, opacity: 1 },
              '100%': { scale: 1, x: '0' }
            }
          },
          `-=${duration}`
        );
      first = false;
    }
  }

  ScrollTrigger.matchMedia({
    '(prefers-reduced-motion: no-preference)': function () {
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        toggleActions: 'play pause resume reverse',
        onEnter: () => handleFirstScroll()
      });
    }
  });
}

// ----------------latestNews-----------------------------
// ----------------latestNews-----------------------------
// ----------------latestNews-----------------------------

function latestNewsSwiper() {
  const swiper = new Swiper('.latest-news__swiper', {
    allowTouchMove: true,
    speed: 1000,
    loop: true,
    spaceBetween: rem(2),
    slidesPerView: 1,
    breakpoints: {
      768: {
        spaceBetween: rem(2),
        slidesPerView: 4,
        allowTouchMove: false
      }
    },
    navigation: {
      nextEl: '.latest-news__swiper-btn--next',
      prevEl: '.latest-news__swiper-btn--prev'
    }
  });
}

function latestNewsAnim(duration, ease) {
  const title = document.querySelector('.latest-news__title'),
    link = document.querySelector('.latest-news__link'),
    slides = document.querySelectorAll('.latest-news__swiper-slide-inner');

  gsap
    .timeline()
    .from(title, {
      duration: duration,
      ease,
      keyframes: {
        '0%': { x: '-400', opacity: 0 },
        [centerAnim]: { x: '25', opacity: 1 },
        '100%': { x: '0' }
      }
    })
    .from(
      link,
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { x: '400', opacity: 0 },
          [centerAnim]: { x: '-25', opacity: 1 },
          '100%': { x: '0' }
        }
      },
      `-=${duration}`
    )
    .from(
      slides[0],
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { y: '400', opacity: 0 },
          [centerAnim]: { y: '-25', opacity: 1 },
          '100%': { y: '0' }
        }
      },
      `-=${duration + 0.4}`
    )
    .from(
      slides[1],
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { y: '400', opacity: 0 },
          [centerAnim]: { y: '-25', opacity: 1 },
          '100%': { y: '0' }
        }
      },
      `-=${duration + 0.3}`
    )
    .from(
      slides[2],
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { y: '500', opacity: 0 },
          [centerAnim]: { y: '-25', opacity: 1 },
          '100%': { y: '0' }
        }
      },
      `-=${duration + 0.2}`
    )
    .from(
      slides[3],
      {
        duration: duration,
        ease,
        keyframes: {
          '0%': { y: '500', opacity: 0 },
          [centerAnim]: { y: '-25', opacity: 1 },
          '100%': { y: '0' }
        }
      },
      `-=${duration}`
    );
}

function latestNewsAnimMob(duration, ease) {
  const title = document.querySelector('.latest-news__title'),
    link = document.querySelector('.latest-news__link'),
    slides = document.querySelectorAll('.latest-news__swiper-slide-inner'),
    section = document.querySelector('.latest-news');

  title.style.opacity = '0';
  link.style.opacity = '0';
  slides.forEach((slide) => (slide.style.opacity = '0'));

  let first = true;

  function handleFirstScroll() {
    if (first) {
      //   gsap.to(window, {
      //     duration: duration,
      //     scrollTo: { y: section } // Прокрутка к элементу с учетом отступа
      //   });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top center'
          }
        })
        .from(title, {
          duration: duration,
          ease,
          keyframes: {
            '0%': { x: '-400', opacity: 0 },
            [centerAnim]: { x: '25', opacity: 1 },
            '100%': { x: '0' }
          }
        })
        .from(
          link,
          {
            duration: duration,
            ease,
            keyframes: {
              '0%': { x: '400', opacity: 0 },
              [centerAnim]: { x: '-25', opacity: 1 },
              '100%': { x: '0' }
            }
          },
          `-=${duration}`
        )
        .from(
          slides[0],
          {
            duration: duration,
            ease,
            keyframes: {
              '0%': { y: '400', opacity: 0 },
              [centerAnim]: { y: '-25', opacity: 1 },
              '100%': { y: '0' }
            }
          },
          `-=${duration + 0.4}`
        )
        .from(
          slides[1],
          {
            duration: duration,
            ease,
            keyframes: {
              '0%': { y: '400', opacity: 0 },
              [centerAnim]: { y: '-25', opacity: 1 },
              '100%': { y: '0' }
            }
          },
          `-=${duration + 0.3}`
        )
        .from(
          slides[2],
          {
            duration: duration,
            ease,
            keyframes: {
              '0%': { y: '500', opacity: 0 },
              [centerAnim]: { y: '-25', opacity: 1 },
              '100%': { y: '0' }
            }
          },
          `-=${duration + 0.2}`
        )
        .from(
          slides[3],
          {
            duration: duration,
            ease,
            keyframes: {
              '0%': { y: '500', opacity: 0 },
              [centerAnim]: { y: '-25', opacity: 1 },
              '100%': { y: '0' }
            }
          },
          `-=${duration}`
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

// ----------------footer-----------------------------
// ----------------footer-----------------------------
// ----------------footer-----------------------------

export function animateFooter(duration, ease) {
  const footer = document.querySelector('.footer--anim'),
    footerSvgBox = footer.querySelector('.footer__svg-box');
  gsap.timeline().from(footerSvgBox, { width: 0, duration: 1.5, ease: 'linear' });
}

export function animateFooterMob(duration, ease) {
  const footer = document.querySelector('.footer--anim'),
    footerSvgBox = footer.querySelector('.footer__svg-box');

  if (footer) {
    let first = true;
    function handleFirstScroll() {
      if (first) {
        footer.style.opacity = '1';
        // gsap.to(window, { duration: duration, scrollTo: footer });
        gsap.timeline().from(footerSvgBox, { width: 0, duration: 1, ease: 'linear' });
      }
      first = false;
    }

    ScrollTrigger.matchMedia({
      '(prefers-reduced-motion: no-preference)': function () {
        ScrollTrigger.create({
          trigger: footer,
          start: 'top 90%',
          toggleActions: 'play pause resume reverse',
          onEnter: () => handleFirstScroll()
        });
      }
    });
  }
}

const developmentText = () => {
  const title = document.querySelector('.development__title'),
    bottomWords = document.querySelectorAll('.development__bottom-word');

  const getLetters = (wordContainer) => {
    return wordContainer.textContent
      .split('')
      .map((letter) => `<span>${letter}</span>`)
      .join('');
  };

  title.innerHTML = getLetters(title);

  bottomWords.forEach((word) => {
    word.innerHTML = getLetters(word);
  });
};

const developmentAnimation = () => {
  const block = document.querySelector('.development'),
    title = block.querySelector('.development__title'),
    titleLetters = title.querySelectorAll('span'),
    bottom = block.querySelector('.development__bottom'),
    bottomChildrens = bottom.children,
    image = block.querySelector('.development__image'),
    left = block.querySelector('.development__left'),
    right = block.querySelector('.development__right'),
    duration = 3;

  const bottomWords = [...bottomChildrens]
    .filter((elem) => elem.classList.contains('development__bottom-word'))
    .map((word) => [...word.children]);

  const timeline =
    window.screen.width < 768
      ? gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: 'top center'
          }
        })
      : gsap.timeline();
  console.log(bottomWords[0][0]);

  timeline
    .from([...titleLetters].slice(0, 10), {
      x: '-=400',
      duration: duration - 2
    })
    .from(
      [...titleLetters].slice(10),
      {
        x: '+=400',
        duration: duration - 2
      },
      0
    )
    .from(
      [...bottomChildrens].slice(0, 7),
      {
        x: '-=400',
        duration: duration - 2
      },
      0
    )
    .from(
      [...bottomChildrens][8],
      {
        x: '+=400',
        duration: duration - 2
      },
      0
    )
    .from(
      [...bottomChildrens][7],
      {
        y: '+=100',
        duration: duration - 2
      },
      0
    )
    .to(image, {
      scale: window.screen.width > 768 ? 3 : 1.4,
      y: window.screen.width > 768 ? '+=20rem' : '+=6rem',
      duration: duration - 1
    })
    .to(
      titleLetters[0],
      {
        x: window.screen.width > 768 ? '21rem' : '-1rem',
        y: window.screen.width > 768 ? '47rem' : '43.5rem',
        rotateZ: -86,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[1],
      {
        x: window.screen.width > 768 ? '15rem' : '-4.5rem',
        y: window.screen.width > 768 ? '40rem' : '39rem',
        rotateZ: -78,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[2],
      {
        x: window.screen.width > 768 ? '10.5rem' : '-7rem',
        y: window.screen.width > 768 ? '33.5rem' : '34.5rem',
        rotateZ: -70,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[3],
      {
        x: window.screen.width > 768 ? '7rem' : '-9rem',
        y: window.screen.width > 768 ? '27.5rem' : '31rem',

        rotateZ: -63,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[4],
      {
        x: window.screen.width > 768 ? '3.5rem' : '-10.5rem',
        y: window.screen.width > 768 ? '21.5rem' : '27rem',
        rotateZ: -55,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[5],
      {
        x: window.screen.width > 768 ? '1rem' : '-11.75rem',
        y: window.screen.width > 768 ? '16rem' : '23.5rem',
        rotateZ: -47,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[6],
      {
        x: window.screen.width > 768 ? '-0.5rem' : '-12.5rem',
        y: window.screen.width > 768 ? '11.5rem' : '20.5rem',
        rotateZ: -39,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[7],
      {
        x: window.screen.width > 768 ? '-1.5rem' : '-12.75rem',
        y: window.screen.width > 768 ? '8rem' : '18rem',
        rotateZ: -32,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[8],
      {
        x: window.screen.width > 768 ? '-2.5rem' : '-12.5rem',
        y: window.screen.width > 768 ? '4.5rem' : '16rem',
        rotateZ: -24,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[9],
      {
        x: window.screen.width > 768 ? '-2rem' : '-12rem',
        y: window.screen.width > 768 ? '2rem' : '14.5rem',
        rotateZ: -16,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[11],
      {
        x: window.screen.width > 768 ? '0rem' : '-11rem',
        y: window.screen.width > 768 ? '0rem' : '13.5rem',
        rotateZ: -2,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[12],
      {
        x: window.screen.width > 768 ? '0.5rem' : '-10rem',
        y: window.screen.width > 768 ? '1rem' : '14rem',
        rotateZ: 8,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[13],
      {
        x: window.screen.width > 768 ? '0.5rem' : '-10rem',
        y: window.screen.width > 768 ? '3rem' : '15.25rem',
        rotateZ: 17,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[14],
      {
        x: window.screen.width > 768 ? '0rem' : '-9.75rem',
        y: window.screen.width > 768 ? '5rem' : '16.75rem',
        rotateZ: 25,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[15],
      {
        x: window.screen.width > 768 ? '-0.5rem' : '-10rem',
        y: window.screen.width > 768 ? '8.5rem' : '18.75rem',
        rotateZ: 32,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[16],
      {
        x: window.screen.width > 768 ? '-2rem' : '-10rem',
        y: window.screen.width > 768 ? '12rem' : '21.25rem',
        rotateZ: 39,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[18],
      {
        x: window.screen.width > 768 ? '-3rem' : '33rem',
        y: window.screen.width > 768 ? '21rem' : '16rem',
        rotateZ: 53,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[19],
      {
        x: window.screen.width > 768 ? '-6rem' : '31.5rem',
        y: window.screen.width > 768 ? '27rem' : '20rem',
        rotateZ: 61,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[20],
      {
        x: window.screen.width > 768 ? '-10rem' : '29.25rem',
        y: window.screen.width > 768 ? '34rem' : '24.25rem',
        rotateZ: 69,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[21],
      {
        x: window.screen.width > 768 ? '-15rem' : '26.5rem',
        y: window.screen.width > 768 ? '40.5rem' : '28.5rem',
        rotateZ: 77,
        duration: duration - 1
      },
      '<'
    )
    .to(
      titleLetters[22],
      {
        x: window.screen.width > 768 ? '-21rem' : '23rem',
        y: window.screen.width > 768 ? '47rem' : '33rem',
        rotateZ: 85,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[0][0],
      {
        x: window.screen.width > 768 ? '-3.5rem' : '0.75rem',
        y: window.screen.width > 768 ? '25.25rem' : '-5rem',
        rotateZ: 58,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[0][1],
      {
        x: window.screen.width > 768 ? '-3.6rem' : '0.1rem',
        y: window.screen.width > 768 ? '26.35rem' : '-3.85rem',
        rotateZ: 56,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[0][2],
      {
        x: window.screen.width > 768 ? '-3.75rem' : '-0.2rem',
        y: window.screen.width > 768 ? '27.5rem' : '-3rem',
        rotateZ: 55,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[0][3],
      {
        x: window.screen.width > 768 ? '-3.9rem' : '-0.6rem',
        y: window.screen.width > 768 ? '28.75rem' : '-1.75rem',
        rotateZ: 52,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[0][4],
      {
        x: window.screen.width > 768 ? '-4rem' : '-1.25rem',
        y: window.screen.width > 768 ? '30.25rem' : '-0.5rem',
        rotateZ: 50,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[1][0],
      {
        x: window.screen.width > 768 ? '-5.5rem' : '-1.75rem',
        y: window.screen.width > 768 ? '37rem' : '5.6rem',
        rotateZ: 36,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[1][1],
      {
        x: window.screen.width > 768 ? '-5.25rem' : '-1.9rem',
        y: window.screen.width > 768 ? '38rem' : '6.5rem',
        rotateZ: 34,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[1][2],
      {
        x: window.screen.width > 768 ? '-5rem' : '-2rem',
        y: window.screen.width > 768 ? '39rem' : '7.25rem',
        rotateZ: 32,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[1][3],
      {
        x: window.screen.width > 768 ? '-5rem' : '-2rem',
        y: window.screen.width > 768 ? '39.75rem' : '8rem',
        rotateZ: 30,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[1][4],
      {
        x: window.screen.width > 768 ? '-4.75rem' : '-2rem',
        y: window.screen.width > 768 ? '40.4rem' : '8.6rem',
        rotateZ: 28,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[1][5],
      {
        x: window.screen.width > 768 ? '-4.5rem' : '-2rem',
        y: window.screen.width > 768 ? '41rem' : '9.25rem',
        rotateZ: 26,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[2][0],
      {
        x: window.screen.width > 768 ? '-3.5rem' : '-0.8rem',
        y: window.screen.width > 768 ? '44.4rem' : '11.9rem',
        rotateZ: 12,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[2][1],
      {
        x: window.screen.width > 768 ? '-3rem' : '-0.75rem',
        y: window.screen.width > 768 ? '44.75rem' : '12.2rem',
        rotateZ: 10,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[2][2],
      {
        x: window.screen.width > 768 ? '-2.75rem' : '-0.6rem',
        y: window.screen.width > 768 ? '45rem' : '12.5rem',
        rotateZ: 8,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[2][3],
      {
        x: window.screen.width > 768 ? '-2.25rem' : '-0.5rem',
        y: window.screen.width > 768 ? '45.25rem' : '12.75rem',
        rotateZ: 7,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[2][4],
      {
        x: window.screen.width > 768 ? '-1.75rem' : '-0.5rem',
        y: window.screen.width > 768 ? '45.4rem' : '12.9rem',
        rotateZ: 4.8,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[3][0],
      {
        x: window.screen.width > 768 ? '-0.75rem' : '1.25rem',
        y: window.screen.width > 768 ? '45.25rem' : '12.5rem',
        rotateZ: -8,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[3][1],
      {
        x: window.screen.width > 768 ? '-0.1rem' : '1.5rem',
        y: window.screen.width > 768 ? '45rem' : '12.25rem',
        rotateZ: -10,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[3][2],
      {
        x: window.screen.width > 768 ? '0.5rem' : '1.5rem',
        y: window.screen.width > 768 ? '44.75rem' : '12rem',
        rotateZ: -12,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[3][3],
      {
        x: window.screen.width > 768 ? '0.75rem' : '1.75rem',
        y: window.screen.width > 768 ? '44.4rem' : '11.7rem',
        rotateZ: -14,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[3][4],
      {
        x: window.screen.width > 768 ? '1.25rem' : '1.75rem',
        y: window.screen.width > 768 ? '44rem' : '11.4rem',
        rotateZ: -16,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[3][5],
      {
        x: window.screen.width > 768 ? '1.5rem' : '1.75rem',
        y: window.screen.width > 768 ? '43.75rem' : '11rem',
        rotateZ: -18,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[3][6],
      {
        x: window.screen.width > 768 ? '2rem' : '1.75rem',
        y: window.screen.width > 768 ? '43.25rem' : '10.5rem',
        rotateZ: -20,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[3][7],
      {
        x: window.screen.width > 768 ? '2.25rem' : '1.75rem',
        y: window.screen.width > 768 ? '42.75rem' : '10rem',
        rotateZ: -22,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[4][0],
      {
        x: window.screen.width > 768 ? '3.25rem' : '2.1rem',
        y: window.screen.width > 768 ? '35rem' : '3.5rem',
        rotateZ: -42,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[4][1],
      {
        x: window.screen.width > 768 ? '3.25rem' : '1.9rem',
        y: window.screen.width > 768 ? '34.25rem' : '2.5rem',
        rotateZ: -43,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[4][2],
      {
        x: window.screen.width > 768 ? '3.25rem' : '1.75rem',
        y: window.screen.width > 768 ? '33.25rem' : '1.5rem',
        rotateZ: -46,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[4][3],
      {
        x: window.screen.width > 768 ? '3.25rem' : '1rem',
        y: window.screen.width > 768 ? '31.75rem' : '0.4rem',
        rotateZ: -48,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[4][4],
      {
        x: window.screen.width > 768 ? '3.25rem' : '0.75rem',
        y: window.screen.width > 768 ? '30.5rem' : '-0.75rem',
        rotateZ: -50,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[4][6],
      {
        x: window.screen.width > 768 ? '4rem' : '0.75rem',
        y: window.screen.width > 768 ? '28.25rem' : '-2.5rem',
        rotateZ: -54,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[4][7],
      {
        x: window.screen.width > 768 ? '3.5rem' : '0.3rem',
        y: window.screen.width > 768 ? '27.2rem' : '-3.5rem',
        rotateZ: -56,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[4][8],
      {
        x: window.screen.width > 768 ? '3.25rem' : '-0.25rem',
        y: window.screen.width > 768 ? '25.75rem' : '-4.75rem',
        rotateZ: -58,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomWords[4][9],
      {
        x: window.screen.width > 768 ? '3rem' : '-0.75rem',
        y: window.screen.width > 768 ? '24.5rem' : '-6rem',
        rotateZ: -60,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomChildrens[1],
      {
        x: window.screen.width > 768 ? '-5.25rem' : '-2rem',
        y: window.screen.width > 768 ? '34rem' : '2.5rem',
        rotateZ: 45,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomChildrens[3],
      {
        x: window.screen.width > 768 ? '-3.75rem' : '-1.25rem',
        y: window.screen.width > 768 ? '43.5rem' : '10.75rem',
        rotateZ: 15,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomChildrens[5],
      {
        x: window.screen.width > 768 ? '-1rem' : '0.25rem',
        y: window.screen.width > 768 ? '45.75rem' : '12.75rem',
        rotateZ: 3,
        duration: duration - 1
      },
      '<'
    )
    .to(
      bottomChildrens[7],
      {
        x: window.screen.width > 768 ? '6.5rem' : '3rem',
        y: window.screen.width > 768 ? '37.25rem' : '6.75rem',
        rotateZ: -2,
        duration: duration - 1
      },
      '<'
    )
    .from(
      left,
      {
        scale: 0.5,
        x: -500,
        y: 500,
        duration: duration - 1
      },
      '<'
    )
    .from(
      right,
      {
        scale: 0.5,
        x: 500,
        y: 500,
        duration: duration - 1
      },
      '<'
    );
};
