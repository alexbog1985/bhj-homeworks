const taskForm = document.querySelector("#tasks__form");
const taskInput = document.querySelector("#task__input");

function eventListeners() {
  taskForm.addEventListener("submit", sendData);
}

function sendData(e) {
  e.preventDefault();
  if (taskInput.value.trim()) {
    addTask(taskInput.value)
    taskInput.value = "";
  }
}

function addTask(taskText) {
  const tasksList = document.querySelector("#tasks__list");
  tasksList.insertAdjacentHTML('afterbegin', `
    <div class="task">
      <div class="task__title">
        ${taskText}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
   `);

  const taskRemove = tasksList.querySelector(".task__remove");
  taskRemove.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.closest('.task').remove();
  })

  // const newTask = document.createElement('div');
  // newTask.className = 'task';
  //
  // const taskTitle = document.createElement('div');
  // taskTitle.className = 'task__title';
  // taskTitle.textContent = taskText;
  //
  // const taskRemove = document.createElement('a')
  // taskRemove.className = 'task__remove';
  // taskRemove.innerHTML = '&times;';
  // taskRemove.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   newTask.remove();
  // });
  //
  // newTask.appendChild(taskTitle);
  // newTask.appendChild(taskRemove);
  // tasksList.appendChild(newTask);
}

eventListeners();