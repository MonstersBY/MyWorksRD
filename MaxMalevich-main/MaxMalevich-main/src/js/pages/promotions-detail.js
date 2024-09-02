window.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.timer') && Timer();
});

const Timer = () => {
	const deadlineArr = document.querySelector('.timer__items').dataset.deadline.split(' '),
		deadline = new Date(...deadlineArr),
		daysContainer = document.querySelector('.timer__days'),
		hoursContainer = document.querySelector('.timer__hours'),
		minutesContainer = document.querySelector('.timer__minutes'),
		secondsContainer = document.querySelector('.timer__seconds');

	const daysDeclinations = {
		one: 'День',
		few: 'Дня',
		many: 'Дней',
	};

	const hoursDeclinations = {
		one: 'Час',
		few: 'Часа',
		many: 'Часов',
	};

	const minutesDeclinations = {
		one: 'Минута',
		few: 'Минуты',
		many: 'Минут',
	};

	const secondDeclinations = {
		one: 'Секунда',
		few: 'Секунды',
		many: 'Секунд',
	};

	const countdownTimer = () => {
		const diff = deadline - new Date();

		if (diff < 0) {
			clearInterval(timerId);
		}

		const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
		const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
		const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
		const second = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

		daysContainer.querySelector('.timer__value').textContent = days < 10 ? `0${days}` : `${days}`;
		hoursContainer.querySelector('.timer__value').textContent = hours < 10 ? `0${hours}` : `${hours}`;
		minutesContainer.querySelector('.timer__value').textContent = minutes < 10 ? `0${minutes}` : `${minutes}`;
		secondsContainer.querySelector('.timer__value').textContent = second < 10 ? `0${second}` : `${second}`;

		daysContainer.querySelector('.timer__item-text').textContent = daysDeclinations[new Intl.PluralRules('ru-RU').select(days)];
		hoursContainer.querySelector('.timer__item-text').textContent = hoursDeclinations[new Intl.PluralRules('ru-RU').select(hours)];
		minutesContainer.querySelector('.timer__item-text').textContent = minutesDeclinations[new Intl.PluralRules('ru-RU').select(minutes)];
		secondsContainer.querySelector('.timer__item-text').textContent = secondDeclinations[new Intl.PluralRules('ru-RU').select(second)];
	};

	const timerId = setInterval(countdownTimer, 1000);
};
