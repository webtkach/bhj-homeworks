const triggers = document.querySelectorAll('.has-tooltip');
let tooltip = document.querySelector('.tooltip');
let activeElement = null;

if (!tooltip) {
  tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);
}

triggers.forEach(el => {
  el.addEventListener('click', (event) => {
    event.preventDefault();

    if (activeElement === el && tooltip.classList.contains('tooltip_active')) {
      tooltip.classList.remove('tooltip_active');
      activeElement = null;
      return;
    }

    const rect = el.getBoundingClientRect();

    tooltip.textContent = el.getAttribute('title');
    tooltip.style.left = rect.left + 'px';
    tooltip.style.top = rect.bottom + 'px';

    tooltip.classList.add('tooltip_active');
    activeElement = el;
  });
});