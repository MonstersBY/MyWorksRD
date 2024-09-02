import $ from "jquery";
import Swiper from 'swiper';
import {
	Pagination,
	Navigation,
	Grid,
    Virtual,
    Autoplay
} from "swiper/modules";
import { rem } from '../utils/constants';


if (window.screen.width < 769) {
    const choose_swiper = new Swiper('.choose_swiper', {
        modules: [Pagination, Grid],
        grid: {
            rows: 3,
        },
        slidesPerView: 1,
        spaceBetween: rem(4),
        pagination: {
            el: ".choose_pagination",
        },
    });
} else {
    const choose_swiper = new Swiper('.choose_swiper', {
        modules: [Virtual, Autoplay],
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: rem(6.5),
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
}