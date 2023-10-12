// TITLE : PUSH
// PUSH is method to add values in to array AT THE END OF ARRAY
// Push form = .push(values)
const examplePush = ["one", "two", "three", "four", "five", "iloveyou"]
examplePush.push("I hate js")
// Expect output should be [ 'one', 'two', 'three', 'four', 'five', 'iloveyou', 'I hate js' ]
console.log(examplePush)

// TITLE : UNSHIFT
// Unshift like push but start from BEGINNING OF ARRAY
const exampleUnshift = ["one", "two", "three", "four", "five", "iloveyou"]
exampleUnshift.unshift("hi there")
// Expect output should be ['hi there', 'one', 'two', 'three', 'four', 'five', 'iloveyou']
console.log(exampleUnshift)
