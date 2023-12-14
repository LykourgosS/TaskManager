import { Task } from './Task.js'

export class TaskCreator {
    static tasks = []

    static titleAndDescriptionAreFilled(title, description) {
        return !Boolean(title && description)
    }

    static getTaskWith(title) {
        return tasks.find(x => x.title == title)
    }

    static taskTitleExists(title) {
        return tasks.find(x => x.title == title) != null
    }

    static addTask(title, description) {
        let task = new Task(title, description)
        tasks.push(task)
        return task
    }
}