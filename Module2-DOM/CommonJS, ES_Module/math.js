const sum = (a, b) => {
    return a + b
}

const multiply = (a, b) => {
    return a * b
}

// CommonJS (use in node.js (npm test))
// module.exports = {
//     sum,
//     multiply
// }

// ES Module (use in browser)
export { sum, multiply }