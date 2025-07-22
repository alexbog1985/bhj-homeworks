const requestURL = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
const items = document.querySelector('#items');
const loader = document.querySelector('#loader');
const item = document.querySelector('.item');

async function addCourses() {
  const response = await fetch(requestURL);
  if (!response.ok) {
    throw new Error('Ошибка запроса: ' + response.statusText);
  }
  const jsonData = await response.json();
  handleData(jsonData);
  item.remove();
  loader.remove();

}

function handleData(data) {
  const valutes = data.response['Valute']

  for (const key in valutes) {
      const itemCode = valutes[key]['CharCode'];
      const itemValue = valutes[key]['Value'];
      const itemCurrency = 'руб.';
    createHTML(itemCode, itemValue, itemCurrency);
  }
}

function createHTML(code, value, currency) {
  const element = document.createElement('div');
  element.className = 'item';
  element.innerHTML = `
    <div class="item__code">${code}</div>
    <div class="item__value">${value}</div>
    <div class="item__currency">${currency}</div>
  `;
  items.appendChild(element);
}

  // console.log(itemCode, itemValue, itemCurrency);

window.addEventListener('DOMContentLoaded', () => {
  addCourses();
})