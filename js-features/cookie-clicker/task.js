const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

const speedClickElement = document.createElement("div");
speedClickElement.textContent = "Скорость клика: 0";
clickerCounter.parentNode.insertBefore(
  speedClickElement,
  clickerCounter.nextSibling
);

function clicker(element, displayElement) {
  let clicked = false;
  let count = displayElement.textContent;
  let firstClickTime;
  let lastClickTime;

  element.onclick = () => {
    displayElement.textContent = count++;

    if (!clicked) {
      element.width = "220";
    } else {
      element.width = "200";
    }
    clicked = !clicked;

    const now = Date.now();
    if (!firstClickTime) {
      firstClickTime = now;
      lastClickTime = now;
    } else {
      const totalSeconds = (now - firstClickTime) / 1000;
      const clicksPersecond = count / totalSeconds;
      speedClickElement.textContent = `Скорость клика: ${clicksPersecond.toFixed(
        2
      )}`;
    }
    lastClickTime = now;
  };
}

clicker(cookie, clickerCounter);
