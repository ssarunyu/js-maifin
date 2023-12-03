import {
    todoListManagement
} from '../lib/todoManagement.js'
import {
    Todo
} from '../lib/todo.js'
import {
    showTodoItem,
    showNumberOfDone,
    showNumberOfNotDone,
    removeTodoItem
} from '../UI/todoListUI.js'

const td = todoListManagement()
const addBtn = document.querySelector('#addBtn')

let newtodoList

function addTodoHandler() {
    addBtn.addEventListener('click', () => {
        const input = document.querySelector('input').value
        if (input != '') {
            // All of add todo method
            td.addTodo(input)
            console.log('Done:', td.getNumberOfDone())
            console.log('Not done:', td.getNumberOfNotDone())
            newtodoList = new Todo(undefined, input, '')
            showTodoItem(newtodoList.id, newtodoList.description)

            // Update display number when click add
            const countNotDone = td.getNumberOfNotDone() // get number from todoManagement.js
            showNumberOfNotDone(countNotDone) // show in display by todoListUI.js file
            const countDone = td.getNumberOfDone() // get number from todoManagement.js
            showNumberOfDone(countDone) // show in display by todoListUI.js file
            console.log(td.getTodos())

            // Update done when user click not done button
            const doneBtn = document.querySelectorAll('.todoItem button')
            doneBtn.forEach(btn => {
                btn.addEventListener('click', () => {
                    notDoneButtonHandler(btn)
                    // Show array update in console.log
                    console.log(td.getTodos())
                })
            })
        }
    })
}

// FIXME: I don't know how to do without get parameter 'event'
function notDoneButtonHandler(event) {
    event.style.backgroundColor = 'green'
    event.style.color = 'white'
    event.textContent = 'Done'
    // FIXME: If create more than 1 and then click done it's not update
    td.setItemToDone(newtodoList.id)
    // Update number of done, number of not done
    const countNotDone = td.getNumberOfNotDone() // get number from todoManagement.js
    showNumberOfNotDone(countNotDone) // show in display by todoListUI.js file
    const countDone = td.getNumberOfDone() // get number from todoManagement.js
    showNumberOfDone(countDone) // show in display by todoListUI.js file
}

// TODO: Coding this!
function removeButtonHandler() {
    removeTodoItem(removeId) // from todoListUI.js
    td.removeTodo(removeId) // from todoManagement.js
}

export {
    addTodoHandler,
    notDoneButtonHandler,
    removeButtonHandler
}