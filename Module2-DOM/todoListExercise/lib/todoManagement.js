import { Todo } from './todo.js'

function todoListManagement() {
    let todos = []
    function addTodo(desc) {
        const newTodo = new Todo(Todo.runningId, desc)
        todos.push(newTodo)
        return newTodo.id
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
    function getNumberOfDone() {
        const countDone = todos.filter(todo => todo.done === true);
        return countDone.length
    }
    function getNumberOfNotDone() {
        const countNotDone = todos.filter(todo => todo.done === false)
        return countNotDone.length
    }
    function clearTodo() {
        todos = []
    }
    function setItemToDone(doneId) {
        const index = findIndexTodo(doneId)
        // Change to done propety to true
        todos[index].setDone() // .setDone() from todo.js where create Todo class
    }
    return {
        addTodo,
        findTodo,
        findIndexTodo,
        removeTodo,
        getNumberOfDone,
        getNumberOfNotDone,
        clearTodo,
        getTodos,
        setItemToDone
    }
}

export { todoListManagement } 