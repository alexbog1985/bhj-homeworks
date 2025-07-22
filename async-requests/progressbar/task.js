const form = document.querySelector('#form');
const progress = document.querySelector('#progress');
const URL = 'https://students.netoservices.ru/nestjs-backend/upload';


function updateProgress(e) {
  if (e.lengthComputable) {
    progress.value = e.loaded / e.total;
  }
}

async function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', URL);
    xhr.upload.addEventListener('progress', updateProgress, false);
    xhr.send(formData);
  } catch (e) {
    console.error(e);
  }
}

form.addEventListener('submit', handleSubmit);
