function getHole(index) {
  return document.getElementById(`hole${index}`);
}

const deadCounter = document.getElementById("dead");
const lostCounter = document.getElementById("lost");

let dead = 0;
let lost = 0;

for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);

  hole.onclick = function() {
    if (hole.classList.contains("hole_has-mole")) {
      dead++;
      deadCounter.textContent = dead;
    } else {
      lost++;
      lostCounter.textContent = lost;
    }

    if (dead === 10) {
      alert("Вы победили!");
      resetGame();
    }

    if (lost === 5) {
      alert("Вы проиграли!");
      resetGame();
    }
  }
}

function resetGame() {
  dead = 0;
  lost = 0;
  deadCounter.textContent = 0;
  lostCounter.textContent = 0;
}