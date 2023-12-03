// Don't care .json file we import from f1Data.js
// We run on 'browser' to see the result so here we use ES Module (import, export)
// In other ways if it's in 'Node.js' (to npm test) we use CommonJS (require, module.exports)
import { f1DriverData } from './data/f1Data.js'

console.log(f1DriverData)

// Nested functions
function itemList(userItems) {

    const showItems = (items) => {
        const ui = document.querySelector('#items')
        // Clear old data before search so in html only show what we search
        ui.textContent = '' // You can comment this line to see different
        items.forEach((allItems) => {
            const liElement = document.createElement('li')
            liElement.textContent = `Team: ${allItems.Team} Driver: ${allItems.Driver}`
            ui.appendChild(liElement)
        })
    }

    // Case insensitive
    const filterItemsHandler = () => {
        // Get user input and change to lowercase
        const searchInputValue = document.querySelector('input').value.toLowerCase()
        // Track to see in console what user type
        console.log(searchInputValue)
        const filteredItems = userItems.filter((item) => {
            // Check user input with data case insensitive
            return item.Team.toLowerCase().includes(searchInputValue)
        })
        showItems(filteredItems)
    }    

    // Default page when not have user input
    const initalPage = () => {
        const input = document.querySelector('input')
        input.addEventListener('input', filterItemsHandler)
        // Here where we show the default of data
        // btw we flexible with parameter name 'userItems' where declare variables in 'function itemList'
        showItems(userItems)
    }

    return {
        showItems,
        filterItemsHandler,
        initalPage
    }
}

export { itemList }
const { initalPage } = itemList(f1DriverData)
initalPage()