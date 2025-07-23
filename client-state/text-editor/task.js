const editor = document.querySelector('#editor');

let savedText = ''

function init() {
  createClearButton();
  eventHandlers();
}

function eventHandlers () {
  editor.addEventListener('change', getText);
  window.addEventListener('DOMContentLoaded', loadFromLocalStorage);
}

function createClearButton() {
  const clearButton = document.createElement('button');
  clearButton.classList.add('clear-button');
  clearButton.textContent = 'Очистить содержимое';
  editor.after(clearButton);

  clearButton.addEventListener('click', clearEditor);
}

function getText(e) {
  const text = e.target.value;
  saveToLocalStorage(text);
}

function saveToLocalStorage (text) {
  localStorage.setItem('editorText', text);
}

function clearEditor (e) {
  e.preventDefault()
  editor.value = '';
  saveToLocalStorage('');
}

function loadFromLocalStorage () {
  savedText = localStorage.getItem('editorText');
  if (savedText) {
    editor.value = savedText;
  }
}

init();