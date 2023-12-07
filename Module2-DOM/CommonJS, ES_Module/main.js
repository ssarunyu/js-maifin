// CommonJS (use in node.js (npm test))
// const x = require('./math.js')

// console.log(x.sum(1, 1))
// console.log(x.multiply(5, 3))

// ES Module (use in browser)
import { sum, multiply } from './math.js'
console.log(sum(1 ,1))
console.log(multiply(5, 3))
