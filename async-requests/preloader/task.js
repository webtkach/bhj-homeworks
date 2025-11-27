const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('load', () => {
  loader.classList.remove('loader_active');

  const data = xhr.response;
  if (!data || !data.response || !data.response.Valute) return;

  const valutes = data.response.Valute;
  itemsContainer.innerHTML = '';

  Object.keys(valutes).forEach(key => {
    const valute = valutes[key];

    const item = document.createElement('div');
    item.className = 'item';

    const code = document.createElement('div');
    code.className = 'item__code';
    code.textContent = valute.CharCode;

    const value = document.createElement('div');
    value.className = 'item__value';
    value.textContent = valute.Value;

    const currency = document.createElement('div');
    currency.className = 'item__currency';
    currency.textContent = 'руб.';

    item.appendChild(code);
    item.appendChild(value);
    item.appendChild(currency);

    itemsContainer.appendChild(item);
  });
});
