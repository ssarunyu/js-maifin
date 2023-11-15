function echo(msg) {
    return msg
}

function sum(...n) {
    // return n.reduce((acc, result) => acc + result)
    let total = 0
    for (const num of n) {
        total += num
    }
    return total
}

const MAX_VALUE = 100


// Common JS
// module.exports = { echo, sum, MAX_VALUE }

// ES Module
export { echo, sum, MAX_VALUE }

// Default export (can have only 1)
// export { sum as default, echo, MAX_VALUE}