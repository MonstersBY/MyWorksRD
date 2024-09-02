import $ from "jquery";
import Swiper from 'swiper';
import {
	Pagination,
} from "swiper/modules";
import { rem } from '../utils/constants';

if (window.screen.width < 769) {
	const swiper_injections_swiper = new Swiper('.certificates-info_swiper', {
		modules: [Pagination],
		slidesPerView: 1,
		spaceBetween: rem(1.2),
        pagination: {
            el: ".certificates-info_pagination",
        },
	});
}

