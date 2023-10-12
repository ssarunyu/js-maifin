let array = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
function myArrayReturn(a) {
    // Convert the string into an array, removing the + characters in the process.
    // return variable name myArray

    // Solution
    const myArray = a.split('+')
    return myArray
}
function myArrayLengthReturn(b) {
    // Store the length of the array in a variable called arrayLength.

    // Solution
    const arrayLength = b.length
    return arrayLength
}
function lastItemOfArray(c) {
    // Store the last item in the array in a variable called lastItem.
    
    // Solution
    const lastItem = c.pop()
    return lastItem
}