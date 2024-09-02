import $ from "jquery";
import Swiper from 'swiper';
import {
	Pagination,
	Navigation,
    EffectFade
} from "swiper/modules";
import "jquery-ui/ui/effect";
import { rem } from '../utils/constants';

demoroomList()
function demoroomList() {
    $('.demoroom-main__list').each(function() {
        $(this).css('height', '100%')
        $(this).css('height', window.innerWidth < 768 ? '100%' : ($(this).outerHeight() + ($(this).find('li').length * rem(0.8)) - rem(1.6))/2 )
    })
}
window.addEventListener('resize', demoroomList);

let demoroom_gallery__swiper
demoroomSwiper()
function demoroomSwiper() {
    const cards = document.querySelectorAll(".demoroom-gallery__slide");
    if (window.innerWidth < 768 && cards.length) {
        cards.forEach((card) => {
            card.classList.add("swiper-slide");
        });
        if (!demoroom_gallery__swiper) {
            demoroom_gallery__swiper = new Swiper('.demoroom-gallery__swiper', {
                pagination: {
                    el: ".demoroom_gallery__pagination",
                    dynamicBullets: true,
                },
            });
        } else {
            demoroom_gallery__swiper.update();
        }
    } else {
        cards.forEach((card) => {
            card.classList.remove("swiper-slide");
        });
        if(demoroom_gallery__swiper) {
            demoroom_gallery__swiper.destroy()
            demoroom_gallery__swiper = undefined;
        }
    }

}
window.addEventListener('resize', demoroomSwiper);

$('.demoroom-gallery__show-more').on('click', function(){
    const $content = $(this).siblings('.demoroom-gallery__swiper')

    if($content.hasClass('demoroom-gallery__swiper-hiden')){
        $content.switchClass("demoroom-gallery__swiper-hiden", "demoroom-gallery__swiper-show", 400);
    } else {
        $content.switchClass("demoroom-gallery__swiper-show", "demoroom-gallery__swiper-hiden", 400);
    };
})

$('.current-vacancies__link').on('click',function(){
    $('.current-vacancies__right-slide-content-box').toggleClass('open')
})
$('.vacancies-det__link').on('click',function(){
    $('.vacancies-det__content-box').toggleClass('open')
})