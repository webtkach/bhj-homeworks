const titleEl = document.getElementById('poll__title');
const answersEl = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('load', () => {
  const data = xhr.response;
  if (!data || !data.data) return;

  titleEl.textContent = data.data.title;
  answersEl.innerHTML = '';

  data.data.answers.forEach(answer => {
    const btn = document.createElement('button');
    btn.className = 'poll__answer';
    btn.textContent = answer;
    btn.addEventListener('click', () => {
      alert('Спасибо, ваш голос засчитан!');
    });
    answersEl.appendChild(btn);
  });
});