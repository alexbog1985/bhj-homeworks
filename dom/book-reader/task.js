const bookControlFontSizes = [...document.querySelectorAll('.font-size')]
const book = document.querySelector('#book');

function listeners() {
  bookControlFontSizes.forEach((el) => el.addEventListener('click', changeFontSize))
}

function changeFontSize(event) {
  event.preventDefault();

  bookControlFontSizes.forEach(el => {
    book.classList.remove(el.classList[1]);
    el.classList.remove('font-size_active');
  });

  event.target.classList.add('font-size_active');
  book.classList.add(event.target.classList[1]);
}

listeners();