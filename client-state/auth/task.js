const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');
const STORAGE_KEY = 'user_id';

function showWelcome(id) {
  userIdSpan.textContent = id;
  welcome.classList.add('welcome_active');
  signin.classList.remove('signin_active');
}

const savedId = localStorage.getItem(STORAGE_KEY);
if (savedId) {
  showWelcome(savedId);
}

signinForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  const formData = new FormData(signinForm);

  xhr.open('POST', signinForm.action);
  xhr.responseType = 'json';

  xhr.addEventListener('load', () => {
    const response = xhr.response;

    if (response && response.success) {
      const id = response.user_id;
      localStorage.setItem(STORAGE_KEY, id);
      showWelcome(id);
    } else {
      alert('Неверный логин/пароль');
    }
  });

  xhr.send(formData);
});
