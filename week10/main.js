function ops(n1, n2, n3) {
    console.log('Arguments length', arguments.length)
    arguments[0] = 5
    for (const x of arguments) {
        console.log('Loop all', x)
    }
}
// * Notes arguments เก็บค่าจะตัวส่งไม่ใช่ตัวรับ
ops(1, false, 'zzz', 4) // Length = 4 even only defined 3 parameters

function opsTwo(n1 = 'F', n2 = true, n3 = 3) {
    return { n1, n2, n3 }
}
console.log('opsTwo', opsTwo())
console.log('opsTwo', opsTwo('A'))
console.log('opsTwo', opsTwo('A', false))
console.log('opsTwo', opsTwo('A', false, 4))
console.log('opsTwo', opsTwo('A', false, undefined)) // in undefined return default
console.log('opsTwo', opsTwo('A', false, null))

function sumNumber(...nums) {
    // we need ...nums if only nums it's not array so we can't use reduce()
    return nums.reduce((total, current) => total + current, 0)
}
console.log('test sumNumber 1:', sumNumber(1, 2, 3, 4))
console.log('test sumNumber 2:', sumNumber(1, 2, 3, 4, 5, 6))