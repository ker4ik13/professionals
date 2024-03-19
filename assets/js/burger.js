const burger = document.querySelector('.burger');
const pages = document.querySelector('.nav_list');

// Открытие меню
burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	pages.classList.toggle('active');
	document.body.classList.toggle('overflow');
	document.body.classList.toggle('blur');
});

// Закрытие меню при клике вне
document.body.addEventListener('click', (event) => {
	if (burger && event.composedPath().includes(burger)) {
		return;
	}

	if (pages && !event.composedPath().includes(pages)) {
		burger.classList.remove('active');
		pages.classList.remove('active');
		document.body.classList.remove('overflow');
		document.body.classList.remove('blur');
	}
});
