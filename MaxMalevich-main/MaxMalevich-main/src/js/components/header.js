import $ from 'jquery';

const header = $('.header');
$(document).ready(function () {
	openBurgerMenu();
	headerNav();
	headerSublists();
});

$(window).resize(function () {
	headerNav();
});

function openBurgerMenu() {
	let menu = $('.burger-menu');
	let button = menu.find('.burger-menu_button', '.burger-menu_lines');
	let links = menu.find('.burger-menu_link');
	let overlay = menu.find('.burger-menu_overlay');

	button.on('click', e => {
		e.preventDefault();
		toggleMenu();
	});

	// links.on('click', () => toggleMenu());
	// overlay.on('click', () => toggleMenu());

	function toggleMenu() {
		menu.toggleClass('burger-menu_active');

		if (menu.hasClass('burger-menu_active')) {
			$('body').css('overflow', 'hidden');
			$('.header').addClass('active');
		} else {
			$('body').css('overflow', 'visible');
			$('.header').removeClass('active');
		}
	}
}

function headerNav() {
	let navButtons = $('.header__menu li');
	let navLinks = $('.header__menu li a');
	let navMenus = $('.header__bottom-wrapper');

	navButtons.each(function (index, item) {
		let itemMenu = item.dataset.menu;
		$(item).data('menu') &&
			$(item).on('mouseover', function (e) {
				header.addClass('active');
				e.preventDefault();
				$(navButtons).removeClass('active');
				$(navMenus).removeClass('active');
				setTimeout(() => {
					$(`.${itemMenu}`).addClass('active');
					$(item).addClass('active');
				}, 0);
				if (window.outerWidth <= 1200) {
					$('.header__menu-bottom').addClass('active');
					$('.header__menu-top').removeClass('active');
					$('.header__menu-btn').css('display', 'none');
					$('.header__menu-social').css('display', 'none');
					$('.header__burger-btn').removeClass('active');
					$('.header__back-btn').addClass('active');
				}
			});
	});
	if (window.outerWidth <= 1200) {
		if ($('.header__back-btn').hasClass('active')) {
			$('.header__menu-btn').css('display', 'flex');
			$('.header__menu-social').css('display', 'none');
		}
		$('.header__back-btn').on('click', function () {
			if ($(this).hasClass('active')) {
				$('.header__menu-bottom').removeClass('active');
				$('.header__menu-top').addClass('active');
				$('.header__menu-btn').css('display', 'flex');
				$('.header__menu-social').css('display', 'flex');
				$('.header__burger-btn').addClass('active');
				$(this).removeClass('active');
			}
		});
	} else {
		$('.header__menu-btn').css('display', 'none');
		$('.header__menu-social').css('display', 'flex');
		navLinks.on('mouseover', () => {
			navButtons.removeClass('active');
			if (header.hasClass('active') && !header.hasClass('closing')) {
				header.addClass('closing');
				setTimeout(() => {
					header.removeClass('active');
					header.removeClass('closing');
					$('.header__bottom-wrapper').removeClass('active');
				}, 600);
			}
		});
		header.on('mouseleave', () => {
			navButtons.removeClass('active');
			if (!header.hasClass('acitve') && !header.hasClass('closing')) {
				header.addClass('closing');
				setTimeout(() => {
					header.removeClass('active');
					header.removeClass('closing');
					$('.header__bottom-wrapper').removeClass('active');
				}, 600);
			}
		});
	}
}

// --------

const headerSublists = () => {
	if (window.screen.width <= 1200 && window.screen.width > 768 && document.querySelector('.header')) {
		const linksContainer = document.querySelector('.header__inner-main'),
			links = document.querySelectorAll('.burger-menu_link'),
			lists = document.querySelectorAll('.header__inner-sublists .header__list');

		linksContainer.addEventListener('click', e => {
			const target = e.target;

			let activeIndex = 0;

			if (target.classList.contains('burger-menu_link')) {
				links.forEach((link, i) => {
					if (link === target) {
						activeIndex = i;
					}

					link.classList.remove('active');
				});

				lists[activeIndex] && e.preventDefault();

				target.classList.add('active');

				lists.forEach(list => {
					list.classList.remove('active');
				});

				if (lists[activeIndex]) {
					lists[activeIndex].classList.add('active');
				}
			}
		});
	}

	if (window.screen.width <= 768 && document.querySelector('.header')) {
		const linksContainer = document.querySelector('.header__inner-main'),
			links = document.querySelectorAll('.burger-menu_link'),
			listsContainer = document.querySelector('.header__inner-sublists'),
			lists = listsContainer.querySelectorAll('.header__inner-sublists .header__list'),
			listTitle = listsContainer.querySelector('.header__inner-sublists--title');

		linksContainer.addEventListener('click', e => {
			const target = e.target;

			let activeIndex = 0;

			if (target.classList.contains('burger-menu_link')) {
				const text = target.querySelector('span').textContent;

				links.forEach((link, i) => {
					if (link === target) {
						activeIndex = i;
					}

					link.classList.remove('active');
				});

				lists[activeIndex] && e.preventDefault();

				listTitle.querySelector('div:last-child').textContent = text;

				lists.forEach(list => {
					list.classList.remove('active');
				});

				if (lists[activeIndex]) {
					lists[activeIndex].classList.add('active');
				}

				listsContainer.classList.add('active');
			}
		});

		listTitle.addEventListener('click', () => {
			listsContainer.classList.contains('active') && listsContainer.classList.remove('active');
		});
	}
};
