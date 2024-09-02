import Swiper from 'swiper';

window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.areas')) {
    areasTabs();
    areasBlockSlider();
  }
});

const areasTabs = () => {
  const tabsContainer = document.querySelector('.areas__tabs'),
    tabs = tabsContainer.querySelectorAll('.areas__tab'),
    blocksContaienr = document.querySelector('.areas__body'),
    blocks = blocksContaienr.querySelectorAll('.areas__block');

  tabsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('areas__tab')) {
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
};

const areasBlockSlider = () => {
  const blocks = document.querySelectorAll('.areas__block');

  blocks.forEach((block, i) => {
    let sliderTabsContainer = block.querySelector('.areas__block-list'),
      sliderTabs = sliderTabsContainer.querySelectorAll('.areas__block-item'),
      sliderNavigationBtns = block.querySelector('.areas__navigation'),
      swiper = block.querySelector('.areas__block-swiper');
      sliderTabs[0].classList.add('active')

    const areasSwiper = new Swiper(swiper, {
      direction: 'horizontal',
      slidesPerGroup: 1,
      slidesPerView: 1.1,
      spaceBetween: 8,
      initialSlide: 0,
      // effect: 'fade',

      breakpoints: {
        768: {
          direction: 'vertical',
          slidesPerView: 1,
          spaceBetween: 10,
          initialSlide: 0,
        }
      },

      navigation: {
        nextEl: sliderNavigationBtns.querySelector('.swiper-button-next'),
        prevEl: sliderNavigationBtns.querySelector('.swiper-button-prev')
      },

      on: {
        slideChange: function (swiper) {
          let activeIndex = this.activeIndex;

          sliderTabs.forEach((tab, i) => {
            tab.classList.remove('active');

            if (i == activeIndex) {
              tab.classList.add('active');
            }
          });
        }
      }
    });

    sliderTabsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('areas__block-item')) {
        let activeTab = e.target;

        sliderTabs.forEach((tab, j) => {
          if (tab == activeTab) {
            areasSwiper.slideTo(j);
            tab.classList.add('active');
            return;
          }

          tab.classList.remove('active');
        });
      }
    });
  });
};
