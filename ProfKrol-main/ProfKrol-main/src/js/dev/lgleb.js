import Swiper from 'swiper';

window.addEventListener('DOMContentLoaded', () => {
  Swipers();

  if (document.querySelector('.production') && window.screen.width > 768) {
    productionTabsDesktop();
  }

  if (document.querySelector('.production') && window.screen.width <= 768) {
    productionTabsMobile();
  }

  document.querySelector('.contacts__accordion') && window.screen.width > 768 && contactsAccordion();

  if (document.querySelector('.contacts__employees-modal') && window.screen.width <= 768) {
    const modals = [
        document.querySelector('.contacts__employees-modal'),
        document.querySelector('.contacts__company-modal')
      ],
      openBtns = [
        document.querySelector('.contacts__btn-company--open'),
        document.querySelector('.contacts__btn-employees--open')
      ],
      closeBtns = [
        document.querySelector('.contacts__employees-modal--close'),
        document.querySelector('.contacts__company-modal--close')
      ];

    modals.forEach((modal, i) => {
      contactsMobilePopup(modal, openBtns[i], closeBtns[i]);
    });
  }
});

const productionTabsDesktop = () => {
  const list = document.querySelector('.production__list'),
    tabsContainer = document.querySelector('.production__list'),
    tabs = document.querySelectorAll('.production__item'),
    imagesContainer = document.querySelector('.production__images'),
    images = imagesContainer.querySelectorAll('.production__images-item'),
    initialTabHeight = tabs[0].clientHeight;

  let isBlockInit = false;

  if (!isBlockInit) {
    tabs.forEach((tab) => {
      if (tab.classList.contains('active')) {
        tab.style.maxHeight = `${tab.scrollHeight}px`;
      }
    });

    console.log(list.scrollHeight, list.clientHeight);

    list.scrollHeight > list.clientHeight - 10
      ? list.classList.add('with-scroll')
      : list.classList.remove('with-scroll');

    isBlockInit = true;
  }

  tabsContainer.addEventListener('click', (e) => {
    let target = e.target,
      targetParent = target.closest('.production__item');

    if (target.classList.contains('production__item-title')) {
      images.forEach((img) => {
        img.classList.remove('active');
      });

      tabs.forEach((tab, i) => {
        if (targetParent == tab) {
          console.log(images[i]);
          images[i].classList.add('active');
        }

        tab.classList.remove('active');
        tab.style.maxHeight = `${initialTabHeight}px`;
      });

      targetParent.classList.add('active');
      targetParent.style.maxHeight = `${targetParent.scrollHeight}px`;
    }

    targetParent &&
      targetParent.addEventListener('transitionend', () => {
        list.scrollHeight > list.clientHeight
          ? list.classList.add('with-scroll')
          : list.classList.remove('with-scroll');
      });
  });
};

const productionTabsMobile = () => {
  const tabsContainer = document.querySelector('.production__list'),
    tabs = tabsContainer.querySelectorAll('.production__item'),
    initialTabHeight = tabs[0].clientHeight;

  tabs.forEach((tab) => {
    if (tab.classList.contains('active')) {
      tab.style.maxHeight = `${tab.scrollHeight + 40}px`;
      return;
    }
  });

  tabsContainer.addEventListener('click', (e) => {
    let target = e.target;

    if (target.classList.contains('production__item-title')) {
      let targetParent = target.closest('.production__item');

      tabs.forEach((tab) => {
        tab.classList.remove('active');
        tab.style.maxHeight = `${initialTabHeight}px`;
      });

      targetParent.classList.add('active');
      targetParent.style.maxHeight = `${targetParent.scrollHeight}px`;
    }
  });
};

const contactsAccordion = () => {
  const accordion = document.querySelector('.contacts__accordion'),
    initialHeight = accordion.querySelector('.contacts__accordion-title').clientHeight;

  accordion.addEventListener('click', (e) => {
    let target = e.target;

    if (target.classList.contains('contacts__accordion-head')) {
      accordion.classList.toggle('active');

      accordion.classList.contains('active')
        ? (accordion.style.maxHeight = `${accordion.scrollHeight}px`)
        : (accordion.style.maxHeight = `${initialHeight}px`);
    }
  });
};

const contactsMobilePopup = (modal, openBtn, closeBtn) => {
  openBtn.addEventListener('click', () => {
    modal.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    console.log('1');
    modal.classList.remove('active');
  });
};

const Swipers = () => {
  const aboutMeatSwiper = new Swiper('.about-meat__swiper', {
    slidesPerView: 1.05,
    slidesPerGroup: 1,
    allowTouchMove: true,
    spaceBetween: 16,

    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
        allowTouchMove: false
      }
    },

    navigation: {
      prevEl: '.about-meat__swiper-btn--prev',
      nextEl: '.about-meat__swiper-btn--next'
    }
  });

  const productSwiper = new Swiper('.product__swiper', {
    slidesPerView: 1,
    allowTouchMove: true,

    breakpoints: {
      768: {
        loop: true,
        slidesPerView: 3.25,
        slidesPerGroup: 1,
        allowTouchMove: false,
        spaceBetween: 20
      }
    },

    navigation: {
      prevEl: '.product__swiper-btn--prev',
      nextEl: '.product__swiper-btn--next'
    }
  });

  const similarProductsSwiper = new Swiper('.similar-products__swiper', {
    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 16,

    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },

    navigation: {
      prevEl: '.similar-products__swiper-btn--prev',
      nextEl: '.similar-products__swiper-btn--next'
    }
  });
};
