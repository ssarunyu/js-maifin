// TITLE : splice
const exampleArr = ["one", "two", "three", "four", "five", "iloveyou"]
// Array index in javascript start from 0
// splice
// splice form = .splice(startIndex, removeCount, addValue, ..addValueInfinity)
// splice startIndex start from itself
exampleArr.splice(0, 3)
// Expect output should start from 0 ["one"] remove 3 items from index 0
// Array should change to ["four", "five, "iloveyou"]
console.log(exampleArr)

const exampleArrToAddWithSplice = ["one", "two", "three", "four", "five", "iloveyou"]
// Add with splice
exampleArrToAddWithSplice.splice(1, 2, "hi", "js")
// Start from index 1, remove 2 items and add "hi" to array
// Array should be [ 'one', 'hi', 'js', 'four', 'five', 'iloveyou' ]
console.log(exampleArrToAddWithSplice)