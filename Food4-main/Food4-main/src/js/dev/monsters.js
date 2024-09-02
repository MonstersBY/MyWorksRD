import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { rem } from '../utils/constants';

document.addEventListener('DOMContentLoaded', () => {
    Fancybox.bind('[data-fancybox]', {
        Toolbar: {
            display: {
              left: [],
              middle: [],
              right: ['close'],
            },
            items: {
                close: {
                    tpl: '<svg data-fancybox-close width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="81" height="81" rx="40.5" fill="white" fill-opacity="0.3" stroke="white"/><path d="M32.5 32L41.5 41M41.5 41L32.5 50M41.5 41L50.5 32M41.5 41L50.5 50" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                },
            },
        },
        on: {
            init: function () {
                $(".fancybox-bg").fadeIn();
            },
            close: function () {
                $(".fancybox-bg").fadeOut();
            },
        },
    });
    $(".fancybox-bg").on("click", function () {
        Fancybox.close();
    });
})