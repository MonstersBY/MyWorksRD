import $ from "jquery";
import Swiper from 'swiper';
import {
	Pagination,
    Navigation,
    Mousewheel
} from "swiper/modules";
import "jquery-ui/ui/effect";
import { rem } from '../utils/constants';

$('.header-burger').on('click', function(){
    $('.header').toggleClass('open')
    $('body').toggleClass('scrollnone')
})

$('.show-more').on('click', function(){
    const $content = $(this).closest('.show-content').find('.show-text')
    // console.log($content);

    if($content.hasClass('hideContent')){
        $content.switchClass("hideContent", "showContent", 400);
    } else {
        $content.switchClass("showContent", "hideContent", 400);
    };
})

$('.main-space_box--more').on('click', function(){
    $('.main-space_box').toggleClass('active')
})

$('.main-cosmetics_block').on('mouseenter', function(){
    $('.main-cosmetics_block').removeClass('active')
    $('.main-cosmetics_item').removeClass('active')
    $(this).addClass('active')
    $($('.main-cosmetics_item')[$(this).closest('.swiper-slide').index()]).addClass('active')
})


if($('.main-equipment').length) {
    $('.main-equipment').find('.btn-blue').attr("href", $('.main-equipment_swiper').find('.main-equipment_container')[0].getAttribute('data-href'))
}
const main_equipment_swiper = new Swiper('.main-equipment_swiper', {
    modules: [Pagination, Mousewheel],
	spaceBetween: rem(10),
    // autoHeight: true,
    mousewheel: {
        enabled: true,
        releaseOnEdges: true,
    },
    pagination: {
        el: ".main-equipment_pagin",
    },
    speed: 300,
    breakpoints: {
        769: {
            speed: 2500,
        },
    },
    on: {
        slideChange: function(e) {
            if (window.innerWidth > 768) {
                setTimeout(function () {
                    main_equipment_swiper.params.mousewheel.releaseOnEdges = false;
                }, 500);
            }
            $('.main-equipment').find('.btn-blue').attr("href", $('.main-equipment_swiper').find('.main-equipment_container')[e.activeIndex].getAttribute('data-href'))
        },
        reachEnd: function() {
            if (window.innerWidth > 768) {
                setTimeout(function () {
                    main_equipment_swiper.params.mousewheel.releaseOnEdges = true;
                }, 750);
            }
        },
        reachBeginning: function() {
            if (window.innerWidth > 768) {
                setTimeout(function () {
                    main_equipment_swiper.params.mousewheel.releaseOnEdges = true;
                }, 750);
            }
        },
        slideChangeTransitionStart: function (swiper) {
            if (window.innerWidth > 768) {
                if ((swiper.activeIndex == 0) || (swiper.activeIndex == swiper.slides.length - 1)) {
                    centeredBlock(0);
                } else {
                    centeredBlock(500);
                }
            }

        }
    }
    
});
function centeredBlock(speed) {
    $('html, body').animate({
        scrollTop: $('.main-equipment').offset().top - 0
    }, speed);
}

$('.main-equipment_container-box_swiper').each(function( index ) {
    new Swiper(this, {
        modules: [Navigation],
        slidesPerView: 'auto',
        navigation: {
            nextEl: $(this).siblings(".main-equipment_container-box_swiper-right")[0],
            prevEl: $(this).siblings(".main-equipment_container-box_swiper-left")[0],
        },
    });
});


if (window.screen.width < 769) {
    const swiper = new Swiper('.main-cosmetics_swiper', {
        modules: [Pagination],
        pagination: {
            el: ".main-cosmetics_pagination",
        },
    });
}
