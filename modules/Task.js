export class Task {
    constructor(title, description) {
        this.title = title
        this.description = description
        this.status = Task.Status.Incomplete
    }
    
    static Status = {
        Incomplete: 0,
        Completed: 1
    }
}