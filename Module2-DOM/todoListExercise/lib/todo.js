class Todo {
    static runningId = 1
    constructor(id = Todo.runningId++, description, done = false) {
        this.id = id
        this.description = description
        this.done = done
    }
    getTodo() {
        return {id: this.id, description: this.description}
    }
    setDescription(newDescription) {
        this.description = newDescription
    }
    setDone() {
        this.done = true
    }
}

export { Todo }