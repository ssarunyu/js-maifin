import { todoListManagement } from "./lib/todoManagement.js"
import { showTodoItem, showNumberOfDone, showNumberOfNotDone } from './UI/todoListUI.js'
import { addTodoHandler, notDoneButtonHandler } from './eventHandler/eventController.js'
import { Todo } from "./lib/todo.js"
const td = todoListManagement()

// Function to show in HTML based on todoListUI.js
// Get data from todoManagement.js
// todo.js just class to create objects
// addTodo in todoManagement.js only return todo.id


const addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', addTodoHandler())