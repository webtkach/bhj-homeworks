document.addEventListener('DOMContentLoaded', () => {
  const rotators = document.querySelectorAll('.rotator');

  rotators.forEach(rotator => {
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
    if (!cases.length) return;

    let index = cases.findIndex(el => el.classList.contains('rotator__case_active'));
    if (index === -1) index = 0;

    function rotate() {
      cases[index].classList.remove('rotator__case_active');

      index = (index + 1) % cases.length;
      const current = cases[index];
      const speed = Number(current.dataset.speed) || 1000;
      const color = current.dataset.color;

      current.classList.add('rotator__case_active');
      if (color) current.style.color = color;

      setTimeout(rotate, speed);
    }

    const first = cases[index];
    if (first.dataset.color) first.style.color = first.dataset.color;
    const initialSpeed = Number(first.dataset.speed) || 1000;
    setTimeout(rotate, initialSpeed);
  });
});