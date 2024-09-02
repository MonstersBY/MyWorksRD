import $ from "jquery";
import Swiper from 'swiper';
import {
	Pagination,
	Navigation,
	Grid
} from "swiper/modules";
import { rem } from '../utils/constants';

const services_all_switcher = new Swiper('.services-all_switcher', {
	modules: [Navigation],
	slidesPerView: 1,
	spaceBetween: rem(3.2),
	navigation: {
        nextEl: ".services-all_switcher-right",
        prevEl: ".services-all_switcher-left",
    },
	breakpoints: {
		769: {
			slidesPerView: 'auto',
		},
	},
});

if (window.screen.width < 769) {
	const swiper_injections_swiper = new Swiper('.services-all_block--injections_swiper', {
		modules: [Pagination,Grid],
		slidesPerView: 1,
		spaceBetween: rem(1.2),
		grid: {
		  rows: 2,
		},
        pagination: {
            el: ".services-all_block--injections_pagination",
        },
	});
	const swiper_procedure_swiper = new Swiper('.services-all_block--procedure_swiper', {
		modules: [Pagination,Grid],
		slidesPerView: 1,
		spaceBetween: rem(1.2),
		grid: {
		  rows: 2,
		},
        pagination: {
            el: ".services-all_block--procedure_pagination",
        },
	});
}

$('.services-all_open').on('click', function(){
    $('.services-all_list--hidden').slideToggle(2000)
	$('.services-all_close').css('display','flex')
	$(this).css('display','none')
})
$('.services-all_close').on('click', function(){
    $('.services-all_list--hidden').slideToggle(2000)
	$('.services-all_open').css('display','flex')
	$(this).css('display','none')
})
