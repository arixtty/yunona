const searchButton = document.querySelector('.header__search-icon');
const searchInput = document.querySelector('.header__search-input');

searchButton.addEventListener('click', openSearchInput);

function openSearchInput() {
  const isMobileResolution = document.body.clientWidth <= 1024 || document.documentElement.clientWidth <= 1024;
  if (!isMobileResolution) return;
  searchInput.classList.toggle('visible');
  document.documentElement.addEventListener('click', closeSearchInput);
}

function closeSearchInput(event) {
  if (event.target === searchInput || event.target === searchButton) return;
  searchInput.classList.remove('visible');
}