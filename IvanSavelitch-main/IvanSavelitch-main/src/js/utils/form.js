import './forms';
import { formFieldsInit, formSubmit } from './forms';
import 'inputmask';
const form = () => {
  // form fields
  formFieldsInit({ viewPass: true });

  // submit form
  formSubmit();
  nameValidate();
  phoneMask()
  codeMask()
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
  function phoneMask() {
    const mask = new Inputmask('+ 7 (  999  )  999  -  99  -  99');
    
    mask.mask($('.phone-mask'));
  }
  function codeMask() {
    const mask = new Inputmask('999 999');
    mask.mask($('.code-mask'));
  }


};

export default form;
