import './forms';
import { formFieldsInit, formSubmit } from './forms';
import 'inputmask';
const form = () => {
  // form fields
  formFieldsInit({ viewPass: true });

  // submit form
  formSubmit();
  // nameValidate();
  phoneMask();
  dropdovnInput()

  function nameValidate() {
    const name = document.querySelectorAll('.input--name');
    name.forEach((item) => {
      item.addEventListener('input', () => {
        const inputValue = item.value.trim();
        const span = item.parentElement.nextElementSibling;
        const parent = item.parentElement.parentElement;

        if (!/^[a-zA-Zа-яА-Я\s\-]+$/.test(inputValue) && inputValue != '') {
          span.classList.add('active');
          parent.classList.add('_form-error');
        } else {
          span.classList.remove('active');
          parent.classList.remove('_form-error');
        }
      });
    });
  }
  function dropdovnInput() {
    // Обработчик клика на верхней части выпадающего списка
    $('.form__dropdown').on('click', '.form__dropdown_top', function () {
      // Открыть/закрыть выпадающее меню для текущего элемента
      $(this).addClass('open');
      $(this).closest('.form__item').addClass('active');
      $(this).closest('.form__dropdown').find('.form__dropdown_bottom').slideDown();
    });

    // Обработчик фокуса на input в выпадающем списке с поиском
    $('.form__dropdown').on('focus', '.form__dropdown .form__dropdown_top input', function () {
      // Проверка наличия класса open
      if (!$(this).closest('.form__dropdown_top').hasClass('open')) {
        // Анимация и добавление классов при открытии выпадающего списка
        $(this).closest('.form__dropdown').find('.form__dropdown_bottom').slideDown();
        $(this).closest('.form__dropdown_top').addClass('open');
        $(this).closest('.form__item').addClass('active');
      }
    });

    // Обработчик клика на элементе выпадающего списка
    $('.form__dropdown').on('click', '.form__dropdown_item', function () {
      // Проверка наличия родительского элемента .form__dropdown_search
      if ($(this).closest('.form__dropdown').length) {
        // Установка значения и стилей при выборе элемента в выпадающем списке с поиском
        $(this).closest('.form__dropdown').find('.form__dropdown_top input').addClass('_filled');
        $(this)
          .closest('.form__dropdown')
          .find('.form__dropdown_top input')
          .val($(this).find('.form__dropdown_item_name').text());
        $(this).closest('.form__dropdown').find('.form__dropdown_top input').addClass('filled');
        $(this).closest('.form__dropdown').find('.form__dropdown_top input').removeClass('_form-error');
        $(this)
          .closest('.form__dropdown')
          .find('.popup__calculator-form-input-wrapper')
          .removeClass('_form-error');
        $(this).closest('.form__dropdown').find('.error-span').removeClass('active');
        $(this).closest('.form__dropdown').find('.form__dropdown_top').removeClass('open');
        $(this).closest('.form__dropdown').find('.form__dropdown_bottom').slideUp();
      }
    });

    $('.form__dropdown').on('blur', '.form__dropdown_top input', function () {
      $(this).removeClass('open');
      $(this).closest('.form__dropdown').find('.form__dropdown_top').removeClass('open');
      $(this).closest('.form__item').removeClass('active');
      $(this).closest('.form__dropdown').find('.form__dropdown_bottom').slideUp();
    });

    // Обработчик клика вне элементов выпадающего списка
    // $(document).on('click', function (e) {
    //   if ($(e.target).closest('.form__dropdown').length === 0) {

    //     console.log($(e.target).closest('.form__dropdown').length)
    //     // Закрытие выпадающего списка при клике вне его области
    //     $('.form__dropdown_top.open').each(function (params) {
    //       console.log($('.form__dropdown_top.open'))
    //       $(this).removeClass('open');
    //       $(this).closest('.form__dropdown').find('.form__dropdown_bottom').slideToggle();
    //       $(this).closest('.form__item').removeClass('active');
    //     });
    //     console.log('123')
    //   }
    // });

    // Обработчик события нажатия клавиши в поле ввода
    $('.form__dropdown').on('keyup', '.form__dropdown_top input', function () {
      var value = $(this).val().toLowerCase();
      // Фильтрация элементов выпадающего списка по введенному значению
      $(this)
        .closest('.form__dropdown')
        .find('.form__dropdown_item')
        .filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    const dropdown = document.querySelectorAll('.input-dropdown');

    dropdown.forEach((item) => {
      const span = item.parentElement.nextElementSibling;
      const parent = item.parentElement;
      item.addEventListener('change', () => {
        let radio = item.closest('.form__dropdown_top').nextElementSibling.querySelectorAll('input');

        radio.forEach((ra) => {
          if (ra.checked) {
            span.classList.remove('active');
            parent.classList.remove('_form-error');
          } else {
            span.classList.add('active');
            parent.classList.add('_form-error');
          }
        });
      });
      item.addEventListener('blur', () => {
        setTimeout(() => {
          if (item.classList.contains('filled') && item.value) {
            console.log(parent);
            span.classList.remove('active');
            parent.classList.remove('_form-error');
          } else {
            span.classList.add('active');
            parent.classList.add('_form-error');
            item.classList.remove('filled');
          }
        }, 200);
      });
      item.addEventListener('input', () => {
        let radio = item.closest('.form__dropdown_top').nextElementSibling.querySelectorAll('input');
        radio.forEach((ra) => {
          ra.checked = false;
        });
        span.classList.add('active');
        parent.classList.add('_form-error');

        // parent.parentElement.classList.add('_form-error');
        item.classList.remove('_filled');
        item.classList.remove('filled');
        item.classList.add('_form-error');
      });
    });
  }
  function phoneMask() {
    const mask = new Inputmask('+ 7 ( 999 ) 999 - 99 - 99');
    mask.mask($('.phone-mask'));
  }
};

export default form;
