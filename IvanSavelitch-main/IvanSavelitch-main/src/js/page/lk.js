import $ from "jquery";
import Swiper from 'swiper';
import { rem } from '../utils/constants';

$(".lk-sidebar_box-top").on("click", function() {
    $(this).toggleClass('active')
    $(this).siblings('.lk-sidebar_box-bottom').slideToggle("slow")
});

const lkPurchases = new Swiper('.lk-container_purchases-item--swiper', {
    slidesPerView: 'auto',
    spaceBetween: rem(3),

    breakpoints: {
      768: {
        spaceBetween: (20),
      }
    },
});