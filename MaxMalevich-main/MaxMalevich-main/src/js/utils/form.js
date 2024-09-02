import './forms';
import 'inputmask';
import { formFieldsInit, formSubmit } from './forms';
window.$ = window.jQuery = require('jquery');
const form = () => {
	// form fields
	formFieldsInit({ viewPass: true });

	// submit form
	phoneMask();
	mailMask() 
	formSubmit();
	nameValidate();
	// mailValidate();
	inputFile();
	inputDate();

	function nameValidate() {
		const name = document.querySelectorAll('.input--name');
		name.forEach(item => {
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

	function mailValidate() {
		const mail = document.querySelectorAll('.input--mail');

		mail.forEach(item => {
			item.addEventListener('input', () => {
				const inputValue = item.value.trim();
				const parent = item.parentElement.parentElement;
				const span = item.parentElement.nextElementSibling;

				if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(inputValue) && inputValue != '') {
					span.classList.add('active');
					parent.classList.add('_form-error');
				} else {
					span.classList.remove('active');
					parent.classList.remove('_form-error');
				}
			});
		});
	}

	function inputFile() {
		function formatFileSize(bytes) {
			if (bytes < 1024) return bytes + ' b';
			else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' kb';
			else return (bytes / 1048576).toFixed(1) + ' mb';
		}

		$('.label-input-file input[type=file]').on('change', function () {
			const filesItems = $('body').find('.form-files-items.' + $(this).attr('name'));
			if (filesItems.length > 0) {
				// filesItems.html('');
				let files = this.files;
				$.each(files, function (index, file) {
					const reader = new FileReader();
					reader.onload = function (event) {
						filesItems.append(
							`<div class="form-files-item">
                      <a class="form-files-item-link" target="_blank" href="${window.URL.createObjectURL(file)}">
                          <span class="form-files-item-title txt18 txt18_caps">${file.name} </span> 
                          <span class="form-files-item-size txt18">${formatFileSize(file.size)}</span>
                     </a>
                      <button type="button" class="removeBtn">
					  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
					  <path d="M9 10.3335L36.9998 38.3333" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
					  <path d="M9.00023 38.3333L37 10.3335" stroke="white" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
					</svg>
                      </button>
                  </div>`
						);
					};
					reader.readAsDataURL(file);
				});
			} else {
				let file = this.files[0];
				$(this)
					.next()
					.html(file.name + ' ' + formatFileSize(file.size));
			}
		});

		$(document).on('click', '.removeBtn', function () {
			let fileName = $(this).prev('span').text();
			let thisClass = $(this).parent().parent().attr('class').split(' ');
			let input = $('body').find('input[name=' + thisClass[thisClass.length - 1] + ']');

			let dataTransfer = new DataTransfer();
			Array.from(input[0].files).forEach(file => {
				if (file.name !== fileName) {
					dataTransfer.items.add(file);
				}
			});
			input[0].files = dataTransfer.files;
			// input[0].value = '';
			// console.log(input[0].files)

			$(this).parent().remove();
		});
	}

	function phoneMask() {
		const mask = new Inputmask('+7 (999) 999 99 99');
		mask.mask($('.phone-mask'));
	}
	
	function mailMask() {
		const mask = new Inputmask('email');
		mask.mask($('.input--mail'));
	}


	function inputDate() {
		const input = document.querySelectorAll('.input--date');
		let currentDate = new Date();
		currentDate.setDate(currentDate.getDate() + 1);
		let formattedDate = currentDate.toISOString().split('T')[0];
		input.forEach(item => (item.value = formattedDate));
	}
};

export default form;
