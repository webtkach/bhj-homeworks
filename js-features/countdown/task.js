const timerEl = document.getElementById('timer');
let counter = Number(timerEl.textContent);

const intervalId = setInterval(() => {
  counter -= 1;
  timerEl.textContent = counter;

  if (counter <= 0) {
    clearInterval(intervalId);
    alert("Вы победили в конкурсе!"); 
  }
}, 1000);