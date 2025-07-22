const pollUrl = 'https://students.netoservices.ru/nestjs-backend/poll';
const pollTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');

async function loadPoll(method) {
  try {
    const response = await fetch(pollUrl, {method, headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
    if (!response.ok) {
      throw new Error('Ошибка: ' + response.status);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

function addHtml(data) {
  const answers = data['data']['answers']
  pollTitle.innerHTML = `
    <p>${data['data']['title']}</p>
  `;

  answers.forEach(answer => {
    const answerBtn = `
    <button class="poll__answer">${answer}</button>
    `
    pollAnswers.insertAdjacentHTML('beforeend', answerBtn);
  })
}

function handlerEvent() {
  document.querySelector('#poll__answers').addEventListener('click', getAnswer);
}

function getAnswer(e) {
  if (!e.target.closest('.poll__answer')) return;
    // alert('Спасибо, ваш голос засчитан!')
  addModal();
  console.log(e.target)
}

function addModal () {
  const modal = document.createElement('div');
  modal.style.display = 'block';
  modal.style.position = 'fixed';
  modal.style.zIndex = '1';
  modal.style.left = '0';
  modal.style.top = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.overflow = 'auto';
  modal.style.background = 'rgba(0,0,0,0.4)';
  document.body.append(modal);

  const modalContent = document.createElement('div');
  modalContent.innerHTML = 'Спасибо, ваш голос засчитан!<hr><a href="" style="float: right;" id="modal__close">Закрыть</a>';
  modalContent.style.backgroundColor = 'white';
  modalContent.style.margin = '15% 15%';
  modalContent.style.padding = '30px';
  modalContent.style.border = '1px solid black';
  modal.append(modalContent);

  modalContent.querySelector('#modal__close').addEventListener('click', () => {
    modal.remove();
  });
}

window.addEventListener('DOMContentLoaded', () => {
  loadPoll('GET')
    .then(addHtml)
    .then(handlerEvent);
});