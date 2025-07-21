const hasTooltips = [...document.querySelectorAll('.has-tooltip')];

function eventListeners() {
  hasTooltips.forEach((el) => {el.addEventListener('click', showTooltip)})
}

function showTooltip(e) {
  e.preventDefault();
  const tooltip = e.target.nextElementSibling;
  const rect = e.target.getBoundingClientRect();
  tooltip.style.top = (rect.top + 20) + 'px';
  tooltip.style.left = rect.left + 'px';

  const isActive = tooltip.classList.contains('tooltip_active');
  hideAllTooltips();
  if (!isActive) {
    tooltip.classList.add('tooltip_active');
  }
}

function addTooltips() {
  hasTooltips.forEach((el) => {
    const tooltip = document.createElement('div')
    tooltip.classList.add('tooltip');
    tooltip.textContent = el.title;
    el.insertAdjacentElement('afterend', tooltip);
  })
}

function hideAllTooltips() {
  document.querySelectorAll('.tooltip').forEach(tooltip => {
    tooltip.classList.remove('tooltip_active');
  });
}

addTooltips();
eventListeners();