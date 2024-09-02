import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function advantages () {
    const advantagesSwiper = new Swiper('.advantages__swiper', {
        slidesPerView: 1.15,
        slidesPerGroup: 1,
        spaceBetween: 21,
    
        breakpoints: {
          768: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        },
    
        navigation: {
          prevEl: '.advantages__swiper-navigation--left',
          nextEl: '.advantages__swiper-navigation--right'
        }
      });
}


  export default advantages