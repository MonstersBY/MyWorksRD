$(document).ready(function () {
    $('.header__burger').on('click', function (evt) {
        // $('html').toggleClass('modal');
        let $this = $(this);
        $('.header').toggleClass('active');
        $('.header-container--main').slideToggle();
        $('.header-container--catalog').removeClass('active');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            $('.header').removeClass('active');
            $('.header-container--main').show();
            $('.header-container--catalog').removeClass('active');
        }
        if (window.innerWidth < 768) {
            if (!$('.header').hasClass('active')) {
                $('.header-container--main').hide();
            }
        }
    });

    $('.header__item--catalog').on('click', function (evt) {
        $('.header-container--catalog').addClass('active');
    });
    $('.header__item--back-btn').on('click', function (evt) {
        $('.header-container--catalog').removeClass('active');
    });

    if ($('.catalog-right-box').length) {
        if ($('.catalog-right__item').length % 2) {
            $('.catalog-right__item')[$('.catalog-right__item').length - 1].style.border = 'unset';
        } else {
            $('.catalog-right__item')[$('.catalog-right__item').length - 1].style.border = 'unset';
            $('.catalog-right__item')[$('.catalog-right__item').length - 2].style.border = 'unset';
        }
    }

    if ($('.product-page').length) {
        $('.product-page-left__btn').on('click', function (evt) {
            if (!$(this).hasClass('active')) {
                $(this).siblings()[0].classList.remove('active');
                $(this).toggleClass('active');
                $(this)
                    .closest('.product-page-left')
                    .children('.product-page-left__img')
                    .each(function () {
                        $(this).toggleClass('active');
                    });
                $(this).parent();
                $('.product-page-right')
                    .children('.product-page-right__spec:not(.product-page-right__spec--bottom)')
                    .each(function () {
                        $(this).toggleClass('active');
                    });
                console.log($(this).parent().closest('.product-page-right'));
            }
        });
        $('.product-page-left__img.document, .modal-box__zoom').on('click', function (evt) {
            evt.preventDefault();
            $('html').toggleClass('modal');

            const $modal_box = $('.modal-box');
            const $container = $modal_box.children('.modal-box__zoom');
            $modal_box.toggleClass('active');
            $container.toggleClass('active');
        });
        $('.product-page-right__buy').on('click', function (evt) {
            evt.preventDefault();
            $('html').toggleClass('modal');

            const $modal_box = $('.modal-box');
            const $container = $modal_box.children('.application-order');
            $modal_box.toggleClass('active');
            $container.toggleClass('active');
        });
        $('.modal-box__exit').on('click', function (evt) {
            evt.preventDefault();
            $('html').removeClass('modal');

            // const $container = $(this).parent('.modal-box-container');
            // const $modal_box = $container.parent('.modal-box');
            // $modal_box.removeClass('active');
            // $container.removeClass('active');

            document.querySelectorAll('.modal-box-container').forEach((el) => el.classList.remove('active'));
            document.querySelectorAll('.modal-box').forEach((el) => el.classList.remove('active'));
        });
        // $('.modal-box__form-btn').on('click', function(evt) {
        //     evt.preventDefault();
        //     console.log($(this).parents());
        //     const $container = $(this).parents('.modal-box-container')
        //     const $modal_box = $container.siblings('.application-order-sent')
        //     $modal_box.toggleClass('active');
        //     $container.toggleClass('active');
        // });
    }
    $('.tel-follow--main').on('click', function (evt) {
        evt.preventDefault();
        $(this).parents('.tel-follow').toggleClass('active');
    });
    $('.catalog-right-usename--item').on('click', function (evt) {
        evt.preventDefault();
        $(this).toggleClass('active');
    });
    $('.catalog-right--sortd').on('click', function (evt) {
        evt.preventDefault();
        $(this).toggleClass('active');
    });

    $('.catalog-right--sort').on('click', function (evt) {
        evt.preventDefault();
        $('body').addClass('modal');
        $('.catalog-sort-modal').addClass('active');
    });
    $('.catalog-sort-modal-screen').on('click', function (evt) {
        evt.preventDefault();
        $('body').removeClass('modal');
        $('.catalog-sort-modal').removeClass('active');
    });
    $('.catalog-sort-modal-item').on('click', function (evt) {
        $('.catalog-right--sort span').html($(this).find('span').html());
    });

    $('.catalog-right--filter').on('click', function (evt) {
        evt.preventDefault();
        $('body').addClass('modal');
        $('.catalog-filter').addClass('active');
    });
    $('.catalog-filter--exit').on('click', function (evt) {
        $('body').removeClass('modal');
        $('.catalog-filter').removeClass('active');
    });

    $('.catalog-filter-item--show').on('click', function (evt) {
        $(this).css('display', 'none');
        $(this).next('.disabled').removeClass('disabled');
    });
    $('.catalog-filter-bottom-clear').on('click', function (evt) {
        console.log(123);
        $('.catalog-filter-item-choice input').prop('checked', false);
    });

    $('.catalog-filter--box').on('submit', function (evt) {
        evt.preventDefault();
        let count = $(".catalog-filter-item-choice [type='checkbox']:checked").length;
        console.log(count);
        if (count) {
            $('.catalog-right--filter').find('div').html(count);
            $('.catalog-right--filter').find('div').addClass('show');
        } else {
            $('.catalog-right--filter').find('div').removeClass('show');
        }
        $('body').removeClass('modal');
        $('.catalog-filter').removeClass('active');
    });

    const pointerScroll = (elem) => {
        let isDrag = false;

        const toggleDrag = () => (isDrag = !isDrag);
        const drag = (ev) => isDrag && (elem.scrollLeft -= ev.movementX);

        elem.addEventListener('pointerdown', toggleDrag);
        addEventListener('pointerup', toggleDrag);
        addEventListener('pointermove', drag);
    };

    // document.querySelectorAll(".catalog-right-usename").forEach(pointerScroll);

    if ($('.header').length) {
        $('.header .header__search').on('click', function (evt) {
            evt.preventDefault();
            $('html').toggleClass('modal');

            const $modal_box = $('.modal-box');
            const $container = $modal_box.children('.search-modal');
            $modal_box.toggleClass('active');
            $container.toggleClass('active');
        });
        $('.modal-box__exit').on('click', function (evt) {
            evt.preventDefault();
            $('html').removeClass('modal');

            // const $container = $(this).parent('.modal-box-container');
            // const $modal_box = $container.parent('.modal-box');
            // $modal_box.removeClass('active');
            // $container.removeClass('active');

            document.querySelectorAll('.modal-box-container').forEach((el) => el.classList.remove('active'));
            document.querySelectorAll('.modal-box').forEach((el) => el.classList.remove('active'));
        });
    }
});

const telInputElements = document.querySelectorAll('[data-tel-mask]');
if (telInputElements.length) {
    telInputElements.forEach((el) => {
        Inputmask({
            mask: '+7 (999) 999 99-99',
            showMaskOnHover: false,
            jitMasking: true,
        }).mask(el);
    });
}
