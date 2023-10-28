class Todo {
    static autoId = 1
    constructor(description) {
        this.id = Todo.autoId++
        this.description = description
    }
    getTodo() {
        return {id: this.id, description: this.description}
    }
    setDescription(newDescription) {
        this.description = newDescription
    }
}

function todoManagement() {
    let todos = []
    function addTodo(desc) {
        const newTodo = new Todo(desc)
        return todos.push(newTodo)
    }
    function findTodo(searchId) {
        return todos.find(todo => todo.id === searchId)
    }
    function findIndexTodo(searchId) {
        return todos.findIndex(todo => todo.id === searchId)
    }
    function removeTodo(removeId) {
        todos.splice(findIndexTodo(removeId), 1)
    }
    function getTodos() {
        return todos
    }

    return {
        addTodo,
        getTodos,
        findTodo,
        findIndexTodo,
        removeTodo
    }
}

const { addTodo, getTodos, findTodo, findIndexTodo, removeTodo } = todoManagement()
addTodo('task1')
console.log(addTodo('task2'))
console.log(getTodos())
console.log(findTodo(1))
console.log(findIndexTodo(1))
removeTodo(1)
console.log('After remove by id', getTodos())

