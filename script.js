import { TaskCreator } from "./modules/TaskCreator.js"

function tryAddTask(title, description) {
    if (TaskCreator.titleAndDescriptionAreFilled(title, description)) {
        if (!TaskCreator.taskTitleExists(title)) {
            return TaskCreator.addTask(title, description)
        } else {
            alert(`Task with title: [${title}] already exists in tasks.  Task cannot be created!`)
        }
    } else {
        alert("Title or description is missing. Task cannot be created!")
    }
    return null
}

function addTaskHTML(task) {
    let htmlTask = document.createElement("div")
    htmlTask.id = task.title

    htmlTask.innerHTML = `
<strong>${task.title}</strong> - ${task.description}

<div class="taskStatus">${task.status}</div>
<button id="changeTaskStatus-${task.title}">Change Status</button>
`;

    let taskList = document.getElementById("taskList")
    taskList.appendChild(htmlTask)

    document.getElementById(`changeTaskStatus-${task.title}`).addEventListener("click", () => changeTaskStatus(task.title))
}

function clearHTMLTaskList() {
    let taskList = document.getElementById("taskList")
    while (taskList.firstChild) {
        taskList.removeChild(taskList.lastChild)
    }
}

function fillHTMLTaskList() {
    clearHTMLTaskList()
    TaskCreator.tasks.forEach(addTaskHTML);
}

export function addTask() {
    var title = document.getElementById("taskTitle")
    var description = document.getElementById("taskDescription")
    var newTask = tryAddTask(title.value, description.value)
    if (newTask != null) {
        addTaskHTML(newTask)
        title.value = ""
        description.value = ""
    }
}

export function changeTaskStatus(title) {
    TaskCreator.changeTaskStatus(title);
    fillHTMLTaskList()
}

document.getElementById("addTask").addEventListener("click", addTask)