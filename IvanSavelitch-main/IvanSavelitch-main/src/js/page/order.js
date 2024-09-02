import $ from "jquery";
import "jquery-ui/ui/widgets/selectmenu";
import Swiper from 'swiper';
import { rem } from '../utils/constants';

$(".cart-order_top").on("click", function() {
    $(this).toggleClass('active')
    $(this).siblings('.cart-order_bottom').slideToggle("slow")
});

$( ".form_input-select").find('select').selectmenu();

const cartInfoSwiper = new Swiper('.cart__info-swiper', {
    slidesPerView: 'auto',
    spaceBetween: rem(3),

    breakpoints: {
      768: {
        spaceBetween: (20),
      }
    },
});