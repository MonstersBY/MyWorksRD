import Swiper from 'swiper';

import '../components/areas';

window.addEventListener('DOMContentLoaded', () => {
  Swipers();

  newsDropdown();
  promotionsAcc();
  promotionBtns();

  document.querySelector('.lk__applications') && lkApplications();
});

const newsDropdown = () => {
  if (document.querySelector('.news__dropdown')) {
    const dropdown = document.querySelector('.news__dropdown'),
      selectedItem = dropdown.querySelector('.news__dropdown-selected');

    const initialHeight = dropdown.clientHeight;

    dropdown.addEventListener('click', (e) => {
      let target = e.target;

      if (target.classList.contains('news__dropdown-head')) {
        dropdown.classList.toggle('active');

        dropdown.classList.contains('active')
          ? (dropdown.style.maxHeight = `${dropdown.scrollHeight}px`)
          : (dropdown.style.maxHeight = `${initialHeight}px`);

        return;
      }

      if (target.classList.contains('news__dropdown-item')) {
        selectedItem.textContent = target.textContent;

        dropdown.classList.remove('active');
        dropdown.style.maxHeight = `${initialHeight}px`;
      }
    });
  }
};

const promotionsAcc = () => {
  if (document.querySelector('.promotions__block-acc')) {
    const accordion = document.querySelector('.promotions__block-acc'),
      accordionItems = accordion.querySelectorAll('.promotions__block-acc--point'),
      accordionImages = accordion.querySelectorAll('.promotions__block-acc--img'),
	  accordionHead = accordion.querySelectorAll('.promotions__block-acc--head'),
      initHeight = accordionItems[0].clientHeight;
    let activeIndex = 0;
	accordionItems.forEach(item => {
		if(!item.classList.contains('active')) {
			let rem = 0.005208335 * window.innerWidth * 4;
			let test = item.querySelectorAll('.promotions__block-acc--head')[0].clientHeight + rem
		  	item.style.maxHeight = `${test}px`;
		}
	});
    // accordionItems.forEach(item => {
    //   item.classList.contains('active') && (item.style.maxHeight = `${item.scrollHeight + 60}px`);
    // });
    accordion.addEventListener('click', e => {
      let target = e.target;
      if (target.classList.contains('promotions__block-acc--head')) {
        let targetParent = target.closest('.promotions__block-acc--point');
        accordionItems.forEach(item => {
			let rem = 0.005208335 * window.innerWidth * 4;
			let test = item.querySelectorAll('.promotions__block-acc--head')[0].clientHeight + rem
          item.classList.remove('active');
          item.style.maxHeight = `${test}px`;
        });
        targetParent.classList.add('active');
        targetParent.style.maxHeight = `${targetParent.scrollHeight + 40}px`;
        accordionItems.forEach((item, i) => item.classList.contains('active') && (activeIndex = i));
        accordionImages.forEach(img => img.classList.remove('active'));
        accordionImages[activeIndex].classList.add('active');
      }
    });
  }
};

const promotionBtns = () => {
  if (document.querySelector('.promotions')) {
    const btns = document.querySelectorAll('.promotions__block-right--button');

    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        if (btn.classList.contains('active')) {
          btn.textContent = 'Опция включена';
        } else {
          btn.textContent = 'Включить опцию';
        }
      });
    });

    const btnsSvg = document.querySelectorAll('.promotions__block-right--button-service');
    btnsSvg.forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
      });
    });
  }
};

const lkApplications = () => {
  if (window.screen.width > 768) {
    const tabsContainer = document.querySelector('.lk__applications-tabs.desktop'),
      tabs = tabsContainer.querySelectorAll('.lk__applications-tab'),
      lists = document.querySelectorAll('.lk__applications-list');

    let activeIndex = 0;

    tabsContainer.addEventListener('click', (e) => {
      const target = e.target;

      if (target.classList.contains('lk__applications-tab')) {
        tabs.forEach((tab, i) => {
          tab == target && (activeIndex = i);

          tab.classList.remove('active');
        });

        lists.forEach((list, i) => {
          console.log(i, activeIndex);

          i == activeIndex ? list.classList.add('active') : list.classList.remove('active');
        });

        target.classList.add('active');
      }
    });
  } else {
    const tabsContainer = document.querySelector('.lk__applications-tabs.mobile'),
      tabsList = tabsContainer.querySelector('.lk__applications-tabs--list'),
      tabsHead = tabsContainer.querySelector('.lk__applications-tabs--head'),
      tabsHeadText = tabsContainer.querySelector('.lk__applications-tabs--text'),
      tabs = tabsContainer.querySelectorAll('.lk__applications-tabs--item'),
      lists = document.querySelectorAll('.lk__applications-list'),
      initHeight = tabsContainer.clientHeight;

    let activeIndex = 0;

    tabsContainer.addEventListener('click', (e) => {
      const target = e.target;

      if (target.classList.contains('lk__applications-tabs--head')) {
        tabsContainer.classList.toggle('active');

        tabsContainer.classList.contains('active')
          ? (tabsContainer.style.maxHeight = `${tabsContainer.scrollHeight}px`)
          : (tabsContainer.style.maxHeight = `${initHeight}px`);
      }

      if (target.classList.contains('lk__applications-tabs--item')) {
        tabs.forEach((tab, i) => {
          if (tab == target) {
            activeIndex = i;

            tabsHeadText.textContent = tab.textContent;
          }

          tabsContainer.classList.remove('active');
          tabsContainer.style.maxHeight = `${initHeight}px`;
        });

        lists.forEach((list) => {
          list.classList.remove('active');
        });

        lists[activeIndex].classList.add('active');
      }
    });
  }
};

const Swipers = () => {
  if (window.screen.width <= 768) {
    const promotionMobileSwiper = new Swiper('.promotions__block-swiper', {
      slidesPerView: 1.1,
      slidesPerGroup: 1,
      spaceBetween: 8
    });
  }
};
