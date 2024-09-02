import $ from "jquery";
import Swiper from 'swiper';
import {
    EffectCreative,
    Autoplay
} from "swiper/modules";
import "jquery-ui/ui/effect";
import { rem } from '../utils/constants';


const swiper = new Swiper('.main-map_swiper', {
    modules: [EffectCreative, Autoplay],
    allowTouchMove: false,
    grabCursor: false,
    loop: true,
    effect: "creative",
    autoplay: {
        delay: 5000,
    },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
});