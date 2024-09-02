import $ from "jquery";
import "jquery-ui/ui/widgets/slider";
import "../utils/jquery.ui.touch-punch.min";
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const priceMin = 0
const priceMax = 2000
function numbCheck(slide) {
    if(slide.slider("values", 0) !== priceMin || slide.slider("values", 1) !== priceMax) {
        numbReset($(slide).closest('.catalog_filter-box').find('.catalog_filter-box--title_reset'))
    }
}
function numbReset(btn) {
    btn.addClass('active')
    btn.unbind()
    $(btn).on("click", function() {
        slider.slider('values', 0, priceMin);
        slider.slider('values', 1, priceMax);
        $('#price-from').val(slider.slider("values", 0));
        $( "#price-to" ).val(slider.slider("values", 1));
        btn.removeClass('active')
    })
}

let slider = $( "#range-price" ).slider({
    range: true,
    min: priceMin,
    max: priceMax,
    values: [ priceMin, priceMax ],
    slide: function( event, ui ) {
        $( "#price-from" ).val(ui.values[0]);
        $( "#price-to" ).val(ui.values[1]);
        if(ui.values[0] !== priceMin || ui.values[1] !== priceMax) {
            numbReset($( "#range-price" ).closest('.catalog_filter-box').find('.catalog_filter-box--title_reset'))
        }
    }
});
$('#price-from').val(slider.slider('values', 0));
$('#price-to').val(slider.slider('values', 1));

$('#price-from').on('input', function () {
  if (Number($(this).val()) < Number($('#price-to').val())) {
    slider.slider('values', 0, $(this).val());
  }
});
$('#price-to').on('input', function () {
  if (Number($(this).val()) > Number($('#price-from').val())) {
    slider.slider('values', 1, $(this).val());
  }
});

$('.catalog_container-top--sort').find('select').selectmenu();

$('#price-from').on('input', function() {
    if (Number($(this).val()) < Number($("#price-to").val())) {
        slider.slider('values', 0, $(this).val());
    }
    numbCheck(slider)
});
$( "#price-to" ).on('input', function() {
    if (Number($(this).val()) > Number($('#price-from').val())) {
        slider.slider('values', 1, $(this).val());
    }
    numbCheck(slider)
});

$( ".catalog_container-top--sort").find('select').selectmenu();

$( ".catalog_filter-box--more").on("click", function() {
    $(this).siblings('.catalog_filter-box--list').addClass('open')
    $(this).css('display', 'none')
});

function removeInput(params) {
    $(params).on("click", function() {
        const text = $(this).siblings('span').text()
        const elem = $(this)
        $(`.checkbox-name:contains("${text}")`).each(function() {
            if($(this).text() == text) {
                $(this).siblings('input').prop( "checked", false )
                $(elem).closest('.catalog_container-filter--item').remove()
            }
        });
        filterCheck()
    })
}
function resetBtn(btn) {
    btn.addClass('active')
    btn.unbind()
    $(btn).on("click", function() {
        $(this).closest('.catalog_filter-box').find('input:checked').each(function() {
            $(this).prop( "checked", false )
            const text = $(this).siblings('.checkbox-name').text()
            $('.catalog_container-filter').find(`span:contains("${text}")`).each(function() {
                if($(this).text() == text) {
                    $(this).closest('.catalog_container-filter--item').remove()
                }
            });
        });
        filterCheck()
    })
}
function filterCheck() {
    if(!$('.catalog_container-filter--item').length) {
        $('.catalog_container-filter').remove()
    }
    $('.catalog_filter-box--title_reset.active').each(function() {
        if(!$(this).closest('.catalog_filter-box').find('input:checked').length) {
            $(this).removeClass('active')
        }
    });
}

$( ".catalog_filter-box--item").find('input').on("change", function() {
    if(this.checked) {
        const text = $(this).siblings('.checkbox-name').text()
    
        if (!$('.catalog_container-filter').length) {
            $('.catalog_container-top').after(`<div class="catalog_container-filter"></div>`)
        }
        $('.catalog_container-filter').append(`
        <div class='catalog_container-filter--item'>
            <span>${text}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12" stroke="#C14824" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 4L12 12" stroke="#C14824" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
        `)
        resetBtn($(this).closest('.catalog_filter-box').find('.catalog_filter-box--title_reset'))
        removeInput($('.catalog_container-filter').find(`span:contains("${text}")`).siblings('svg'))
    } else {
        const text = $(this).siblings('.checkbox-name').text()
        $(`.catalog_container-filter--item`).find(`span:contains("${text}")`).each(function( index ) {
            if($(this).text() == text) {
                $(this).closest('.catalog_container-filter--item').remove()
            }
        });
        filterCheck()
    }
});

$('.catalog_filter-box_reset').on("click", function() {
    $('.catalog_filter-box--title_reset.active').trigger("click");
})

$('.catalog_container-top--filter').on("click", function() {
    $('.catalog_filter').addClass('active')
})
$('.catalog_filter-title').on("click", function() {
    $('.catalog_filter').removeClass('active')
})

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  try {
    catalogHeroSwiper();
  } catch {}
});

function catalogHeroSwiper() {
  const swiper = new Swiper('.catalog-hero__swiper', {
    centeredSlides: false,
    slidesPerView: 1,
    allowTouchMove: false,
    speed: 1000,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        centeredSlides: true
      }
    },
    navigation: {}
  });

  const prevButton = document.querySelector('.catalog-hero__swiper-btn--prev');
  const nextButton = document.querySelector('.catalog-hero__swiper-btn--next');

  document.querySelectorAll('.catalog-hero__num').forEach((item, i) => {
    item.textContent = window.innerWidth > 768 ? `0${i}` : `0${i+1}`;
  });

  let activeSlideIndex;
  let slides;
  let activeSlide;
  let prevSlide;
  let nextSlide;
  let imgBox;

  let isTransitioning = false;

  let durationStart = 0.5;
  let durationEnd = 0.3;

  nextButton.addEventListener('click', () => {
    if (!isTransitioning) {
      isTransitioning = true;
      activeSlideIndex = swiper.activeIndex;
      slides = swiper.slides;
      activeSlide = slides[activeSlideIndex];
      prevSlide = slides[activeSlideIndex - 1];
      nextSlide = slides[activeSlideIndex + 1];
      imgBox = activeSlide.querySelector('.catalog-hero__img-box img');
      gsap
        .timeline()
        .to(prevSlide, { x: '+=100', duration: durationStart, ease: 'easeInOut' })
        .to(activeSlide, { x: '+=100', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
        .to(nextSlide, { x: '+=100', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
        .to(imgBox, { scale: '1.1', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
        .to(prevSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' })
        .to(activeSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`)
        .to(nextSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`)
        .to(imgBox, { scale: '1', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`);
      setTimeout(() => {
        swiper.slideNext();
        isTransitioning = false;
      }, 500);
      setTimeout(() => {
        activeSlideIndex = swiper.activeIndex;
        slides = swiper.slides;
        activeSlide = slides[activeSlideIndex];
        prevSlide = slides[activeSlideIndex - 1];
        nextSlide = slides[activeSlideIndex + 1];
        imgBox = activeSlide.querySelector('.catalog-hero__img-box img');
        gsap
          .timeline()
          .to(prevSlide, { x: '-=100', duration: durationStart, ease: 'easeInOut' })
          .to(activeSlide, { x: '-=100', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
          .to(nextSlide, { x: '-=100', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
          .to(imgBox, { scale: '1.1', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
          .to(prevSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' })
          .to(activeSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`)
          .to(nextSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`)
          .to(imgBox, { scale: '1', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`);
      }, 950);
    }
  });

  prevButton.addEventListener('click', () => {
    if (!isTransitioning) {
      isTransitioning = true;
      activeSlideIndex = swiper.activeIndex;
      slides = swiper.slides;
      activeSlide = slides[activeSlideIndex];
      prevSlide = slides[activeSlideIndex - 1];
      nextSlide = slides[activeSlideIndex + 1];
      imgBox = activeSlide.querySelector('.catalog-hero__img-box img');
      gsap
        .timeline()
        .to(prevSlide, { x: '-=100', duration: durationStart, ease: 'easeInOut' })
        .to(activeSlide, { x: '-=100', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
        .to(nextSlide, { x: '-=100', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
        .to(imgBox, { scale: '1.1', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
        .to(prevSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' })
        .to(activeSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`)
        .to(nextSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`)
        .to(imgBox, { scale: '1', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`);

      setTimeout(() => {
        swiper.slidePrev();
        isTransitioning = false;
      }, 500);
      setTimeout(() => {
        activeSlideIndex = swiper.activeIndex;
        slides = swiper.slides;
        activeSlide = slides[activeSlideIndex];
        prevSlide = slides[activeSlideIndex - 1];
        nextSlide = slides[activeSlideIndex + 1];
        imgBox = activeSlide.querySelector('.catalog-hero__img-box img');
        gsap
          .timeline()
          .to(prevSlide, { x: '+=100', duration: durationStart, ease: 'easeInOut' })
          .to(activeSlide, { x: '+=100', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
          .to(nextSlide, { x: '+=100', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
          .to(imgBox, { scale: '1.1', duration: durationStart, ease: 'easeInOut' }, `-=${durationStart}`)
          .to(prevSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' })
          .to(activeSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`)
          .to(nextSlide, { x: '0', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`)
          .to(imgBox, { scale: '1', duration: durationEnd, ease: 'easeInOut' }, `-=${durationEnd}`);
      }, 950);
    }
  });

  const imgBoxs = document.querySelectorAll('.catalog-hero__img-box');

  setTimeout(() => {
    imgBoxs.forEach((item) => {
      item.style.transition = 'scale 1s, opacity 1s 0.3s'; // Исправлена опечатка и изменено на 'transform'
    });
  }, 0);
}