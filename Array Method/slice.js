// TITLE : slice
// ** Important notes ** : method returns selected elements in an array, as a new array.
// It's mean we NEED to defind new varriable to show correct output
// slice means only keep that items
// slice form = .slice(startFrom, whereYouNeedToStop)
const sliceArr = ["one", "two", "three", "four", "five", "iloveyou"]
sliceArr.slice(1, 3)
let a = sliceArr.slice(1, 3)
// Expect output = [ 'two', 'three' ]
console.log(a)
// sliceArr will be the same even we use slice method for sliceArr
console.log(sliceArr)