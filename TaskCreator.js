const { Task } = require('./Task')

class TaskCreator {
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
        tasks.push(new Task(title, description))
    }
}

module.exports = { TaskCreator }