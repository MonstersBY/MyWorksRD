import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import { rem } from '../utils/constants';

document.addEventListener('DOMContentLoaded', () => {
  setOurClientsSwiper();
  // initMap()
});

// -------------------------------- Sliders
function setOurClientsSwiper() {
  const ourClients = new Swiper('.our-clients__swiper', {
    slidesPerView: 1,
    spaceBetween: rem(0.5),
    // loop: true,
    navigation: {
      nextEl: '.our-clients__pagination-btn-next',
      prevEl: '.our-clients__pagination-btn-prev'
    },
    breakpoints: {
      768: {
          slidesPerView: 1.38,
          spaceBetween: 0
      }
  }
  });
}


//---------------------------------- Map 
// async function initMap() {
//   // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
//   if (typeof ymaps3 !== 'undefined') {
//       await ymaps3.ready;
//       const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

//       // Initialize the map
//       let map = new YMap(
//           // Pass the link to the HTMLElement of the container
//           document.getElementById('contacts-map'),
//           // Pass the map initialization parameters
//           {
//               location: {
//                   // Координаты центра карты
//                   center: [37.628144, 55.733842],

//                   // Уровень масштабирования
//                   zoom: 12
//               }
//           },
//           [
//               // Add a map scheme layer
//               new YMapDefaultSchemeLayer({}),
//               // Add a layer of geo objects to display the markers
//               new YMapDefaultFeaturesLayer({})
//           ]
//       );

//       // Create markers with a custom icon and add them to the map

//       const markerElement = document.createElement('img');
//       markerElement.className = 'contacts__map-icon';
//       markerElement.src = '../../assets/images/map-icon.svg';
//       map.addChild(new YMapMarker({ coordinates: [37.588144, 55.733842] }, markerElement));
//   }
// }