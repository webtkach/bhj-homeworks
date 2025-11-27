const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const list = document.getElementById('tasks__list');

function createTask(title) {
  const task = document.createElement('div');
  task.className = 'task';

  const taskTitle = document.createElement('div');
  taskTitle.className = 'task__title';
  taskTitle.textContent = title;

  const remove = document.createElement('a');
  remove.href = '#';
  remove.className = 'task__remove';
  remove.innerHTML = '&times;';

  remove.addEventListener('click', (event) => {
    event.preventDefault();
    task.remove();
  });

  task.appendChild(taskTitle);
  task.appendChild(remove);
  list.appendChild(task);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  createTask(text);
  input.value = '';
});
