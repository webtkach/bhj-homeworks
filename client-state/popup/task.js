const modal = document.getElementById('subscribe-modal');
const closeBtn = modal.querySelector('.modal__close');

if (!document.cookie.includes('modalClosed=1')) {
  modal.classList.add('modal_active');
}

closeBtn.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  document.cookie = 'modalClosed=1; path=/; max-age=31536000';
});