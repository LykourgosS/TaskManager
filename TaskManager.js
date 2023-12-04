class Task {
    constructor(title, description) {
        this.title = title
        this.description = description
        this.status = Status.Incomplete
    }
}

function taskCanBeCreated(title, description) {
    console.log(title && description)
    if (Boolean(title && description)) {
        return Boolean(true)
    } else {
        alert("Title or description is missing. Task cannot be created!")
        return Boolean(false)
    }
}

function addTask() {
    var title = document.getElementById("taskTitle").v
    var description = document.getElementById("taskDescription")
    if (taskCanBeCreated(title, description)) {
        tasks.push(new Task(title, description))
    }
}

const tasks = []

const Status = {
    Incomplete: 0,
    Completed: 1
}