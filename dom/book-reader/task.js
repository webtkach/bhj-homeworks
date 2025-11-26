document.addEventListener('DOMContentLoaded', () => {
  const book = document.getElementById('book');
  const fontControls = document.querySelectorAll('.book__control_font-size .font-size');

  fontControls.forEach(control => {
    control.addEventListener('click', (event) => {
      event.preventDefault();

      fontControls.forEach(item => item.classList.remove('font-size_active'));
      control.classList.add('font-size_active');

      book.classList.remove('book_fs-small', 'book_fs-big');

      const size = control.dataset.size;
      if (size === 'small') {
        book.classList.add('book_fs-small');
      } else if (size === 'big') {
        book.classList.add('book_fs-big');
      }
    });
  });
});