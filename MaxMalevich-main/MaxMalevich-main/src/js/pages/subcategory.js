import $ from "jquery";
import Swiper from "swiper";
import {
	Navigation,
	Pagination,
	Autoplay,
	EffectFade,
	EffectCoverflow,
	Thumbs,
	EffectCreative,
	Mousewheel,
} from "swiper/modules";

function remToPx(remValue) {
    // Получаем текущий базовый размер шрифта (font-size) из элемента <html>
    var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Переводим значение из rem в px
    var pxValue = remValue * htmlFontSize;

    // Округляем значение до целых пикселей (по желанию)
    return Math.round(pxValue) + 'px';
}

function btnSwiper (subcategoryMin, subcategoryBig) {
    $(".subcategory-more__box--prev").on("click", function () {
        if(!subcategoryMin.length) {
            subcategoryMin.slidePrev();
            subcategoryBig.slidePrev();
        } else {
            const index = $(".subcategory-more__box--prev").index(this)
            subcategoryMin[index].slidePrev();
            subcategoryBig[index].slidePrev();
        }
    });
    $(".subcategory-more__box--next").on("click", function () {
        if(!subcategoryMin.length) {
            subcategoryMin.slideNext();
            subcategoryBig.slideNext();
        } else {
            const index = $(".subcategory-more__box--next").index(this)
            subcategoryMin[index].slideNext();
            subcategoryBig[index].slideNext();
        }
    });
}

$('.subcategory-more__container').each(function(index){
    $(this).find('.subcategory-more__box--swiper')[0]
    const subcategoryMin = new Swiper($(this).find('.subcategory-more__box--swiper')[0], {
        modules: [Navigation, Pagination],
        speed: 2000,
        slidesPerView: 1,
        loop: true,
        spaceBetween: `${remToPx(4.8)}rem`,
        allowTouchMove: true,
        breakpoints: {
            1201: {
                slidesPerView: 4,
                allowTouchMove: false,
            },
        },
        pagination: {
            el: $(this).find('.subcategory-more__box--nav')[0],
        },
        debugger: true,
    });
    const subcategoryBig = new Swiper($(this).find('.subcategory-more__main')[0], {
        modules: [Navigation, Pagination],
        speed: 2000,
        slidesPerView: 1,
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: `${remToPx(4.8)}rem`,
        allowTouchMove: false,
    });
    $(this).find(".subcategory-more__box--prev").on("click", function () {
        subcategoryMin.slidePrev();
        subcategoryBig.slidePrev();
    });
    $(this).find(".subcategory-more__box--next").on("click", function () {
        subcategoryMin.slideNext();
        subcategoryBig.slideNext();
    });
})
