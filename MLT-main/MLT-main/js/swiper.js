// Пересчет rem в px для swiper
// spaceBetween: rem(5),
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100 / 375) * (0.1 * $(window).width()) * rem;
    }
};

var baner_swiper = new Swiper('.baner-swiper', {
    grabCursor: true,
    pagination: {
        el: '.baner-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return `<span class="baner-swiper__number-now swiper__number-now">${current}</span><span class="baner-swiper__number-all swiper__number-all">${total}</span>`;
        },
    },
    navigation: {
        nextEl: '.baner-button-next',
        prevEl: '.baner-button-prev',
    },
});

if ($('.baner-swiper__number').length) {
    document.querySelector('.baner-swiper__number-all').innerHTML = `${$('.baner-swiper .swiper-slide').length}`;
}
//   baner_swiper.on('slideChange', function (x) {
//     document.querySelector('.baner-swiper__number-now').innerHTML = `${
//       x.activeIndex + 1
//     }`;
//   });

var bestsellers_swiper = new Swiper('.bestsellers-swiper', {
    // spaceBetween: rem(1.6),
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    grabCursor: true,
    // grid: {
    //   rows: 2,
    // },
    navigation: {
        nextEl: '.bestsellers-button-next',
        prevEl: '.bestsellers-button-prev',
    },
    breakpoints: {
        769: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: rem(4.4),
            // grid: {
            //   rows: 1,
            // },
        },
    },
});

// bestsellersBorder();

// $(window).on('resize', function (x) {
//   bestsellersBorder();
// });

// function bestsellersBorder() {
//   if ($('.bestsellers-swiper').length) {
//     if ($(window).width() < 769) {
//       $('.bestsellers-slide').each(function (x) {
//         if (x % 4 == 0 || x % 4 == 1) {
//           $(this).css('border-right', '1px solid rgba(18, 24, 32, 0.20)');
//         }
//       });
//     } else {
//       $('.bestsellers-slide').each(function (x) {
//         if (x % 4 == 0 || x % 4 == 1) {
//           $(this).css('border-right', 'unset');
//         }
//       });
//     }
//   }
// }

var articles_swiper = new Swiper('.articles-swiper', {
    spaceBetween: rem(3.2),
    slidesPerView: 1,
    slidesPerGroup: 1,
    grid: {
        rows: 5,
    },
    navigation: {
        nextEl: '.articles-button-next',
        prevEl: '.articles-button-prev',
    },
    pagination: {
        el: '.articles-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return `<span class="articles-swiper__number-now">${current}</span><span class="articles-swiper__number-all">${total}</span>`;
        },
    },
    breakpoints: {
        769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: rem(4.4),
            grid: {
                rows: 3,
            },
        },
    },
});

var article_page_swiper = new Swiper('.article-page-swiper', {
    spaceBetween: rem(1),
    slidesPerView: 1,
    slidesPerGroup: 1,
    grid: {
        rows: 1,
    },
    navigation: {
        nextEl: '.article-page-button-next',
        prevEl: '.article-page-button-prev',
    },
    pagination: {
        el: '.article-page-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return `<span class="article-page-swiper__number-now">${current}</span><span class="article-page-swiper__number-all">${total}</span>`;
        },
    },
    breakpoints: {
        769: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: rem(6),
            grid: {
                rows: 2,
            },
        },
    },
});

var catalog_right_usename_swiper = new Swiper('.catalog-right-usename_swiper', {
    spaceBetween: rem(1),
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.catalog-right-usename_swiper-next',
        prevEl: '.catalog-right-usename_swiper-prev',
    },
});

var dealer_swiper = new Swiper('.dealer-swiper', {
    slidesPerView: 'auto',
    spaceBetween: rem(4),
    pagination: {
        el: '.dealer-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return `<span class="dealer-swiper__number-all swiper__number-now">${current}</span><span class="dealer-swiper__number-all swiper__number-all">${total}</span>`;
        },
    },
    navigation: {
        nextEl: '.dealer-button-next',
        prevEl: '.dealer-button-prev',
    },
    breakpoints: {
        769: {
            slidesPerView: 2,
            spaceBetween: rem(10),
        },
    },
});

var certificates_page_swiper = new Swiper('.certificates-swiper', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.certificates-button-next',
        prevEl: '.certificates-button-prev',
    },
    pagination: {
        el: '.certificates-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return `<span class="certificates-swiper__number-now swiper__number-now">${current}</span><span class="certificates-swiper__number-all swiper__number-all">${total}</span>`;
        },
    },
    breakpoints: {
        769: {
            slidesPerView: 4,
            spaceBetween: rem(4),
        },
    },
});

let catalogBanner = new Swiper('.catalog-banner__swiper', {
    slidesPerGroup: 1,
    slidesPerView: 1,
    // effect: 'fade',
    autoHeight: true,

    // breakpoints: {
    //     768: {
    //         autoHeight: true,
    //     },
    // },

    navigation: {
        nextEl: '.catalog-banner__swiper-next',
        prevEl: '.catalog-banner__swiper-prev',
    },
});
