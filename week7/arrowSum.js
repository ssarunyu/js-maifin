// Function Declaration
function sum(n1, n2) {
    return n1 + n2
}

// Anonymous Function
const sum2 = function(n1, n2) {
    return n1 + n2
}

// Arrow Anonymous
const sum3 = (n1, n2) => n1 + n2
// When use {} need to write the return in line 15
const sum5 = (n1, n2) => {
    return n1 + n2
}

// WORST
const sum4 = function sumFn(n1, n2) {
    return n1 + n2
}

console.log(sum(1, 2))
console.log(sum2(1, 2))
console.log(sum3(1, 2))
console.log(sum4(1, 2))
console.log(sum5(1, 2))