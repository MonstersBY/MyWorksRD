import { rem } from '../utils/constants';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  initMap();
  setCertificatesSlider();
  setDocsTab();
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 769) {
    setDocsTab();
  }
});

// MAPS ----------------------------------------------------------------
async function initMap() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  if (typeof ymaps3 !== 'undefined') {
    await ymaps3.ready;
    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

    // Initialize the map
    let map = new YMap(
      // Pass the link to the HTMLElement of the container
      document.getElementById('contacts-map'),
      // Pass the map initialization parameters
      {
        location: {
          // Координаты центра карты
          center: [37.628144, 55.733842],

          // Уровень масштабирования
          zoom: 13
        }
      },
      [
        // Add a map scheme layer
        new YMapDefaultSchemeLayer({}),
        // Add a layer of geo objects to display the markers
        new YMapDefaultFeaturesLayer({})
      ]
    );

    // Create markers with a custom icon and add them to the map

    const markerElement = document.createElement('img');
    markerElement.className = 'map__icon';
    markerElement.src = '../../assets/images/map-icon.svg';
    map.addChild(new YMapMarker({ coordinates: [37.628144, 55.733842] }, markerElement));
  }
}

// SLIDERS -------------------------------------------------------------
function setCertificatesSlider() {
  const certificatesSlider = new Swiper('.certificates__swiper', {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    speed: 300,
    navigation: {
      nextEl: '.certificates__btn--next',
      prevEl: '.certificates__btn--prev'
    },

    breakpoints: {
      768: {
        slidesPerView: 3
      }
    }
  });
}

// TAB -----------------------------------------------------------------
function setDocsTab() {
  let hiddenItems = document.querySelectorAll('.docs__item:nth-child(n+5)');
  let showMoreBtn = document.querySelector('.docs__btn');

  let isExpanded = false;

  if (window.innerWidth >= 769) {
    return;
  }

  function toggleButtonText() {
    if (isExpanded) {
      showMoreBtn.textContent = 'Скрыть';
    } else {
      showMoreBtn.textContent = 'Показать еще';
    }
  }

  hiddenItems.forEach(function (item) {
    item.style.display = 'none';
  });

  if (!showMoreBtn) {
    return;
  }

  showMoreBtn.addEventListener('click', function () {
    isExpanded = !isExpanded;
    hiddenItems.forEach(function (item) {
      item.style.display = isExpanded ? 'flex' : 'none';
    });
    toggleButtonText();
  });

  toggleButtonText();
}
