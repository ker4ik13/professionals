const openButton = document.getElementById('open-search');
const closeButton = document.getElementById('close-search');
const searchScreen = document.querySelector('.search_screen');
const searchHeader = document.querySelector('.header.search');

// Обработчики на закрытие и открытие
openButton.addEventListener('click', openSearch);
closeButton.addEventListener('click', closeSearch);

document.body.addEventListener('click', (event) => {
	// Если клик по кнопке открытия или по шапке
	if (
		event.composedPath().includes(searchHeader) ||
		event.composedPath().includes(openButton)
	) {
		return;
	}

	if (!event.composedPath().includes(searchHeader)) {
		closeSearch();
	}
});

function openSearch() {
	searchScreen.classList.add('open');
}
function closeSearch() {
	searchScreen.classList.remove('open');
}
