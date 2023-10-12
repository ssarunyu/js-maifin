function arrayStats(arr) {
    if(arr === null || arr == undefined) return{}

    let min
    let max
    let sum = 0

    for(let index = 0; index < arr.length; index++) {
        sum += arr[index]
        // Should be 2 if because not the same condition
        if(arr[index] < min) {
            min = arr[index]
        }
        if(arr[index] > max) {
            max = arr[index]
        }
    }

    return {sum: sum, avg: sum/arr.length}
}

console.log(arrayStats([1, 2, 5, 1]))