const taskForm = document.querySelector("#tasks__form");
const taskInput = document.querySelector("#task__input");

function eventListeners() {
  taskForm.addEventListener("submit", sendData);
}

function sendData(e) {
  e.preventDefault();
  if (taskInput.value) addTask(taskInput.value);
}

function addTask(taskText) {
  const tasksList = document.querySelector("#tasks__list");

  const newTask = document.createElement('div');
  newTask.className = 'task';

  const taskTitle = document.createElement('div');
  taskTitle.className = 'task__title';
  taskTitle.textContent = taskText;

  const taskRemove = document.createElement('a')
  taskRemove.className = 'task__remove';
  taskRemove.innerHTML = '&times;';
  taskRemove.addEventListener('click', (e) => {
    e.preventDefault();
    newTask.remove();
  });

  newTask.appendChild(taskTitle);
  newTask.appendChild(taskRemove);
  tasksList.appendChild(newTask);
}

eventListeners();