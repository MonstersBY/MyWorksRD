import popup from '../utils/popup';
import form from '../utils/form';
import CircleType from 'circletype';
import 'inputmask';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const modules = {};
window.$ = window.jQuery = require('jquery');
import { rem } from '../utils/constants';

document.addEventListener('DOMContentLoaded', () => {
  try {
    burgerMenu();
  } catch {}
  try {
    popup();
  } catch {}
  try {
    form();
  } catch {}
  try {
    phoneMask();
  } catch {}
  try {
    guaranteeCircles();
  } catch {}
  try {
    otherServicesCircles();
  } catch {}
  try {
    mainTabs();
  } catch {}
  try {
    ourWorksSwiper();
  } catch {}
  try {
    otherServicesSwiper();
  } catch {}
  try {
    reviewsSwiper();
  } catch {}
  try {
    showMore();
  } catch {}
  try {
    pricesTabs();
  } catch {}
  try {
    scroll();
  } catch {}
  try {
    articleDetSwiper();
  } catch {}
  try {
    portfolioDetSwiper();
  } catch {}
  try {
    asideNavlink('.article-det__nav-link');
  } catch {}
  try {
    asideNavlink('.portfolio-det__nav-link');
  } catch {}
  try {
    otherArticlesSwiper();
  } catch {}
});

function burgerMenu() {
  const burger = document.querySelector('.header__mob-burger');
  const headerInner = document.querySelector('.header__inner');
  const overlay = document.querySelector('.overlay');

  burger.addEventListener('click', () => {
    if (!burger.classList.contains('active')) {
      burger.classList.add('active');
      headerInner.classList.add('active');
      document.body.style.overflow = 'hidden';
      overlay.classList.add('active');
    } else {
      headerInner.classList.remove('active');
      burger.classList.remove('active');
      document.body.style.overflow = '';
      overlay.classList.remove('active');
    }
  });

  overlay.addEventListener('click', () => {
    headerInner.classList.remove('active');
    burger.classList.remove('active');
    document.body.style.overflow = '';
    overlay.classList.remove('active');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      headerInner.classList.remove('active');
      burger.classList.remove('active');
      document.body.style.overflow = '';
      overlay.classList.remove('active');
    }
  });
}

function phoneMask() {
  const mask = new Inputmask('+7 (999) 999 99 99');
  mask.mask($('.phone-mask'));
}

function guaranteeCircles() {
  const circles = document.querySelectorAll('.guarantee-banner__circle');

  circles.forEach((circle) => {
    const circleType = new CircleType(circle);
    circle.style.transform = 'rotate(105deg)';
  });
}

function otherServicesCircles() {
  const circles = document.querySelectorAll('.other-services__circle');

  circles.forEach((circle) => {
    const circleType = new CircleType(circle);
    circle.style.transform = 'rotate(105deg)';
  });
}

function mainTabs() {
  const buttons = document.querySelectorAll('.main-tabs__tabs-btn ');
  const tabs = document.querySelectorAll('.main-tabs__tabs-tab');

  buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.remove('active'));
      tabs.forEach((tabs) => tabs.classList.remove('active'));
      button.classList.add('active');
      tabs[i].classList.add('active');
    });
  });
}

function ourWorksSwiper() {
  const swiperOurWorks = new Swiper('.our-works__swiper', {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    speed: 300,
    // allowTouchMove: false,
    navigation: {
      nextEl: '.our-works__swiper-btn--next',
      prevEl: '.our-works__swiper-btn--prev'
    },

    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: rem(3.2)
      }
    }
  });
}

function otherServicesSwiper() {
  const swiperOurWorks = new Swiper('.other-services-swiper__swiper', {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    speed: 300,
    // allowTouchMove: false,
    navigation: {
      nextEl: '.other-services-swiper__btn--next',
      prevEl: '.other-services-swiper__btn--prev'
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: rem(3.2)
      }
    }
  });
}

function reviewsSwiper() {
  const swiperOurWorks = new Swiper('.reviews-swiper__swiper', {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    speed: 300,
    autoHeight: true,
    // allowTouchMove: false,
    navigation: {
      nextEl: '.reviews-swiper__btn--next',
      prevEl: '.reviews-swiper__btn--prev'
    }
  });
}

function showMore() {
  const elem = document.querySelector('.seo__text-box');

  let size = window.innerWidth > 768 ? 1598 : 512;
  let text = elem.innerHTML;

  window.addEventListener('resize', () => {
    size = window.innerWidth > 768 ? 1598 : 512;
    if (elem.hasAttribute('data-short')) {
      text_crop();
    }
  });

  function maxHeight() {
    elem.style.maxHeight = `${elem.scrollHeight}px`;
  }

  function text_crop() {
    elem.setAttribute('data-fulltext', text);

    if (text.length > size) {
      const text2 = text.slice(0, size - 10);
      elem.innerHTML = text2 + '...';
      elem.setAttribute('data-short', true);
      elem.style.maxHeight = window.innerWidth > 768 ? '59rem' : '44.8rem';
    }
  }

  function expandText() {
    const fullText = elem.getAttribute('data-fulltext');
    if (elem.hasAttribute('data-short')) {
      elem.innerHTML = fullText;
      elem.style.maxHeight = 'auto';
      elem.removeAttribute('data-short');
      maxHeight();
      elem.parentElement.classList.add('isActive');
      window.addEventListener('resize', maxHeight);
    } else {
      window.removeEventListener('resize', maxHeight);
      elem.style.maxHeight = window.innerWidth > 768 ? '59rem' : '44.8rem';
      elem.parentElement.classList.remove('isActive');
      setTimeout(() => {
        text_crop();
      }, 300);
    }
  }

  text_crop();
  document.querySelectorAll('.seo__btn').forEach((item) => item.addEventListener('click', expandText));
}

function pricesTabs() {
  const buttons = document.querySelectorAll('.prices__tabs-btn ');
  const tabs = document.querySelectorAll('.prices__tabs-tab');

  buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.remove('active'));
      tabs.forEach((tabs) => tabs.classList.remove('active'));
      button.classList.add('active');
      tabs[i].classList.add('active');
    });
  });

  const btnsShowMore = document.querySelectorAll('.prices__btn');

  btnsShowMore.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.parentElement.parentElement.classList.contains('active')) {
        item.parentElement.parentElement.classList.remove('active');
        item.parentElement.parentElement
          .querySelectorAll('.prices__tabs-tab-item--mob')
          .forEach((item) => (item.style.maxHeight = ''));
      } else {
        item.parentElement.parentElement.classList.add('active');
        item.parentElement.parentElement
          .querySelectorAll('.prices__tabs-tab-item--mob')
          .forEach((item) => (item.style.maxHeight = `${item.scrollHeight}px`));
      }
    });
  });
  const wrappers = document.querySelectorAll('.prices__tabs-tab-item-wrapper');

  window.addEventListener('resize', () => {
    wrappers.forEach((item) => {
      if (item.classList.contains('active')) {
        item
          .querySelectorAll('.prices__tabs-tab-item--mob')
          .forEach((item) => (item.style.maxHeight = `${item.scrollHeight}px`));
      }
    });
  });
}

function scroll() {
  const anchors = document.querySelectorAll(`.nav-link`);

  for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const blockId = anchor.getAttribute('href');
      document.querySelector('' + blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      console.log('awdawd');
    });
  }
}

function articleDetSwiper() {
  const swiperOurWorks = new Swiper('.article-det__article-item-swiper', {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    speed: 300,
    autoHeight: true,
    // allowTouchMove: false,
    navigation: {
      nextEl: '.article-det__article-item-swiper-btn--next',
      prevEl: '.article-det__article-item-swiper-btn--prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: rem(3.2)
      }
    }
  });
}

function portfolioDetSwiper() {
  const swiperOurWorks = new Swiper('.portfolio-det__portfolio-item-swiper', {
    slidesPerView: 2,
    loop: true,
    grabCursor: true,
    spaceBetween: rem(1.6),
    speed: 300,
    autoHeight: true,
    // allowTouchMove: false,
    navigation: {
      nextEl: '.portfolio-det__portfolio-item-swiper-btn--next',
      prevEl: '.portfolio-det__portfolio-item-swiper-btn--prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: rem(3.2)
      }
    }
  });
}

function asideNavlink(selector) {
  const links = document.querySelectorAll(selector);
  links.forEach((item) => {
    item.addEventListener('click', () => {
      links.forEach((item) => item.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

function otherArticlesSwiper() {
  const swiperOurWorks = new Swiper('.other-articles-swiper__swiper', {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    speed: 300,
    autoHeight: true,
    // allowTouchMove: false,
    navigation: {
      nextEl: '.other-articles-swiper__swiper-btn--next',
      prevEl: '.other-articles-swiper__swiper-btn--prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: rem(2.6)
      }
    }
  });
}
