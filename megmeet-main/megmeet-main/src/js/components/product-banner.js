import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function productBanner() {
  const curSlide = document.querySelector('.product-banner__pagination-num--cur');
  const lastSlide = document.querySelector('.product-banner__pagination-num--last');
  const slides = document.querySelectorAll('.product-banner__swiper-slide');

  slides.forEach((item, i) => (item.dataset.num = i + 1));
  const swiper = new Swiper('.product-banner__swiper', {
    slidesPerView: '1',
    spaceBetween: rem(2),
    allowTouchMove: true,
    loop: true,
    speed: 800,
    pagination: {
      el: '.product-banner__pagination',
      type: 'bullets',
      dynamicBullets: true
    },
    navigation: {
      prevEl: '.product-banner__swiper-navigation--left',
      nextEl: '.product-banner__swiper-navigation--right'
    },
    breakpoints: {
      768: {
        allowTouchMove: false,
        spaceBetween: 20,
        direction: 'vertical',
        pagination: {
          type: 'progressbar'
        }
      }
    },
    on: {
      init: (swiper) => {
        curSlide.textContent = `0${swiper.slides[swiper.activeIndex].getAttribute('data-num')}`;
        lastSlide.textContent = `0${swiper.slides.length}`;
      },
      slideChange: function (swiper) {
        curSlide.textContent = `0${swiper.slides[swiper.activeIndex].getAttribute('data-num')}`;
      }
    }
  });

  $('.product-banner__selector-top').on('click', function () {
    // $(this).closest('.product-banner__selector').find('.product-banner__selector-bottom').slideToggle();

    // $(this).toggleClass('active');

    if (!$(this).hasClass('active')) {
      $('.product-banner__selector-bottom').slideUp();
      $('.product-banner__selector-top').removeClass('active');
      $(this).closest('.product-banner__selector').find('.product-banner__selector-bottom').slideDown();
      $(this).addClass('active');
    } else {
      $(this).closest('.product-banner__selector').find('.product-banner__selector-bottom').slideUp();
      $(this).removeClass('active');
    }
  });
  $('.product-banner__selector-item').on('click', function () {
    $(this).closest('.product-banner__selector').find('.product-banner__selector-item').removeClass('active');
    $(this).addClass('active');

    $(this)
      .closest('.product-banner__selector')
      .find('.product-banner__selector-top')
      .find('span')
      .text($(this).text());
    $(this).closest('.product-banner__selector').find('.product-banner__selector-top').removeClass('active');
    $(this).closest('.product-banner__selector').find('.product-banner__selector-bottom').slideToggle();
  });

  const showMoreBtn = document.querySelectorAll('.product-banner__show-more-btn');

  showMoreBtn.forEach((item) =>
    item.addEventListener('click', () => {
      item.parentElement.classList.toggle('active');
      $('.product-banner__characteristic-list-box--hide').slideToggle();
    })
  );

  const fixBtn = document.querySelector('.product-banner__btn');

  function fixbinHelp() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.body.offsetHeight;
    const fromTop = 100;
    const fromBottom = 500;

    if (scrollPosition >= fromTop) {
      fixBtn.classList.add('active');
    } else {
      fixBtn.classList.remove('active');
    }

    if (windowHeight + scrollPosition >= docHeight - fromBottom) {
      fixBtn.classList.remove('active');
    }
  }
  if (fixBtn) {
    window.addEventListener('scroll', fixbinHelp);
    window.addEventListener('resize', fixbinHelp);
  }
}

export default productBanner;
