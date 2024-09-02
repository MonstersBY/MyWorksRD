import { rem } from '../utils/utils';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import popup from '../utils/popup';
import form from '../utils/form';
import IMask from 'imask';

export const modules = {};

document.addEventListener('DOMContentLoaded', () => {
  try {
    burgerMenu();
  } catch {}
  try {
    phonePopupMask();
  } catch {}
  try {
    phoneOrderLunchMask();
  } catch {}
  try {
    phoneApplicationMask();
  } catch {}
  try {
    popup();
  } catch {}
  try {
    form();
  } catch {}
  try {
    ourOffersMoreBtn();
  } catch {}
  try {
    seoBlockMoreBtn();
  } catch {}

  // sliders
  try {
    mainBannerSlider();
  } catch {}
  try {
    servicesSlider();
  } catch {}
  try {
    reviewsSlider();
  } catch {}
  try {
    corpFoodSlider();
  } catch {}

});

function ourOffersMoreBtn() {
  const lists = document.querySelectorAll('.our-offers__content-list');
  lists.forEach((list) => {
    const maxVisibleItems = 3;
    const btn = list.querySelector('.our-offers__content-list-btn');
    const items = list.querySelectorAll('.our-offers__content-list-li');

    if (items.length <= maxVisibleItems) {
      btn.classList.add('hide');
    } else {
      const hideList = () => {
        for (let i = maxVisibleItems; i < items.length; i++) {
          items[i].classList.add('hide');
        }
      };
      const showList = () => {
        items.forEach((el) => el.classList.remove('hide'));
        btn.classList.add('hide');
      };
      hideList();
      btn.addEventListener('click', () => {
        showList();
      });
    }
  });
}

function seoBlockMoreBtn() {
  const btn = document.querySelector('.seo-block__more-btn');
  const text = document.querySelector('.seo-block__text');
  btn.addEventListener('click', () => {
    text.classList.add('show');
    btn.classList.add('hide');
  });
}

// PHONE MASK

function phonePopupMask() {
  IMask(
    document.querySelector('.popup__application-input.phone-mask'),
    {
      mask: '+{7} (000) 000 00 00'
    }
  );
}

function phoneOrderLunchMask() {
  IMask(
    document.querySelector('.order-lunch__form-input'),
    {
      mask: '+{7} (000) 000 00 00'
    }
  );
}

function phoneApplicationMask() {
  IMask(
    document.querySelector('.application__input.phone-mask'),
    {
      mask: '+{7} (000) 000 00 00'
    }
  );
}


// BURGER MENU ------------------------------------------------------------
function burgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const burgerMenu = document.querySelector('.header__burger-menu');
  const hamburgerClose = document.querySelector('.header__burger-close');
  
  function closeBurgerMenu() {
    burgerMenu.classList.remove('active');
  };
  
  function openBurgerMenu() {
    burgerMenu.classList.add('active');
  };
  
  hamburger.addEventListener('click', openBurgerMenu);
  
  hamburgerClose.addEventListener('click', closeBurgerMenu);
}

// SLIDERS ------------------------------------------------------------
function mainBannerSlider() {
  const swiper = new Swiper('.main-banner__slider', {
    slidesPerView: 1,
    loop: 'true',
    spaceBetween: rem(2),
    speed: 1000,
    effect: "fade",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.main-banner__btn-next',
      prevEl: '.main-banner__btn-prev',
    },
    pagination: {
      el: '.main-banner__fractions',
      type: "fraction",
    },
  });
}

function servicesSlider() {
  const swiper = new Swiper('.services__slider', {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: rem(2.4),
    navigation: {
      nextEl: '.services__btn-next',
      prevEl: '.services__btn-prev',
    },
    pagination: {
      el: '.services__fractions',
      type: "fraction",
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        spaceBetween: rem(2.4),
      },
    },
  });
}

function reviewsSlider() {
  const swiper = new Swiper('.reviews__slider', {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: rem(2.4),
    navigation: {
      nextEl: '.reviews__btn-next',
      prevEl: '.reviews__btn-prev',
    },
    pagination: {
      el: '.reviews__fractions',
      type: "fraction",
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        spaceBetween: rem(2.4),
      },
    },
  });
}

function corpFoodSlider() {
  const swiper = new Swiper('.corp-food__slider_desc', {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: rem(2.4),
    effect: "fade",
    loop: 'true',
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.corp-food__btn-next_desc',
      prevEl: '.corp-food__btn-prev_desc',
    },
    pagination: {
      el: '.corp-food__fractions_desc',
      type: "fraction",
    },
  });
  const swiperMob = new Swiper('.corp-food__slider_mob', {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: rem(2.4),
    effect: "fade",
    loop: 'true',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.corp-food__btn-next_mob',
      prevEl: '.corp-food__btn-prev_mob',
    },
  });
}