import { todoListManagement } from '../lib/todoManagement.js'
import { notDoneButtonHandler } from '../eventHandler/eventController.js'
const td = todoListManagement()

function showTodoItem(newId, newDescription) {
    const listTodo = document.querySelector('#listTodo')
    // ====== Fucking complex ways ======
    // const divEl = document.createElement('div')
    // const pEl = document.createElement('p')
    // const buttonElDone = document.createElement('button')
    // const buttonEl2Remove = document.createElement('button')
    // buttonElDone.textContent = 'Not done'
    // buttonEl2Remove.textContent = 'Remove'
    // divEl.setAttribute('class', 'todoItem')
    // divEl.setAttribute('id', newId)
    // pEl.textContent = newDescription
    // listTodo.appendChild(divEl)
    // divEl.appendChild(pEl)
    // divEl.appendChild(buttonElDone)
    // divEl.appendChild(buttonEl2Remove)

    // Easy but don't know this right or not💀
    listTodo.innerHTML += `<div class="todoItem" id="${newId}">
    <p>${newDescription}</p>
    <button>Not done</button>
    <button>remove</button>
    </div>`
}

function showNumberOfDone(numberOfDone) {
    const doneUI = document.querySelector('#done')
    // FIXME: more dynamic
    doneUI.textContent = `Number of Done: ${numberOfDone}`
}

function showNumberOfNotDone(numberOfNotDone) {
    const notDoneUI = document.querySelector('#notDone')
    // FIXME: more dynamic
    notDoneUI.textContent = `Number of Not Done: ${numberOfNotDone}`
}

function removeTodoItem(removeId) {
    td.getTodos().splice(td.findIndexTodo(removeId), 1)
}

export { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem }