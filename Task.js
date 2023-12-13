class Task {
    constructor(title, description) {
        this.title = title
        this.description = description
        this.status = Status.Incomplete
    }

    static Status = {
        Incomplete: 0,
        Completed: 1
    }
}

module.exports = { Task }