// ******* ถ้าออกงี้ยากไป💀 *******
class Todo {
    constructor(id, description) {
      this.id = id
      this.description = description
    }
  
    getTodo() {
      return { id: this.id, description: this.description }
    }
  
    setDescription(newDescription) {
      this.description = newDescription
    }
}
  
class TodoManagement {
    constructor() {
      this.todos = []
    }
  
    addTodo(description) {
      const newTodo = new Todo(this.todos.length + 1, description)
      this.todos.push(newTodo)
      return newTodo.id
    }
  
    findTodo(searchId) {
      return this.todos.find((todo) => todo.id === searchId)
    }

    findIndexTodo(searchId) {
        const index = this.todos.findIndex((todo) => todo.id === searchId)
        return index
    }

    removeTodo(removeId) {
        const index = this.todos.findIndex((todo) => todo.id === removeId)
        this.todos.splice(index, 1)
        return this.todos
    }
  
    getTodos() {
      return this.todos.map((todo) => todo.getTodo())
    }
}

const a = new Todo(1, 'hi')
const todoManagement = new TodoManagement()
// ADD
todoManagement.addTodo('task 1')
todoManagement.addTodo('task 2')
todoManagement.addTodo('task 3')
// FIND
const testFind = todoManagement.findTodo(1)
// FIND INDEX
const testfindIndexTodo = todoManagement.findIndexTodo(1)
// REMOVE
const testRemoveTodo = todoManagement.removeTodo(1)
// GET TODOS
const testGetTodos = todoManagement.getTodos()
console.log('testFind',testFind)
console.log('testfindIndexTodo',testfindIndexTodo)
console.log('testRemoveTodo',testRemoveTodo)
console.log('testGetTodos',testGetTodos)