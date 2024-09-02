import 'swiper/css';
import 'swiper/css/bundle';
import '../scss/index.scss';

import './dev/kuloverova';
import './dev/lgleb';
import './dev/monsters';
import './dev/hyperstone';

import './pages/home';
import './utils/swiper';

const btnTop = document.querySelector('.btn_top');

window.addEventListener('scroll', () => {
	if (window.scrollY > 100) {
		btnTop.style.display = 'flex';
	
	} else {
		btnTop.style.display = 'none';
	}
});

btnTop.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});
