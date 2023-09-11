function countPosNegValue(posNegIntegerArray) {
    if(posNegIntegerArray === null || posNegIntegerArray === undefined) console.log(undefined)
    else if (posNegIntegerArray.length === 0) console.log({})

    let leng = posNegIntegerArray.length
    let positive = 0
    let negative = 0

    for(i = 0; i <= leng; i++) {
        if(posNegIntegerArray[i] > 0) {
            positive++
        } else if(posNegIntegerArray[i] < 0) {
            negative++
        }
    }

    let finalObj = {}
    if (positive >= 0){
        finalObj["positive"] = positive;
    }
    if (negative >= 0) {
        finalObj["negative"] = negative;
    }
    console.log(finalObj)
}
countPosNegValue([1, 2, -1, -9, -3])