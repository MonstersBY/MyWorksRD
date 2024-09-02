import $ from "jquery";
import Swiper from 'swiper';
import {
	Pagination,
	Navigation,
} from "swiper/modules";
import { rem } from '../utils/constants';

const services_all_switcher = new Swiper('.action_swiper', {
	modules: [Navigation, Pagination],
	slidesPerView: 1,
	spaceBetween: rem(3.2),
	navigation: {
        nextEl: ".action_navigation-right",
        prevEl: ".action_navigation-left",
    },
    pagination: {
        el: ".action_pagination",
    },
    breakpoints: {
        769: {
            slidesPerView: 3,
        },
    },
});