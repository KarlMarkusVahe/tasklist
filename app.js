const form = document.querySelector("form")
const taskinput = document.querySelector("#task")
const taskList = document.querySelector('ul')
const delAllTasks = document.querySelector('#del-tasks')

form.addEventListener("submit", addTask)
taskList.addEventListener('click', deleteTask)
delAllTasks.addEventListener('click', deleteallTasks)
document.addEventListener('DOMContentLoaded')

function addTask(e){
    console.log(taskinput.value)
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(taskinput.value))
    li.className = "collection-item"
    const a = document.createElement("a")
    a.appendChild(document.createTextNode('X'))
    a.className = "blue-text text-darken-2 secondary-content"
    a.setAttribute("href", "#")
    li.appendChild(a)
    const ul = document.querySelector("ul")
    ul.appendChild(li)
    addTaskLS(taskinput.value)
    taskinput.value = ''
    e.preventDefault()
}

function deleteTask(e) {
    if(e.target.textContent == 'X'){
        if(confirm('yous sure'))
            e.target.parentElement.remove()
    }

}

function addTaskLS(task) {
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem(('tasks')))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function deleteTaskLS(task) {
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem(('tasks')))
    }
    tasks.forEach((taskLS), taskIndex) => {
        if (taskLS === task){
            tasks.splice(taskIndex, 1)
        }
    })

}