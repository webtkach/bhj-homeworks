const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  xhr.upload.onprogress = (e) => {
    if (e.lengthComputable) {
      progress.value = e.loaded / e.total;
    }
  };

  xhr.send(formData);
});