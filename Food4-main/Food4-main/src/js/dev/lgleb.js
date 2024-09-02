const { default: Swiper } = require('swiper');

window.addEventListener('DOMContentLoaded', () => {
  swipers();

  if (document.querySelector('.about-service') && window.screen.width < 768) {
    const text = document.querySelector('.about-service__row'),
      initialTextHeight = text.clientHeight,
      toggleTextBtn = document.querySelector('.about-service__descr-toggle');

    toggleTextBtn.addEventListener('click', () => {
      text.classList.toggle('active');

      if (text.classList.contains('active')) {
        text.style.maxHeight = `${text.scrollHeight}px`;
        toggleTextBtn.querySelector('div:first-child').textContent = 'Скрыть';
      } else {
        text.style.maxHeight = `${initialTextHeight}px`;
        toggleTextBtn.querySelector('div:first-child').textContent = 'Читать полностью';
      }
    });
  }

  if (document.querySelector('.every-taste') && window.screen.width < 768) {
    const listContainers = document.querySelectorAll('.every-taste__row-right'),
      listInitialHeight = document.querySelector('.every-taste__row-right_wrapper').clientHeight;

    listContainers.forEach((container) => {
      container.addEventListener('click', (e) => {
        console.log(e.target);

        let target = e.target;
        let list = container.querySelector('.every-taste__row-right_wrapper');

        if (target.classList.contains('every-taste__right-toggle')) {
          list.classList.toggle('active');

          if (list.classList.contains('active')) {
            list.style.maxHeight = `${list.scrollHeight}px`;
            target.querySelector('div:first-child').textContent = 'Скрыть';
          } else {
            list.style.maxHeight = `${listInitialHeight}px`;
            target.querySelector('div:first-child').textContent = 'Смотреть полностью';
          }
        }
      });
    });
  }
});

function swipers() {
  const cateringSwiper = new Swiper('.catering-slider__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,

    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: 32
      }
    },

    navigation: {
      nextEl: '.catering-slider__button-swiper--next',
      prevEl: '.catering-slider__button-swiper--prev'
    }
  });

  const cateringBannerSwiper = new Swiper('.catering-banner__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 16,

    breakpoints: {
      768: {
        allowTouchMove: false,
        spaceBetween: 0
      }
    },

    navigation: {
      nextEl: '.catering-banner__button-swiper--next',
      prevEl: '.catering-banner__button-swiper--prev'
    }
  });

  if (document.querySelector('.every-taste__slider')) {
    const sliders = document.querySelectorAll('.every-taste__slider');

    sliders.forEach((slider) => {
      let swiper = slider.querySelector('.every-taste__swiper');

      new Swiper(swiper, {
        slidesPerView: 1,
        slidesPerGroup: 1,

        navigation: {
          nextEl: slider.querySelector('.every-taste__button-swiper--next'),
          prevEl: slider.querySelector('.every-taste__button-swiper--prev')
        }
      });
    });
  }
}
