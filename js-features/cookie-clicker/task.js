const cookie = document.getElementById('cookie');
const counterEl = document.getElementById('clicker__counter');

let counter = 0;
let isBig = false;

cookie.addEventListener('click', () => {
  counter++;
  counterEl.textContent = counter;

  if (isBig) {
    cookie.style.width = '200px';
    cookie.style.height = '200px';
  } else {
    cookie.style.width = '280px';
    cookie.style.height = '280px';
  }

  isBig = !isBig;
});