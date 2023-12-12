// 2.1 Remove the last item in the array.

// 2.2 Add two new 'Jeremy' and 'Sabrina' to the beginning of the array. Return array

// 2.3 Add one new 'Poppy' to the end of array. Return array

// 2.4 Go over each item in the array and add its index number after the name inside parentheses,
// for example Ryu (0)
// Output should return using join method to separate each items by comma(,)
// Expect output = Ryu (0),Ken (1),Chun-Li (2),Cammy (3),Guile (4),Sakura (5),Sagat (6),Juri (7)
// * Format case sensitive
// please always return `name (index),name (index), ...`

// 2.5 Finally, join the array items together in a single string called myString,
// with a separator of "|".

// Example input = ["Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri"]
function removeLastItem(a) {
    // Solution
    a.pop()
    return a
}
function addNewValueBeginning(b) {
    // Solution
    b.unshift('Jeremy', 'Sabrina')
    return b
}
function addNewValueEnd(c) {
    // Solution
    c.push('Poppy')
    return c
}
function indexAfterNames(d) {
    // Solution
    let resultString = d.map((element, index) => {
        return `${element} (${index})`
    }).join(',')
    return resultString
}
function singleString(e) {
    // Solution
    const myString = e.join('|')
    return myString
}