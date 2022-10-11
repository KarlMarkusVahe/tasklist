const form  = document.querySelector('form')
const taskInput = document.querySelector('#task')
const taskList = document.querySelector('ul')
const delAllTasks = document.querySelector('#del-tasks')

form.addEventListener('submit', addTask)
taskList.addEventListener('click', deleteTask)
delAllTasks.addEventListener('click', deleteAllTasks)
document.addEventListener('DOMContentLoaded', getTasks)

function addTask(e){
    // create list item
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = 'collection-item'
    const a = document.createElement('a')
    a.appendChild(document.createTextNode('X'))
    a.className = 'blue-text text-darken-2 secondary-content'
    a.setAttribute('href', '#')
    li.appendChild(a)
    // add to list
    const ul = document.querySelector('ul')
    ul.appendChild(li)
    addTaskLS(taskInput.value)
    taskInput.value = ''
    e.preventDefault()
}

function deleteTask(e){
    if(e.target.textContent == 'X'){
        if(confirm('Are you sure to delete this task?')){
            e.target.parentElement.remove()
            deleteTaskLS(e.target.parentElement.textContent.slice(0,-1))
        }
    }
}

function deleteAllTasks(e){
    //taskList.innerHTML = ''
    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
    localStorage.removeItem('tasks')
}