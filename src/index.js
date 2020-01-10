document.addEventListener("DOMContentLoaded", () => {
  let taskList = document.querySelector('#list')

  let form = document.querySelector('form')

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let inputTask = document.querySelector('#new-task-description')
    let newTask = inputTask.value

    let list = document.createElement('li')
    list.innerText = newTask
    taskList.appendChild(list)
    inputTask.value = ""
  })
});