const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let holes = [];
let score = 0;
let misses = 0;

for (let i = 1; i <= 9; i++) {
  holes.push(document.getElementById(`hole${i}`));
}

function holeClicker(elements) {
  elements.forEach((element) => {
    element.onclick = () => {
      if (element.classList.contains("hole_has-mole")) {
        score++;
        dead.textContent = score;
      } else {
        misses++;
        lost.textContent = misses;
      }

      if (score == 10) {
        alert("Вы выиграли!");
        location.reload(true);
      } else if (misses == 5) {
        alert("Вы проиграли!");
        location.reload(true);
      }
    };
  });
}

holeClicker(holes);
