// import popup from '../utils/popup';
// import form from '../utils/form';
import 'inputmask';
window.$ = window.jQuery = require('jquery');


export const modules = {};

document.addEventListener('DOMContentLoaded', () => {
  try {
    dropdown();
  } catch {}
  try {
    portfolioTabs();
  } catch {}
  try {
    phoneMask();
  } catch {}

});

function dropdown() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    const dropdownLink = dropdown.querySelector('.header__nav-item-link-wrapper');
    const dropdownServisesContent = dropdown.querySelector('.header__dropdown-services');

    $(dropdownServisesContent).hide();

    function dropdownClick() {
      dropdown.classList.toggle('active');
      $(dropdownServisesContent).slideToggle();
    }

    function showContent() {
      if (window.innerWidth < 768) {
        // $(dropdownServisesContent).hide();
        dropdownLink.addEventListener('click', dropdownClick);
        dropdown.classList.remove('active');
      } else {
        $(dropdownServisesContent).hide();
        dropdownLink.removeEventListener('click', dropdownClick);
      }
    }

    showContent();
    window.addEventListener('resize', showContent);
  });

  const burger = document.querySelector('.header__mob-burger');
  const headerInner = document.querySelector('.header__inner');
  const logoText = document.querySelector('.header__logo-bottom-text');
  const logoBox = document.querySelector('.header__logo-box');

  burger.addEventListener('click', () => {
    if (!burger.classList.contains('active')) {
      burger.classList.add('active');
      headerInner.classList.add('active');
      document.body.style.overflow = 'hidden';
      logoText.classList.add('active');
      logoBox.classList.add('active');
    } else {
      headerInner.classList.remove('active');
      burger.classList.remove('active');
      document.body.style.overflow = '';
      logoText.classList.remove('active');
      logoBox.classList.remove('active');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      headerInner.classList.remove('active');
      burger.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

function portfolioTabs() {
  const tabs = document.querySelectorAll('.portfolio-tabs__tabs-item');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((tab) => {
        tab.classList.remove('active');
      });
      tab.classList.add('active');
    });
  });
}

function phoneMask ()  {
    const mask = new Inputmask('+7 (999) 999 99 99');
    mask.mask($('.phone-mask'));
}

