document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const value = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');
    const items = dropdown.querySelectorAll('.dropdown__item');

    value.addEventListener('click', () => {
      list.classList.toggle('dropdown__list_active');
    });

    items.forEach(item => {
      item.addEventListener('click', event => {
        event.preventDefault();
        const link = item.querySelector('.dropdown__link');
        value.textContent = link.textContent.trim();
        list.classList.remove('dropdown__list_active');
      });
    });
  });
});
