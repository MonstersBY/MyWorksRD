import './forms';
import { formFieldsInit, formSubmit } from './forms';

const form = () => {
  // form fields
  formFieldsInit({ viewPass: true });

  // submit form
  formSubmit();
  nameValidate();
  dropdovnInput();
  inputFile();
  valueDropdown('.lk-create__form-dropdown--machine');
  valueDropdown('.lk-create__form-dropdown--type');

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

  function inputFile() {
    function formatFileSize(bytes) {
      if (bytes < 1024) return bytes + ' b';
      else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' kb';
      else return (bytes / 1048576).toFixed(1) + ' mb';
    }

    // $('.input-file input[type=file]').on('change', function () {
    //   const filesItems = $('body').find('.form-files-items.' + $(this).attr('name'));
    //   if (filesItems.length > 0) {
    //     // filesItems.html('');
    //     let files = this.files;
    //     $.each(files, function (index, file) {

    //         const reader = new FileReader();
    //         reader.onload = function (event) {
    //             filesItems.append(
    //               `<div class="form-files-item">
    //                     <a class="form-files-item-link" target="_blank" href="${window.URL.createObjectURL(
    //                       file
    //                     )}">
    //                         <span class="form-files-item-title txt18 txt18_caps">${file.name} </span>
    //                         <span class="form-files-item-size txt18">${formatFileSize(file.size)}</span>
    //                    </a>
    //                     <button type="button" class="removeBtn">
    //                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                             <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5304 7.03034L19.0608 6.50001L18.0001 5.43935L17.4698 5.96968L12.0001 11.4393L6.53044 5.96968L6.00011 5.43935L4.93945 6.50001L5.46978 7.03034L10.9395 12.5L5.46978 17.9697L4.93945 18.5L6.00011 19.5607L6.53044 19.0303L12.0001 13.5607L17.4698 19.0303L18.0001 19.5607L19.0608 18.5L18.5304 17.9697L13.0608 12.5L18.5304 7.03034ZM12.0003 11.4999L11.0001 12.5L12.0003 13.5002L13.0004 12.5L12.0003 11.4999Z" fill="#676767"/>
    //                         </svg>
    //                     </button>
    //                 </div>`
    //             );

    //         };
    //         reader.readAsDataURL(file);

    //     });
    //   } else {
    //     let file = this.files[0];
    //     $(this)
    //       .next()
    //       .html(file.name + ' ' + formatFileSize(file.size));
    //   }
    // });

    // $(document).on('click', '.removeBtn', function () {
    //   let fileName = $(this).prev('span').text();
    //   let thisClass = $(this).parent().parent().attr('class').split(' ');
    //   let input = $('body').find('input[name=' + thisClass[thisClass.length - 1] + ']');

    //   let dataTransfer = new DataTransfer();
    //   Array.from(input[0].files).forEach((file) => {
    //     if (file.name !== fileName) {
    //       dataTransfer.items.add(file);
    //     }
    //   });
    //   input[0].files = dataTransfer.files;
    //   // input[0].value = '';
    //   // console.log(input[0].files)

    //   $(this).parent().remove();
    // });

    let arr = [];

    $('.input-file input[type=file]').on('change', function () {
      const filesItems = $('body').find('.form-files-items.' + $(this).attr('name'));

      if (filesItems.length > 0) {
        filesItems.html('');
        let files = Array.from(this.files);
        const main = $(this).attr('name');
        let newArr = arr.find((x) => x.name === main);
        if (newArr) {
          arr.map((x) => {
            if (x.name == main) {
              files.forEach((item, i) => {
                    x.file.push(item);
              });
            }
          });
        } else {
          let asd = [];
          files.forEach((i) => {
            asd.push(i);
          });
          arr.push({
            name: main,
            file: asd
          });
        }
        console.log(arr);
        arr.map((x) => {
        if (x.name == main) {
          if(x.name !== 'file_help' && x.name !== 'file_offer' ) {
            $.each(x.file, function (index, file) {
              filesItems.append(
                `<div class="form-files-item">
                    <a class="form-files-item-link" target="_blank" href="${window.URL.createObjectURL(
                      file
                    )}">
                        <span class="form-files-item-title txt18 txt18_caps">${file.name} </span>
                        <span class="form-files-item-size txt18">${formatFileSize(file.size)}</span>
                    </a>
                    <button type="button" class="removeBtn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5304 7.03034L19.0608 6.50001L18.0001 5.43935L17.4698 5.96968L12.0001 11.4393L6.53044 5.96968L6.00011 5.43935L4.93945 6.50001L5.46978 7.03034L10.9395 12.5L5.46978 17.9697L4.93945 18.5L6.00011 19.5607L6.53044 19.0303L12.0001 13.5607L17.4698 19.0303L18.0001 19.5607L19.0608 18.5L18.5304 17.9697L13.0608 12.5L18.5304 7.03034ZM12.0003 11.4999L11.0001 12.5L12.0003 13.5002L13.0004 12.5L12.0003 11.4999Z" fill="#676767"/>
                        </svg>
                    </button>
                </div>`
              );
            });
          } else {
            x.file.splice(5)
            $.each(x.file, function (index, file) {
              filesItems.append(
                `<div class="form-files-item">
                    <a class="form-files-item-link" target="_blank" href="${window.URL.createObjectURL(
                      file
                    )}">
                        <span class="form-files-item-title txt18 txt18_caps">${file.name} </span>
                        <span class="form-files-item-size txt18">${formatFileSize(file.size)}</span>
                    </a>
                    <button type="button" class="removeBtn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5304 7.03034L19.0608 6.50001L18.0001 5.43935L17.4698 5.96968L12.0001 11.4393L6.53044 5.96968L6.00011 5.43935L4.93945 6.50001L5.46978 7.03034L10.9395 12.5L5.46978 17.9697L4.93945 18.5L6.00011 19.5607L6.53044 19.0303L12.0001 13.5607L17.4698 19.0303L18.0001 19.5607L19.0608 18.5L18.5304 17.9697L13.0608 12.5L18.5304 7.03034ZM12.0003 11.4999L11.0001 12.5L12.0003 13.5002L13.0004 12.5L12.0003 11.4999Z" fill="#676767"/>
                        </svg>
                    </button>
                </div>`
              );
            });
          }
          
        }
      });
      }
    });

    $(document).on('click', '.removeBtn', function () {
      let fileName = $(this).prev('span').text();
      let thisClass = $(this).parent().parent().attr('class').split(' ');
      let input = $('body').find('input[name=' + thisClass[thisClass.length - 1] + ']');
      let dataTransfer = new DataTransfer();
      Array.from(input[0].files).forEach((file) => {
        if (file.name !== fileName) {
          dataTransfer.items.add(file);
        }
      });
      input[0].files = dataTransfer.files;

      let parent = $(this).parent();
      $(this)
        .parent()
        .parent()
        .find('.form-files-item')
        .each(function (i) {
          if ($(this).is(parent)) {
            arr.map((x) => {
              if (x.name == thisClass[thisClass.length - 1]) {
                x.file.splice(i, 1);
              }
            });
          }
        });
      console.log(arr);
      $(this).parent().remove();
    });
  }

  function valueDropdown(selector) {
    const wrapper = document.querySelector(selector);
    const input = wrapper.querySelector('.form__dropdown_top input');
    const radio = wrapper.querySelectorAll('.form__dropdown_bottom input');
    radio.forEach((item) => {
      if (item.checked) {
        input.value = item.parentElement.nextElementSibling.textContent;
        input.classList.add('filled');
      }
    });
  }
};

export default form;
