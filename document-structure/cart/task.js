const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

products.forEach(product => {
  const decBtn = product.querySelector('.product__quantity-control_dec');
  const incBtn = product.querySelector('.product__quantity-control_inc');
  const valueEl = product.querySelector('.product__quantity-value');
  const addBtn = product.querySelector('.product__add');

  decBtn.addEventListener('click', () => {
    let value = parseInt(valueEl.textContent, 10);
    if (value > 1) {
      valueEl.textContent = value - 1;
    }
  });

  incBtn.addEventListener('click', () => {
    let value = parseInt(valueEl.textContent, 10);
    valueEl.textContent = value + 1;
  });

  addBtn.addEventListener('click', () => {
    const id = product.dataset.id;
    const quantity = parseInt(valueEl.textContent, 10);
    const imgSrc = product.querySelector('.product__image').getAttribute('src');

    let cartProduct = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);

    if (cartProduct) {
      const countEl = cartProduct.querySelector('.cart__product-count');
      const current = parseInt(countEl.textContent, 10);
      countEl.textContent = current + quantity;
    } else {
      cartProduct = document.createElement('div');
      cartProduct.className = 'cart__product';
      cartProduct.dataset.id = id;

      const img = document.createElement('img');
      img.className = 'cart__product-image';
      img.src = imgSrc;

      const countEl = document.createElement('div');
      countEl.className = 'cart__product-count';
      countEl.textContent = quantity;

      cartProduct.appendChild(img);
      cartProduct.appendChild(countEl);
      cartProducts.appendChild(cartProduct);
    }
  });
});