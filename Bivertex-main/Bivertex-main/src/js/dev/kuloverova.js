import popup from '../utils/popup';
import form from '../utils/form';
import 'inputmask';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

export const modules = {};
window.$ = window.jQuery = require('jquery');
import { rem } from '../utils/constants';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
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
    dropdownHeader();
  } catch {}
  try {
    mainHeroSwiper();
  } catch {}
  try {
    headerDropdownSwiper();
  } catch {}
  try {
    scroll();
  } catch {}
  try {
    arrowTop();
  } catch {}
  try {
    detNewsSwiper();
  } catch {}
  try {
    careerHeroSwiper();
  } catch {}
  try {
    catalogDropdownInputSearch();
  } catch {}
  try {
    catalogFilter();
  } catch {}
  try {
    catalogSort();
  } catch {}
  try {
    catalogFilterModal();
  } catch {}
  try {
    structuralFeaturesSwiper();
  } catch {}
  try {
    additionalFeaturesSwiper();
  } catch {}
  try {
    systemCncTabs();
  } catch {}
  try {
    anchorTabs('.product-card-tabs__tab');
  } catch {}
  try {
    anchorTabs('.about-us-tabs__tab');
  } catch {}
  try {
    machineDevelopmentVideo();
  } catch {}
  try {
    machineDevelopmentSwiper();
  } catch {}
  try {
    typicalSwiper();
  } catch {}
  try {
    spindleUnitSwiper();
  } catch {}
  try {
    requirementsSwiper();
  } catch {}
  try {
    specificationsTabs();
  } catch {}
  try {
    specificationsBlockSlider();
  } catch {}
  try {
    configuratorHeroSwiper();
  } catch {}
  try {
    configurationTypeTabs();
  } catch {}
  try {
    priceBottomMeny();
    window.addEventListener('scroll', priceBottomMeny);
    window.addEventListener('resize', priceBottomMeny);
  } catch {}
  try {
    configurationRange();
  } catch {}
  try {
    // if (window.innerWidth > 768) {
    animBlocks();
    // }
  } catch {}
  try {
    burgerLk();
  } catch {}
  try {
    lkTabs();
  } catch {}
  try {
    additionalFeaturesMinSwiper();
  } catch {}
});

function phoneMask() {
  const mask = new Inputmask('+7 (999) 999 99 99');
  mask.mask($('.phone-mask'));
}

function dropdownHeader() {
  const dropdown = document.querySelector('.dropdown');

  const dropdownContent = dropdown.querySelector('.header__dropdown');
  const dropdownLink = dropdown.querySelector('.header__nav-item-link-wrapper');
  const dropdownInner = dropdown.querySelector('.header__dropdown-inner');
  const dropdownListBackBtn = dropdown.querySelector('.header__dropdown-inner-list-btn');

  setTimeout(() => {
    dropdownContent.style.transition = 'opacity 0.3s, visibility 0.3s, z-index 0.3s, transform 0.5s';
  }, 0);

  function mouseenter() {
    dropdownContent.classList.add('active');
    dropdownLink.classList.add('active');
    dropdownInner.addEventListener('mouseleave', () => {
      dropdownContent.classList.remove('active');
      dropdownLink.classList.remove('active');
    });
    if (dropdownContent.classList.contains('active')) {
      dropdown.addEventListener('click', (e) => {
        if (e.target.classList.contains('header__dropdown')) {
          dropdownContent.classList.remove('active');
        }
      });
    }
  }
  function mouseleave() {
    dropdownContent.classList.remove('active');
    dropdownLink.classList.remove('active');
  }

  // function dropdownClick() {
  //   dropdown.classList.toggle('active');
  //   $(dropdownServisesContent).slideToggle();
  // }

  const mobList = document.querySelector('.header__dropdown-inner-list');

  function dropdownClick() {
    dropdownContent.classList.add('active');
  }
  function dropdownClickBtn() {
    dropdownContent.classList.remove('active');
  }

  function showContent() {
    if (window.innerWidth < 768) {
      // $(dropdownInner).hide();
      dropdown.removeEventListener('mouseenter', mouseenter);
      dropdown.removeEventListener('mouseleave', mouseleave);
      dropdownLink.addEventListener('click', dropdownClick);
      dropdownListBackBtn.addEventListener('click', dropdownClickBtn);
      dropdown.classList.remove('active');
      dropdownContent.classList.remove('active');
    } else {
      // $(dropdownInner).show();
      dropdown.addEventListener('mouseenter', mouseenter);
      dropdown.addEventListener('mouseleave', mouseleave);
      dropdownLink.removeEventListener('click', dropdownClick);
      dropdownListBackBtn.removeEventListener('click', dropdownClickBtn);
      dropdown.classList.remove('active');
      dropdownContent.classList.remove('active');
    }
  }

  showContent();
  window.addEventListener('resize', showContent);

  const burger = document.querySelector('.header__mob-burger');
  const headerInner = document.querySelector('.header__inner-wrapper');
  const call = document.querySelector('.header__mob-call');

  burger.addEventListener('click', () => {
    if (!burger.classList.contains('active')) {
      burger.classList.add('active');
      burger.parentElement.classList.add('active');
      headerInner.classList.add('active');
      call.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      headerInner.classList.remove('active');
      burger.parentElement.classList.remove('active');
      burger.classList.remove('active');
      call.classList.remove('active');
      document.body.style.overflow = '';
      dropdownContent.classList.remove('active');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      headerInner.classList.remove('active');
      burger.classList.remove('active');
      burger.parentElement.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

function mainHeroSwiper() {
  const swiperOurWorks = new Swiper('.main-hero__swiper', {
    slidesPerView: 1,
    // loop: true,
    allowTouchMove: false,
    // grabCursor: true,
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 8000
      // disableOnInteraction: true,
    },
    navigation: {
      nextEl: '.main-hero__swiper-btn--next',
      prevEl: '.main-hero__swiper-btn--prev'
    },

    pagination: {
      el: '.main-hero__progress',
      type: 'progressbar'
    },

    breakpoints: {
      769: {
        autoplay: {
          delay: 60000
        }
      }
    }
  });
}

function careerHeroSwiper() {
  const swiperOurWorks = new Swiper('.career-hero__swiper', {
    slidesPerView: 1,
    // loop: true,
    allowTouchMove: false,
    // grabCursor: true,
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    // autoplay: {
    //   delay: 8000
    //   // disableOnInteraction: false,
    // },
    navigation: {
      nextEl: '.career-hero__swiper-btn--next',
      prevEl: '.career-hero__swiper-btn--prev'
    },

    pagination: {
      el: '.career-hero__progress',
      type: 'progressbar'
    },

    breakpoints: {
      769: {
        // autoplay: {
        //   delay: 60000
        // }
      }
    }
  });
}

function headerDropdownSwiper() {
  const swiperOurWorks = new Swiper('.header__dropdown-swiper', {
    slidesPerView: 4,
    // loop: true,
    grabCursor: true,
    spaceBetween: rem(6.7),
    navigation: {
      nextEl: '.header__dropdown-swiper-btn--next',
      prevEl: '.header__dropdown-swiper-btn--prev'
    }

    // pagination: {
    //   el: '.main-hero__progress',
    //   type: 'progressbar'
    // },
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
    });
  }
}

function arrowTop() {
  const nav = document.querySelector('.arrow-top__arrow-box');
  const navOffsetTop = nav.offsetTop;

  function handleScroll() {
    if (window.innerWidth > 768) {
      if (window.scrollY > navOffsetTop / 3) {
        nav.classList.add('arrow-top--show');
      } else {
        nav.classList.remove('arrow-top--show');
      }
    }
  }

  function handleResize() {
    // Выключаем обработчик скролла, если ширина экрана меньше 768
    if (window.innerWidth <= 768) {
      window.removeEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll);
    }
  }

  // Добавляем обработчик события resize
  window.addEventListener('resize', handleResize);

  // Инициализируем обработчик скролла при загрузке страницы
  handleResize();
}

function detNewsSwiper() {
  const swiperOurWorks = new Swiper('.det-news__swiper', {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    speed: 1000,
    navigation: {
      nextEl: '.det-news__swiper-btn--next',
      prevEl: '.det-news__swiper-btn--prev'
    },

    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: rem(2)
      }
    }
  });
}

// function catalogDropdownInputSearch() {
//   $('.form__dropdown_search').on('input', '.form__dropdown_top input', function () {
//     if ($(this).val().trim() !== '') {
//       setTimeout(() => {
//         $(this).closest('.form__dropdown_search').find('.form__dropdown_top').addClass('open');
//         $(this).closest('.form__item').addClass('active');
//         $(this).closest('.form__dropdown_search').find('.form__dropdown_bottom').slideDown();
//       }, 0);
//     } else {
//       $(this).closest('.form__dropdown_search').find('.form__dropdown_top').removeClass('open');
//       $(this).closest('.form__item').removeClass('active');
//       $(this).closest('.form__dropdown_search').find('.form__dropdown_bottom').slideUp();
//     }
//   });

//   $('.form__dropdown_search').on('click', '.form__dropdown_top input', function () {
//     if ($(this).val().trim() !== '') {
//       setTimeout(() => {
//         $(this).closest('.form__dropdown_search').find('.form__dropdown_top').addClass('open');
//         $(this).closest('.form__item').addClass('active');
//         $(this).closest('.form__dropdown_search').find('.form__dropdown_bottom').slideDown();
//       }, 200);
//     } else {
//       $(this).closest('.form__dropdown_search').find('.form__dropdown_top').removeClass('open');
//       $(this).closest('.form__item').removeClass('active');
//       $(this).closest('.form__dropdown_search').find('.form__dropdown_bottom').slideUp();
//     }
//   });

//   $('.form__dropdown_search').on('blur', '.form__dropdown_top input', function () {
//     $(this).closest('.form__dropdown_search').find('.form__dropdown_top').removeClass('open');
//     $(this).closest('.form__item').removeClass('active');
//     $(this).closest('.form__dropdown_search').find('.form__dropdown_bottom').slideUp();
//   });

//   // Обработчик клика на элементе выпадающего списка
//   $('.form__dropdown_search').on('click', '.form__dropdown_item', function () {
//     // Проверка наличия родительского элемента .form__dropdown_search
//     if ($(this).closest('.form__dropdown_search').length) {
//       // Установка значения и стилей при выборе элемента в выпадающем списке с поиском
//       $(this)
//         .closest('.form__dropdown_search')
//         .find('.form__dropdown_top input')
//         .val($(this).find('.form__dropdown_item_name').text());
//       $(this).closest('.form__dropdown_search').find('.form__dropdown_top input').focus();
//     }
//   });

//   // Обработчик события нажатия клавиши в поле ввода
//   $('.form__dropdown_search').on('keyup', '.form__dropdown_top input', function () {
//     var value = $(this).val().toLowerCase();
//     // Фильтрация элементов выпадающего списка по введенному значению
//     $(this)
//       .closest('.form__dropdown_search')
//       .find('.form__dropdown_item')
//       .filter(function () {
//         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
//       });
//   });

//   document.querySelector('.current-vacancies__dropdown--close').addEventListener('click', () => {
//     document.querySelector('.current-vacancies__input-wrapper input').value = '';
//     document.querySelector('.current-vacancies__input-wrapper input').focus();
//   });
//   document.querySelector('.current-vacancies__dropdown--enter').addEventListener('click', (e) => {
//     e.target.closest('.form__dropdown_top').classList.remove('open');

//     if (e.target.closest('.form__dropdown_top').nextElementSibling.style.display === 'block') {
//       $(e.target.closest('.form__dropdown_top').nextElementSibling).slideUp();
//     }
//   });
// }

function catalogDropdownInputSearch() {
  $('.form__dropdown_search').on('input', '.form__dropdown_top input', function () {
    if ($(this).val().trim() !== '') {
      setTimeout(() => {
        $(this).closest('.form__dropdown_search').find('.form__dropdown_top').addClass('open');
        $(this).closest('.form__item').addClass('active');
        $(this).closest('.form__dropdown_search').find('.form__dropdown_bottom').slideDown();
      }, 0);
    } else {
      $(this).closest('.form__dropdown_search').find('.form__dropdown_top').removeClass('open');
      $(this).closest('.form__item').removeClass('active');
      $(this).closest('.form__dropdown_search').find('.form__dropdown_bottom').slideUp();
    }
  });

  $('.form__dropdown_search').on('click', '.form__dropdown_top input', function () {
    if ($(this).val().trim() !== '') {
      setTimeout(() => {
        $(this).closest('.form__dropdown_search').find('.form__dropdown_top').addClass('open');
        $(this).closest('.form__item').addClass('active');
        $(this).closest('.form__dropdown_search').find('.form__dropdown_bottom').slideDown();
      }, 200);
    } else {
      $(this).closest('.form__dropdown_search').find('.form__dropdown_top').removeClass('open');
      $(this).closest('.form__item').removeClass('active');
      $(this).closest('.form__dropdown_search').find('.form__dropdown_bottom').slideUp();
    }
  });

  $('.form__dropdown_search').on('blur', '.form__dropdown_top input', function () {
    $(this).closest('.form__dropdown_search').find('.form__dropdown_top').removeClass('open');
    $(this).closest('.form__item').removeClass('active');
    $(this).closest('.form__dropdown_search').find('.form__dropdown_bottom').slideUp();
  });

  //   Обработчик клика на элементе выпадающего списка
  $('.form__dropdown_search').on('click', '.form__dropdown_item', function () {
    // Проверка наличия родительского элемента .form__dropdown_search
    if ($(this).closest('.form__dropdown_search').length) {
      // Установка значения и стилей при выборе элемента в выпадающем списке с поиском
      $(this)
        .closest('.form__dropdown_search')
        .find('.form__dropdown_top input')
        .val($(this).find('.form__dropdown_item_name').text());
      $(this).closest('.form__dropdown_search').find('.form__dropdown_top input').focus();

      let href = $(this).find('.form__dropdown_item_name').data('href');
      console.log(href);
      $('.current-vacancies__dropdown--enter').attr('href', `${href}`);
    }
  });

  // Обработчик события нажатия клавиши в поле ввода
  $('.form__dropdown_search').on('keyup', '.form__dropdown_top input', function () {
    var value = $(this).val().toLowerCase();
    // Фильтрация элементов выпадающего списка по введенному значению
    $(this)
      .closest('.form__dropdown_search')
      .find('.form__dropdown_item')
      .filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
  });

  document.querySelector('.current-vacancies__dropdown--close').addEventListener('click', () => {
    document.querySelector('.current-vacancies__input-wrapper input').value = '';
    document.querySelector('.current-vacancies__input-wrapper input').focus();
  });
  document.querySelector('.current-vacancies__dropdown--enter').addEventListener('click', (e) => {
    e.target.closest('.form__dropdown_top').classList.remove('open');

    if (e.target.closest('.form__dropdown_top').nextElementSibling.style.display === 'block') {
      $(e.target.closest('.form__dropdown_top').nextElementSibling).slideUp();
    }
  });
}

function modalFiltersCalc() {
  if ($('.current-vacancies__current-filters-item').length > 0) {
    $('.current-vacancies__filters-list-wrapper').css('height', `calc(100% - 46rem)`);
    $('.current-vacancies__current-filters-box.mobile').slideDown();
  } else {
    $('.current-vacancies__filters-list-wrapper').css('height', `calc(100% - 28rem)`);

    $('.current-vacancies__current-filters-box.mobile').slideUp();
  }
}

function catalogFilter() {
  const container = $('.current-vacancies__current-filters-list');

  $('.current-vacancies__filter').each(function () {
    const inp = $(this).find('input');
    const val = $(this).text(); // Убедитесь, что текст чист от пробелов и переносов строк

    if (inp.is(':checked')) {
      const newElem = $(
        `<li class="current-vacancies__current-filters-item">
                    <span class="current-vacancies__current-filters-text txt18">${val}</span>
                    <button class="current-vacancies__current-filters-remove-btn">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0588 6.50011L17.9982 5.43945L11.9982 11.4395L5.99816 5.43945L4.9375 6.50011L10.9375 12.5001L4.9375 18.5001L5.99816 19.5608L11.9982 13.5608L17.9982 19.5608L19.0588 18.5001L13.0588 12.5001L19.0588 6.50011ZM11.9983 11.5L10.9982 12.5001L11.9983 13.5003L12.9985 12.5001L11.9983 11.5Z" fill="#676767"/>
                        </svg>
                    </button>
                </li>`
      );
      container.append(newElem);
    }
  });
  $('.current-vacancies__filters-list-wrapper').on('click', '.current-vacancies__filter', function () {
    const inp = $(this).find('input');
    const val = $(this).text();

    const newElem = $(
      `
      <li class="current-vacancies__current-filters-item">
      <span class="current-vacancies__current-filters-text txt18">${val}</span>
      <button class="current-vacancies__current-filters-remove-btn">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.0588 6.50011L17.9982 5.43945L11.9982 11.4395L5.99816 5.43945L4.9375 6.50011L10.9375 12.5001L4.9375 18.5001L5.99816 19.5608L11.9982 13.5608L17.9982 19.5608L19.0588 18.5001L13.0588 12.5001L19.0588 6.50011ZM11.9983 11.5L10.9982 12.5001L11.9983 13.5003L12.9985 12.5001L11.9983 11.5Z"
            fill="#676767"
          />
        </svg>
      </button>
    </li>
      `
    );
    if (inp.prop('checked')) {
      container.append(newElem);
    } else {
      container.find('.current-vacancies__current-filters-item').each(function () {
        if ($(this).text().trim() === val.trim()) {
          $(this).remove();
        }
      });
    }

    if (window.innerWidth < 769) {
      modalFiltersCalc();
    }
  });

  container.on('click', '.current-vacancies__current-filters-remove-btn', function () {
    const value = $(this)
      .closest('.current-vacancies__current-filters-item')
      .find('.current-vacancies__current-filters-text')
      .text();

    $('.current-vacancies__filter').each(function () {
      if ($(this).text() === value) {
        const input = $(this).find('input');
        input.prop('checked', false);
        container.find('.current-vacancies__current-filters-item').each(function () {
          if ($(this).text().trim() === value.trim()) {
            $(this).remove();
          }
        });
      }
    });
    if (window.innerWidth < 769) {
      modalFiltersCalc();
    }
  });

  $('.current-vacancies__filters-list-btn-remove').on('click', function () {
    container.find('.current-vacancies__current-filters-item').remove();
    $('.current-vacancies__filter').each(function () {
      const input = $(this).find('input');
      input.prop('checked', false);
    });

    if ($(window).width() < 769) {
      modalFiltersCalc();
    }
  });

  window.addEventListener('resize', () => {
    if ($(window).width() < 769) {
      modalFiltersCalc();
    } else {
      $('.current-vacancies__filters-list-wrapper').css('height', ``);
    }
  });
}

function catalogSort() {
  $('.current-vacancies__dropdown').hide();
  $('.current-vacancies__list-sort-title-box').on('click', function () {
    $('.current-vacancies__list-sort').toggleClass('active');
    $('.current-vacancies__dropdown').slideToggle();
  });

  // $('.current-vacancies__list-filter').on('click', function () {
  //   $('.current-vacancies__list-sort').removeClass('active');
  //   $('.current-vacancies__dropdown').slideUp();
  // });

  $('.current-vacancies__dropdown input[type="radio"]').change(function () {
    var group = $(this).data('radio');
    var isChecked = $(this).is(':checked');
    $('.current-vacancies__filters-item-label-box input[type="radio"][data-radio="' + group + '"]').prop(
      'checked',
      isChecked
    );
  });

  // Обработка изменений для мобильных радио-инпутов
  $('.current-vacancies__filters-item-label-box input[type="radio"]').change(function () {
    var group = $(this).data('radio');
    var isChecked = $(this).is(':checked');
    $('.current-vacancies__dropdown input[type="radio"][data-radio="' + group + '"]').prop(
      'checked',
      isChecked
    );
  });
}

function catalogFilterModal() {
  const filterBtn = document.querySelector('.current-vacancies__search-filter-btn');
  const filterCloseBtn = document.querySelector('.current-vacancies__filters-title-close-svg-box');
  const filterBox = document.querySelector('.current-vacancies__filters');

  filterBtn.addEventListener('click', () => {
    filterBtn.classList.add('active');
    filterBox.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalFiltersCalc();
  });
  filterCloseBtn.addEventListener('click', () => {
    filterBtn.classList.remove('active');
    filterBox.classList.remove('active');
    document.body.style.overflow = '';
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      filterBox.classList.remove('active');
      filterBtn.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

function structuralFeaturesSwiper() {
  const swiperOurWorks = new Swiper('.structural-features__swiper', {
    slidesPerView: 1,
    // loop: true,
    allowTouchMove: false,
    // grabCursor: true,
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    navigation: {
      nextEl: '.structural-features__swiper-btn--next',
      prevEl: '.structural-features__swiper-btn--prev'
    },

    breakpoints: {}
  });
}

function additionalFeaturesSwiper() {
  const swiperOurWorks = new Swiper('.additional-features__swiper', {
    slidesPerView: 1,
    // loop: true,
    allowTouchMove: false,
    // grabCursor: true,
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    navigation: {
      nextEl: '.additional-features__swiper-btn--next',
      prevEl: '.additional-features__swiper-btn--prev'
    },

    breakpoints: {}
  });
}

function systemCncTabs() {
  const btn = document.querySelectorAll('.system-cnc__header-tab');
  const content = document.querySelectorAll('.system-cnc__content-box');
  const img = document.querySelectorAll('.system-cnc__img-box');

  btn.forEach((item, i) => {
    item.addEventListener('click', () => {
      btn.forEach((item) => item.classList.remove('active'));
      content.forEach((item) => item.classList.remove('active'));
      img.forEach((item) => item.classList.remove('active'));
      item.classList.add('active');
      img[i].classList.add('active');
      content[i].classList.add('active');
    });
  });
}

function anchorTabs(selector) {
  const btn = document.querySelectorAll(selector);

  btn.forEach((item, i) => {
    item.addEventListener('click', () => {
      btn.forEach((item) => item.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

function machineDevelopmentVideo() {
  const video = document.querySelector('.machine-development__video');
  const videoBtn = document.querySelector('.machine-development__video-play');
  videoBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play(); // Если видео на паузе, запускаем его
      videoBtn.innerHTML = `  <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.65 19.11V4.89C10.65 3.54 10.08 3 8.64 3H5.01C3.57 3 3 3.54 3 4.89V19.11C3 20.46 3.57 21 5.01 21H8.64C10.08 21 10.65 20.46 10.65 19.11Z" fill="#161717"/>
      <path d="M21.0016 19.11V4.89C21.0016 3.54 20.4316 3 18.9916 3H15.3616C13.9316 3 13.3516 3.54 13.3516 4.89V19.11C13.3516 20.46 13.9216 21 15.3616 21H18.9916C20.4316 21 21.0016 20.46 21.0016 19.11Z" fill="#161717"/>
      </svg>`;
    } else {
      video.pause(); // Если видео играет, ставим на паузу
      videoBtn.innerHTML = `  <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 11L0 21.3923L0 0.607696L18 11Z" fill="#161717" />
    </svg>`;
    }
  });
}

function machineDevelopmentSwiper() {
  const swiperOurWorks = new Swiper('.machine-development__swiper', {
    slidesPerView: 1,
    // loop: true,
    allowTouchMove: false,
    // grabCursor: true,
    speed: 1000,

    navigation: {
      nextEl: '.machine-development__swiper-btn--next',
      prevEl: '.machine-development__swiper-btn--prev'
    },

    breakpoints: {}
  });
}
function typicalSwiper() {
  const swiperOurWorks = new Swiper('.typical-swiper__swiper', {
    slidesPerView: 1,
    autoHeight: true,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    // grabCursor: true,
    speed: 1000,

    navigation: {
      nextEl: '.typical-swiper__swiper-btn--next',
      prevEl: '.typical-swiper__swiper-btn--prev'
    },

    breakpoints: {
      769: {
        autoHeight: false,
        allowTouchMove: false,
      }
    }
  });
}

function spindleUnitSwiper() {
  const swiperOurWorks = new Swiper('.spindle-unit__swiper', {
    slidesPerView: 1,
    // loop: true,
    allowTouchMove: false,
    // grabCursor: true,
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    navigation: {
      nextEl: '.spindle-unit__swiper-btn--next',
      prevEl: '.spindle-unit__swiper-btn--prev'
    },

    breakpoints: {}
  });
}

function requirementsSwiper() {
  const sliders = document.querySelectorAll('.requirements__swiper-slide');
  let rows = Math.ceil(sliders.length / 2);
  const counts = document.querySelectorAll('.requirements__swiper-slide-count');
  counts.forEach((item, i) => {
    item.textContent = (i + 1).toString().padStart(2, '0');
  });
  const swiper = new Swiper('.requirements__swiper', {
    slidesPerView: 1,
    spaceBetween: rem(2),
    grid: {
      rows: 1
    },
    navigation: {
      nextEl: '.requirements__swiper-btn--next',
      prevEl: '.requirements__swiper-btn--prev'
    },
    breakpoints: {
      769: {
        slidesPerView: 6,
        spaceBetween: 0,
        grid: {
          rows: rows
        }
      }
    }
  });
}

function specificationsTabs() {
  const tabsContainer = document.querySelector('.specifications__tabs'),
    tabs = tabsContainer.querySelectorAll('.specifications__tab'),
    blocksContaienr = document.querySelector('.specifications__body'),
    blocks = blocksContaienr.querySelectorAll('.specifications__block');

  tabsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('specifications__tab')) {
      let activeTab = e.target,
        blockName = activeTab.dataset.blockName;

      tabs.forEach((tab) => {
        tab.classList.remove('active');
      });

      activeTab.classList.add('active');

      blocks.forEach((block) => {
        if (block.classList.contains(blockName)) {
          block.classList.add('active');
          return;
        }

        block.classList.remove('active');
      });
    }
  });
}

// function specificationsBlockSlider() {
//   const blocks = document.querySelectorAll('.specifications__block');

//   blocks.forEach((block, i) => {
//     let sliderTabsContainer = block.querySelector('.specifications__block-list'),
//       sliderTabs = sliderTabsContainer.querySelectorAll('.specifications__block-item'),
//       swiper = block.querySelector('.specifications__block-swiper');

//     // const specificationsSwiper = new Swiper(swiper, {
//     //   direction: 'horizontal',
//     //   slidesPerGroup: 1,
//     //   slidesPerView: 'auto',
//     //   spaceBetween: 8,
//     //   initialSlide: 0,
//     //   // effect: 'fade',

//     //   breakpoints: {
//     //     769: {
//     //       direction: 'vertical',
//     //       slidesPerView: 1,
//     //       spaceBetween: 10,
//     //       initialSlide: 1
//     //     }
//     //   },

//     //   on: {
//     //     slideChange: function (swiper) {
//     //       let activeIndex = this.activeIndex;

//     //       sliderTabs.forEach((tab, i) => {
//     //         tab.classList.remove('active');

//     //         if (i == activeIndex) {
//     //           tab.classList.add('active');
//     //         }
//     //       });
//     //     }
//     //   }
//     // });

//     // sliderTabsContainer.addEventListener('click', (e) => {
//     //   if (e.target.classList.contains('specifications__block-item')) {
//     //     let activeTab = e.target;

//     //     sliderTabs.forEach((tab, j) => {
//     //       if (tab == activeTab) {
//     //         specificationsSwiper.slideTo(j);
//     //         tab.classList.add('active');
//     //         return;
//     //       }

//     //       tab.classList.remove('active');
//     //     });
//     //   }
//     // });
//   });
// }

function specificationsBlockSlider() {
  const blockSpecifications = document.querySelector('.specifications__block.specifications'),
    sliderTabsContainerSpecifications = blockSpecifications.querySelector('.specifications__block-list'),
    sliderTabsSpecifications = sliderTabsContainerSpecifications.querySelectorAll(
      '.specifications__block-item'
    ),
    swiperSpecifications = blockSpecifications.querySelector('.specifications__block-swiper');

  const specificationsSwiper = new Swiper(swiperSpecifications, {
    direction: 'horizontal',
    slidesPerGroup: 1,
    slidesPerView: 'auto',
    spaceBetween: 8,
    initialSlide: 0,
    // effect: 'fade',

    breakpoints: {
      769: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 10,
        initialSlide: 1
      }
    },

    on: {
      slideChange: function (swiper) {
        let activeIndex = this.activeIndex;

        sliderTabsSpecifications.forEach((tab, i) => {
          tab.classList.remove('active');

          if (i == activeIndex) {
            tab.classList.add('active');
          }
        });
      }
    }
  });

  sliderTabsContainerSpecifications.addEventListener('click', (e) => {
    if (e.target.classList.contains('specifications__block-item')) {
      let activeTab = e.target;

      sliderTabsSpecifications.forEach((tab, j) => {
        if (tab == activeTab) {
          specificationsSwiper.slideTo(j);
          tab.classList.add('active');
          return;
        }

        tab.classList.remove('active');
      });
    }
  });

  const blockModes = document.querySelector('.specifications__block.modes'),
    sliderTabsContainerModes = blockModes.querySelector('.specifications__block-list'),
    sliderTabsModes = sliderTabsContainerModes.querySelectorAll('.specifications__block-item'),
    swiperModes = blockModes.querySelector('.specifications__block-swiper');

  const modesSwiper = new Swiper(swiperModes, {
    direction: 'horizontal',
    slidesPerGroup: 1,
    slidesPerView: 'auto',
    spaceBetween: 8,
    initialSlide: 0,
    // effect: 'fade',

    breakpoints: {
      769: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 10,
        initialSlide: 0
      }
    },

    on: {
      slideChange: function (swiper) {
        let activeIndex = this.activeIndex;

        sliderTabsModes.forEach((tab, i) => {
          tab.classList.remove('active');

          if (i == activeIndex) {
            tab.classList.add('active');
          }
        });
      }
    }
  });

  sliderTabsContainerModes.addEventListener('click', (e) => {
    if (e.target.classList.contains('specifications__block-item')) {
      let activeTab = e.target;

      sliderTabsModes.forEach((tab, j) => {
        if (tab == activeTab) {
          modesSwiper.slideTo(j);
          tab.classList.add('active');
          return;
        }
        tab.classList.remove('active');
      });
    }
  });

  const sliders = document.querySelectorAll('.specifications__characteristics-swiper-slide');
  let rows = Math.ceil(sliders.length / 2);
  const swiper = new Swiper('.specifications__characteristics-swiper', {
    slidesPerView: 'auto',
    spaceBetween: rem(2),
    grid: {
      rows: 1
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        spaceBetween: 0,
        grid: {
          rows: rows
        }
      }
    }
  });
}

function configuratorHeroSwiper() {
  const swiperOurWorks = new Swiper('.configurator-hero__swiper', {
    slidesPerView: 1.2,
    spaceBetween: rem(5),
    // loop: true,
    // allowTouchMove: false,
    grabCursor: true,
    speed: 1000,

    navigation: {
      nextEl: '.configurator-hero__swiper-btn--next',
      prevEl: '.configurator-hero__swiper-btn--prev'
    },

    breakpoints: {
      769: {
        slidesPerView: 1
        // effect: 'fade',
        // fadeEffect: {
        //   crossFade: true
        // }
      }
    }
  });
}

function configurationTypeTabs() {
  const btn = document.querySelectorAll('.configuration-type__label');
  const content = document.querySelectorAll('.configuration-type__info-box');
  const img = document.querySelectorAll('.configuration-type__img-box');

  btn.forEach((item, i) => {
    item.addEventListener('click', () => {
      btn.forEach((item) => item.classList.remove('active'));
      content.forEach((item) => item.classList.remove('active'));
      img.forEach((item) => item.classList.remove('active'));
      item.classList.add('active');
      img[i].classList.add('active');
      content[i].classList.add('active');
    });
  });
}

function priceBottomMeny() {
  const header = document.querySelector('.price-bottom-menu');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.body.offsetHeight;

  const fromTop = window.innerWidth > 768 ? 100 : 0;
  const fromBottom = window.innerWidth > 768 ? 500 : 1500;

  if (scrollPosition >= fromTop) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }

  if (windowHeight + scrollPosition >= docHeight - fromBottom) {
    header.classList.remove('active');
  }
}

function configurationRange() {
  const container = document.querySelector('.configurator-spindle-unit__range');
  const slider = container.querySelector('.configurator-spindle-unit__range-input');
  const thumb = container.querySelector('.configurator-spindle-unit__range-thumb');
  // const tooltip = container.querySelector('.configurator-spindle-unit__range-tooltip');
  const progress = container.querySelector('.configurator-spindle-unit__range-progress');
  const textMin = container.querySelector('.configurator-spindle-unit__range-text--min');
  const textMax = container.querySelector('.configurator-spindle-unit__range-text--max');

  function customSwiper() {
    const maxVal = slider.getAttribute('max');
    const minVal = slider.getAttribute('min');

    const val = `${((slider.value - minVal) / (maxVal - minVal)) * 98}%`;

    // tooltip.querySelector('span').textContent = slider.value;
    progress.style.width = val;
    thumb.style.left = val;

    console.log(slider.value);

    if (slider.value == 1) {
      $('.configurator-spindle-unit__range-text--min').addClass('active');
      $('.configurator-spindle-unit__range-text--max').removeClass('active');
    } else {
      $('.configurator-spindle-unit__range-text--min').removeClass('active');
      $('.configurator-spindle-unit__range-text--max').addClass('active');
    }

    // if (slider.value >= maxVal - 5500) {
    //   tooltip.style.left = 'unset';
    //   tooltip.style.right = '0';
    //   tooltip.style.transform = 'translate(0%, 100%)';
    //   textMax.style.opacity = '0';
    // } else if (slider.value <= +minVal + 5500) {
    //   textMin.style.opacity = '0';
    //   tooltip.style.left = '0';
    //   tooltip.style.right = 'unset';
    //   tooltip.style.transform = 'translate(0, 100%)';
    // } else {
    //   tooltip.style.left = '50%';
    //   tooltip.style.right = 'unset';
    //   tooltip.style.transform = 'translate(-50%, 100%)';
    //   textMax.style.opacity = '1';
    //   textMin.style.opacity = '1';
    // }
  }
  customSwiper();
  slider.addEventListener('input', customSwiper);

  const btn = document.querySelector('.configurator-spindle-unit__schedule-btn');
  const schedule = document.querySelector('.configurator-spindle-unit__schedule-img-wrapper');

  $(schedule).hide();
  btn.addEventListener('click', () => {
    $(schedule).slideToggle();
  });
}

function animBlocks() {
  gsap.utils.toArray('.item').forEach(function (elem) {
    ScrollTrigger.create({
      trigger: elem,
      animation: gsap.from(elem, {
        keyframes: {
          '0%': { scale: 0.9 },
          '40%': { scale: 1 },
          '100%': { scale: 1 }
        }
      }),
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      toggleActions: 'play none reverse none'
    });
  });
}

function burgerLk() {
  const trigger = document.querySelector('.lk__title-box');
  const closeBtn = document.querySelector('.lk__nav-mob-burger');
  const menu = document.querySelector('.lk__nav-wrapper');

  trigger.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = '';
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

function lkTabs() {
  const btnsDesk = document.querySelectorAll('.lk-create__btn-box--desktop .lk-create__btn');
  const btnsMob = document.querySelectorAll('.lk-create__btn-box--mobile .lk-create__btn');

  const forms = document.querySelectorAll('.lk-create__form');
  const top = document.querySelector('.lk-create__btn-top');
  const bottom = document.querySelector('.lk-create__btn-bottom');

  btnsDesk.forEach((item, i) => {
    item.addEventListener('click', () => {
      btnsDesk.forEach((btn) => {
        btn.classList.remove('active');
      });
      forms.forEach((form) => {
        form.classList.remove('active');
      });
      btnsMob.forEach((btn) => {
        btn.classList.remove('active');
      });
      item.classList.add('active');
      forms[i].classList.add('active');
      btnsMob[i].classList.add('active');
      top.querySelector('span').textContent = item.textContent;
    });
  });

  btnsMob.forEach((item, i) => {
    item.addEventListener('click', () => {
      btnsMob.forEach((btn) => {
        btn.classList.remove('active');
      });
      btnsDesk.forEach((btn) => {
        btn.classList.remove('active');
      });
      forms.forEach((form) => {
        form.classList.remove('active');
      });
      btnsDesk[i].classList.add('active');
      item.classList.add('active');
      forms[i].classList.add('active');
      $(bottom).slideToggle();

      top.querySelector('span').textContent = item.textContent;
    });
  });

  top.addEventListener('click', () => {
    $(bottom).slideToggle();
    $(this).toggleClass('active');
  });
}

function additionalFeaturesMinSwiper() {
  const swiperOurWorks = new Swiper('.additional-features-min__swiper', {
    slidesPerView: 1,
    spaceBetween: rem(5),
    loop: true,
    grabCursor: true,
    speed: 1000,
    autoHeight: true,

    navigation: {
      nextEl: '.additional-features-min__swiper-btn--next',
      prevEl: '.additional-features-min__swiper-btn--prev'
    },

    breakpoints: {
      769: {
        slidesPerView: 3,
        autoHeight: false
      }
    }
  });
}
