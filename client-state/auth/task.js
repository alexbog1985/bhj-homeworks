const url = 'https://students.netoservices.ru/nestjs-backend/auth';
const form = document.querySelector('#signin__form');
const welcomeBlock = document.getElementById('welcome');
const userIdElement = document.getElementById('user_id');
const signinBlock = document.querySelector('.signin');


const logoutButton = document.createElement('button');
logoutButton.classList.add('btn');
logoutButton.textContent = 'Выйти';


function handleLogout() {
  localStorage.removeItem('user_id');

  welcomeBlock.classList.remove('welcome_active');
  signinBlock.classList.add('signin_active');
  logoutButton.remove();
  form.reset();
}

async function sendFormData(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`Ошибка сервера: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Произошла ошибка:', error.message);
    throw error;
  }
}

async function formSubmit(event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    return;
  }

  try {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const response = await sendFormData(url, data);

    if (response.success) {
      localStorage.setItem('user_id', response.user_id);

      welcomeBlock.classList.add('welcome_active');
      userIdElement.textContent = response.user_id;
      welcomeBlock.append(logoutButton);

      signinBlock.classList.remove('signin_active');
      form.reset();

    } else {
      console.log('Неверный логин/пароль');
    }
  } catch (error) {
    console.error('Ошибка при отправке формы:', error);
  }
}

function checkAuthOnLoad() {
  const savedUserId = localStorage.getItem('user_id');
  if (savedUserId) {
    welcomeBlock.classList.add('welcome_active');
    userIdElement.textContent = savedUserId;
    signinBlock.classList.remove('signin_active');
    welcomeBlock.append(logoutButton);
  }
}

function eventHandlers() {
  form.addEventListener('submit', formSubmit);
  logoutButton.addEventListener('click', handleLogout);
}

window.addEventListener('DOMContentLoaded', () => {
  eventHandlers();
  checkAuthOnLoad();
});