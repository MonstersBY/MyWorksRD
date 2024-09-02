import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import $ from 'jquery';

import { rem } from '../utils/constants';

document.addEventListener('DOMContentLoaded', () => {
  $('.switcher__btn').on('click', function (evt) {
    evt.preventDefault();
    let $this = $(this);
    let index = $this.index();
    let $switcher = $this.closest('.switcher');
    let $switcher_container = $switcher.find('.switcher__container');
    let $switcher_contents = $switcher_container.find('.switcher__content');
    $this.siblings('.switcher__btn').removeClass('active');
    $this.addClass('active');
    $switcher_contents.removeClass('active');
    $($switcher_contents[index]).addClass('active');
  });
  $('.benchs__desk-img').on('click', function (evt) {
    evt.preventDefault();
    let $this = $(this);
    let index = $this.index();
    let $switcher = $this.closest('.benchs__desk-container');
    let $switcher_container = $switcher.find('.benchs__desk-center');
    let $switcher_contents = $switcher_container.find('.benchs__desk-big');
    $this.siblings('.benchs__desk-img').removeClass('active');
    $this.addClass('active');
    $switcher_contents.removeClass('active');
    $($switcher_contents[index]).addClass('active');
  });

  const benchs__btns = document.querySelector('.benchs.lk')
    ? null
    : new Swiper('.benchs__btns', {
        slidesPerView: 'auto',
        spaceBetween: rem(1.2),
        navigation: {
          nextEl: '.benchs__swiper--right',
          prevEl: '.benchs__swiper--left'
        }
      });

  $('.benchs__mob-selector--top').on('click', function () {
    $('.benchs__mob-selector--bottom').slideToggle();
    $(this).toggleClass('active');
  });
  $('.benchs__mob-selector--item').on('click', function () {
    $('.benchs__mob-selector--item').removeClass('active');
    $(this).addClass('active');
    $('.benchs__mob-selector--top').removeClass('active');
    let index = $(this).index();
    $('.benchs__mob-selector--top').find('span').text($(this).text());
    $('.benchs__mob-content').removeClass('active');
    $($('.benchs__mob-content')[index]).addClass('active');
    // Swithc ADD!
    $('.benchs__mob-selector--bottom').slideToggle();
  });

  const benchs__mob_swiper = new Swiper('.benchs__mob-swiper', {
    slidesPerView: 1
  });

  if (document.querySelector('.benchs.lk')) {
    const containers = document.querySelectorAll('.benchs__desk-right');

    containers.forEach((container) => {
      const photos = container.querySelectorAll('.benchs__desk-img'),
        bigPhotos = container.previousElementSibling.querySelectorAll('.benchs__desk-big'),
        nextPhotoBtn = container.querySelector('.benchs__desk-next-photo');

      let activeIndex = 0;

      nextPhotoBtn.addEventListener('click', () => {
        photos.forEach((photo, i) => {
          if (photo.classList.contains('active')) {
            activeIndex = i + 1;
          }

          if (photo.classList.contains('active') && i == photos.length - 1) {
            activeIndex = 0;
          }

          photo.classList.remove('active');
        });

        bigPhotos.forEach((photo) => photo.classList.remove('active'));

        photos[activeIndex].classList.add('active');
        bigPhotos[activeIndex].classList.add('active');
      });
    });
  }
});
