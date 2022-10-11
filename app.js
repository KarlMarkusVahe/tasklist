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
    const b = document.createElement("b")
    b.appendChild(document.createTextNode(task))
    b.style.display = "none"
    li.appendChild(b)
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

function addTaskLS(task) {
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function deleteTaskLS(task) {
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((taskLS, taskIndex) => {
        if(taskLS === task){
            tasks.splice(taskIndex, 1)
        }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function getTasks(){
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.forEach((task) => {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(task))
        li.className = 'collection-item'
        const b = document.createElement("b")
        b.appendChild(document.createTextNode(task))
        b.style.display = "none"
        li.appendChild(b)
        const a = document.createElement('a')
        a.appendChild(document.createTextNode('X'))
        a.className = 'blue-text text-darken-2 secondary-content'
        a.setAttribute('href', '#')
        li.appendChild(a)
        // add to list
        const ul = document.querySelector('ul')
        ul.appendChild(li)
    })
}
function filter(e){
    var input, filter1, ul, li, a, i, txtvalue;
    input = document.getElementById('task1');
    filter1 = input.value.toUpperCase();
    ul = document.getElementById('minu');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("b")[0];
        txtvalue = a.textContent || a.innerText;
        if (txtvalue.toUpperCase().indexOf(filter1) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
        //e.preventDefault()
    }
}