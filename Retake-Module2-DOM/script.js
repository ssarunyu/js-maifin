import {
    data
} from './reservationData.js'

let reservationArr = []
let limitAmount = 83000
const showReservation = document.querySelector('.show-reservation')
const qtyInput = document.querySelector('#qty-input')
const userAmount = document.querySelector('.user-amount')
const totalRevenueDisplay = document.querySelector('.total-revenue')
const searchBar = document.querySelector('#search-bar')

// Initial reservationArr to data in reservationData.js
reservationArr = data
console.log(reservationArr)

// Create display in stupid p tag not cool not beautiful
function showData(items) {
    showReservation.innerHTML = ''
    items.forEach(item => {
        const pEl = document.createElement('p')
        const cancelBtn = document.createElement('button')
        cancelBtn.textContent = 'Cancel Ticket'
        pEl.setAttribute('id', item.name)
        pEl.textContent = `Name: ${item.name}, Tickets Quantity: ${item.qty} Tickets, Zone: ${item.zone}, Tickets Total Amount: ${item.totalAmount.toLocaleString()}`
        pEl.appendChild(cancelBtn)
        showReservation.appendChild(pEl)
        // Define remove btn
        removeReservation(cancelBtn)
    })
    // Update text amount of user
    displayTotalQuantity()
    // Initial show Total Revenue
    updateDisplayTotalRevenue()
}

// If create in display table
// function showData(items) {
//     showReservation.innerHTML = '<table></table>'; // Initialize an empty table
//     const table = showReservation.querySelector('table');
//     // Create a header row
//     const headerRow = document.createElement('tr');
//     // Create header cells for each piece of data
//     const nameHeader = document.createElement('th');
//     nameHeader.textContent = 'Name';
//     const qtyHeader = document.createElement('th');
//     qtyHeader.textContent = 'Qty Ticket';
//     const zoneHeader = document.createElement('th');
//     zoneHeader.textContent = 'Zone';
//     const amountHeader = document.createElement('th');
//     amountHeader.textContent = 'Total Amount';
//     const actionHeader = document.createElement('th');
//     actionHeader.textContent = 'Action';
//     // Append header cells to the header row
//     headerRow.appendChild(nameHeader);
//     headerRow.appendChild(qtyHeader);
//     headerRow.appendChild(zoneHeader);
//     headerRow.appendChild(amountHeader);
//     headerRow.appendChild(actionHeader);
//     table.appendChild(headerRow)
//     items.forEach(item => {
//         const row = document.createElement('tr');
//         // Create cells for each piece of data
//         const nameCell = document.createElement('td');
//         nameCell.textContent = item.name;
//         const qtyCell = document.createElement('td');
//         qtyCell.textContent = `${item.qty} Tickets`;
//         const zoneCell = document.createElement('td');
//         zoneCell.textContent = item.zone;
//         const amountCell = document.createElement('td')
//         amountCell.textContent = `${item.totalAmount.toLocaleString()}฿`
//         const actionCell = document.createElement('td');
//         const cancelBtn = document.createElement('button');
//         cancelBtn.textContent = 'Cancel Ticket';
//         actionCell.appendChild(cancelBtn);
//         // Set ID attribute for the row
//         row.setAttribute('id', item.name);
//         // Append cells to the row
//         row.appendChild(nameCell);
//         row.appendChild(qtyCell);
//         row.appendChild(zoneCell);
//         row.appendChild(amountCell);
//         row.appendChild(actionCell);
//         // Append the row to the table
//         table.appendChild(row);
//         // Define remove btn
//         removeReservation(cancelBtn);
//     })
//     // Update text amount of user
//     displayTotalQuantity();
//     // Initial show Total Revenue
//     updateDisplayTotalRevenue();
// }

// Initial display the data
showData(reservationArr)

// Search function
function searchByName() {
    searchBar.addEventListener('input', () => {
        const result = reservationArr.filter(rs => rs.name.toLowerCase().includes(searchBar.value.toLowerCase()))
        console.log(result)
        showData(result)
    })
}
// Show data what relate search
searchByName()


const reservationName = document.querySelector('#reservation-name')
const addBtn = document.querySelector('#submit-reservation')

// Initial if user not change zone (still zone vvip)
let nowZoneValue = parseInt(document.querySelector('#concerts').value)

// Get user select zone
const concertsZone = document.querySelector('#concerts')
concertsZone.addEventListener('change', (e) => {
    const newSelectedValue = e.target.value
    if (nowZoneValue !== newSelectedValue) {
        nowZoneValue = newSelectedValue
    }
})

// NOTE: Check if qty not the number you can use parseInt() change string to integer
// 1 + 1 = 2
// 1 + '1' = 11
// Result will be wrong if not the same type
function addNewReservation() {
    const alertLimitDiv = document.querySelector('.alert-limit')
    const totalQty = reservationArr.reduce((a, b) => a + b.qty, 0)
    const remainingSpace = limitAmount - totalQty

    let userQty = parseInt(qtyInput.value)
    if (remainingSpace < userQty) {
        // Alert or display a message that the limit is reached
        // Defind in css .alert-limit.active
        alertLimitDiv.classList.add('active')
        return // Exit the function
    } else {
        alertLimitDiv.classList.remove('active')
        let totalAmountReserve = userQty * nowZoneValue
        reservationArr.push({
            name: reservationName.value,
            qty: userQty,
            zone: concertsZone.options[concertsZone.selectedIndex].textContent,
            totalAmount: totalAmountReserve
        })
        // Create cancel ticket button
        const actionCell = document.createElement('td')
        const cancelBtn = document.createElement('button')
        cancelBtn.textContent = 'Cancel Ticket'
        actionCell.appendChild(cancelBtn)
        // Define remove btn
        removeReservation(cancelBtn)
    }
    // Clear the input field
    reservationName.value = ''
    qtyInput.value = ''
    // Update text amount of user
    displayTotalQuantity()
    // Update show Total Revenue
    updateDisplayTotalRevenue()
    // Show old data with new add
    showData(reservationArr)
    console.log(reservationArr)

}
// Define button
addBtn.addEventListener('click', addNewReservation)

function handleKeyPress(e) {
    if (e.key === 'Enter') {
        addNewReservation()
        reservationName.value = ''
        qtyInput.value = ''
    }
}
// Define button
document.addEventListener('keypress', handleKeyPress)

// If create a fucking p tag
function removeReservation(removeBtn) {
    removeBtn.addEventListener('click', () => {
        const parentEl = removeBtn.parentElement
        const reservationId = parentEl.getAttribute('id')
        const index = reservationArr.findIndex(reservation => reservation.name === reservationId)
        // If exist
        if (index !== -1) {
            reservationArr.splice(index, 1)
            parentEl.remove() // remove DOM
            console.log(reservationArr)
            // Update text amount of user
            displayTotalQuantity()
            // Update show Total Revenue
            updateDisplayTotalRevenue()
        }
    })
}

// If use table ================
// function removeReservation(removeBtn) {
//     removeBtn.addEventListener('click', () => {
//         const row = removeBtn.closest('tr') // Find the closest row element
//         const reservationId = row.getAttribute('id')
//         const index = reservationArr.findIndex(reservation => reservation.name === reservationId)
//         // !== mean exist / == -1 mean not exist
//         if (index !== -1) {
//             reservationArr.splice(index, 1);
//             row.remove() // Remove the row from the table
//             console.log(reservationArr)
//             // Update text amount of user
//             displayTotalQuantity()
//             // Update show Total Revenue
//             updateDisplayTotalRevenue()
//         }
//     });
// }


function displayTotalQuantity() {
    const totalQty = reservationArr.reduce((a, b) => a + b.qty, 0)
    userAmount.textContent = `Capacity (Total Ticket Order): ${totalQty.toLocaleString()}/${limitAmount.toLocaleString()}`;
}

function calTotalRevenue() {
    let total = 0
    reservationArr.forEach(rs => {
        total += rs.totalAmount
    })
    return total
}

function updateDisplayTotalRevenue() {
    const totalRevenueAmount = calTotalRevenue()
    totalRevenueDisplay.textContent = `Total Revenue: ${totalRevenueAmount.toLocaleString()}฿`
}