const rotators = [...document.querySelectorAll('.rotator__case')];
let idx = 0;
let speed = 1000;
let color;

function setColor(el, color) {
  el.style.color = color;
}

function changeRotator() {
  rotators.forEach(rotator => {rotator.classList.remove('rotator__case_active');})
  idx = (idx + 1) % rotators.length;
  let rotator = rotators[idx];
  rotator.classList.add('rotator__case_active');
  speed = parseInt(rotator.dataset.speed || 1000);
  color = rotator.dataset.color;
  setColor(rotator, color);
  setTimeout(changeRotator, speed);
}

changeRotator();