const tabs = document.querySelector('.tabs');
const tabButtons = Array.from(document.querySelectorAll('.tabbutton'));
const tabPanels = Array.from(document.querySelectorAll('.tabpanel'));

tabButtons.forEach(button => button.addEventListener('click', handleButtonClick));

function handleButtonClick(event) {
  tabButtons.forEach(button => button.setAttribute('aria-selected', false));
  tabPanels.forEach(panel => panel.hidden = true);
  event.target.setAttribute('aria-selected', true);


  const id = event.target.id;
  const tabPanelToShow = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
  tabPanelToShow.hidden = false;
}