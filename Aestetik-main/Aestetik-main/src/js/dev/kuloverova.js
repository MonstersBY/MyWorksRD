window.$ = window.jQuery = require('jquery');

import popup from '../utils/popup';
import form from '../utils/form';
import { gsap, ScrollTrigger } from 'gsap/all';
export const modules = {};
import Swiper from 'swiper';
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  try {
    popup();
  } catch {}
  try {
    form();
  } catch {}
  try {
    scroll();
  } catch {}
  try {
    equipment();
  } catch {}
  try {
    animMainSpace();
  } catch {}
});

window.addEventListener('load', function () {
  try {
    intro();
  } catch {}
});

function intro() {
  const preloader = document.querySelector('.preloader');
  const video = preloader.querySelector('video');
  video.style.transition = 'opacity 0.8s';
  setTimeout(() => {
    video.style.opacity = '1';
    video.play();
  }, 300);
  setTimeout(() => {
    preloader.classList.add('preloader-remove');
  }, 3500);
}

function animMainSpace() {
  let number = 0
  if (window.innerWidth > 768) {
    $('.main-space_img').each(function( index ) {
      if(index > 2) {
        number += $('.main-space_img').width()
      }
    })
  } else {
    $('.main-space_img').each(function( index ) {
      number += $('.main-space_img').width()
    })
  }
  const elem = document.querySelector('.main-space_list');
  const section = document.querySelector('.main-space');
  ScrollTrigger.create({
    trigger: section,
    animation: gsap.from(elem, {
      keyframes: {
        '0%': { x: '=0' },
        '100%': { x: `-=${number}` }
      }
    }),
    start: 'top bottom',
    end: 'bottom top',
    scrub: 2,
    toggleActions: 'play none reverse none'
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

function equipment() {
  let swiper = new Swiper('.equipment-detail_btns-swiper', {
   
    slidesPerView: 'auto',
  });
}

// Пример использования для одного элемента
