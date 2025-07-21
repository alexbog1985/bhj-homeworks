const products = [...document.querySelectorAll(".product")];
let cart = [];


products.forEach(product => {
  const id = product.dataset.id;
  const controls = product.querySelector('.product__quantity-controls');
  const value = product.querySelector('.product__quantity-value');
  const addButton = product.querySelector('.product__add');

  controls.addEventListener('click', (e) => {
    if (e.target.classList.contains('product__quantity-control_inc')) {
      value.textContent = +value.textContent + 1;
    }
    if (e.target.classList.contains('product__quantity-control_dec') && +value.textContent > 1)  {
      value.textContent = +value.textContent - 1;
    }
  });
  addButton.addEventListener('click', () => {
    const quantity = +value.textContent;
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: id,
        quantity: quantity,
        title: product.querySelector('.product__title').textContent.trim(),
        image: product.querySelector('.product__image').src
      });
    }
    value.textContent = 1;
    renderCart();
  })
})

function renderCart() {
  const cartProducts = document.querySelector('.cart__products');
  cartProducts.innerHTML = '';
  cart.forEach(item => {
    const product = document.createElement('div');
    product.className = 'cart__product';
    product.dataset.id = item.id;
    product.innerHTML = `
 <img class="cart__product-image" src="${item.image}" alt="">
 <div class="cart__product-count">${item.quantity}</div>
 `;
    cartProducts.appendChild(product);
  });
}