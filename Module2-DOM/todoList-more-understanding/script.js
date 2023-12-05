const newTaskText = document.querySelector('#new-task')
const addBtn = document.querySelectorAll('button')[0]
const incompleteTasks = document.querySelector('#incomplete-tasks')
const completeTasks = document.querySelector('#complete-tasks')
const completeNumber = document.querySelector('#complete-number')
const incompleteNumber = document.querySelector('#incomplete-number')

let todos = []

// User can enter to add
newTaskText.addEventListener('keypress', (e) => {
    if(e.code === "Enter") {
        const newTodo = {
            task: newTaskText.value,
            doneStatus: false
        }
        todos.push(newTodo)
        addTodo(newTodo)
        newTaskText.value = ''
    }
})

// Count incomplete todos
function countIncompleteTodos() {
    return todos.filter(todo => !todo.doneStatus).length
}
// Count completed todos
function countCompletedTodos() {
    return todos.filter(todo => todo.doneStatus).length
}
function updateCount() {
    const countIncomplete = countIncompleteTodos()
    const countComplete = countCompletedTodos()
    incompleteNumber.textContent = `Incomplete: ${countIncomplete}`
    completeNumber.textContent = `Complete: ${countComplete}`
}
// Initial update count
updateCount()

// Initial
window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo => addTodo(todo))
}

addBtn.addEventListener('click', () => {
    const newTodo = {
        task: newTaskText.value,
        doneStatus: false
    }
    todos.push(newTodo)
    addTodo(newTodo)

    // Clear input field after add
    newTaskText.value = ''
})

function addTodo(todo) {
    const liEl = document.createElement('li')
    const labelEl = document.createElement('label')
    labelEl.textContent = todo.task
    const doneButtonEl = document.createElement('button')
    doneButtonEl.setAttribute('class', 'done')
    doneButtonEl.textContent = 'Done'
    const deletebuttonEl = document.createElement('button')
    deletebuttonEl.setAttribute('class', 'delete')
    deletebuttonEl.textContent = 'Delete'

    // Debugging
    console.log(todo)
    console.log(todos)

    // Set to localStorage
    localStorage.setItem('todos', JSON.stringify(todos))

    // Display incomplete task
    if (todo.doneStatus === false) {
        incompleteTasks.appendChild(liEl)
        liEl.appendChild(labelEl)
        liEl.appendChild(doneButtonEl)
        liEl.appendChild(deletebuttonEl)
    }

    // Display complete task
    if (todo.doneStatus === true) {
        completeTasks.appendChild(liEl)
        liEl.appendChild(labelEl)
        liEl.appendChild(doneButtonEl)
        liEl.appendChild(deletebuttonEl)
        liEl.style.color = 'green'
    }

    // Done button on click
    doneButtonEl.addEventListener('click', () => {
        todo.doneStatus = true
        incompleteTasks.removeChild(liEl)
        completeTasks.appendChild(liEl)
        liEl.style.color = 'green'
        localStorage.setItem('todos', JSON.stringify(todos))
        updateCount()
    })

    // Delete button on click
    deletebuttonEl.addEventListener('click', () => {
        if (todo.doneStatus === false) {
            incompleteTasks.removeChild(liEl)
        } else {
            completeTasks.removeChild(liEl)
        }
        removeTodo(todo)
        updateCount()
    })
    // Update count (complete, incomplete)
    updateCount()
}

function removeTodo(todo) {
    const findIndex = todos.indexOf(todo)
    // > -1 = It's exist in array (can use != -1, !== -1)
    if (findIndex > -1) {
        todos.splice(findIndex, 1)
    }
    localStorage.setItem('todos', JSON.stringify(todos))
}