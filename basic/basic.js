// Variable มี 3 แบบ ==================
// var = globally scope
// let = block scope
// const = constant values, scope like let
{
    var a = 1
    let b = 2
    const c = 3
    // Defined new value to C
    c = 4
    // C will be TypeError: Assignment to constant variable.
    console.log(c)
}
// B and C will be
// ReferenceError: b is not defined because B is block scope same as C
// console.log can show A variable because A is global scope
console.log(a, b, c)

// If else ==================
let x = 3
if(x < 5) {
    console.log("X มีค่าน้อยกว่า 5")
} else {
    console.log("X มีค่ามากกว่า 5")
}
// Shorthand if-else ==================
// Shorthand if-else statement form =
// conditions ? true : false
let shortIf = x < 5 ? 'X มีค่าน้อยกว่า 5' : 'X มีค่ามากกว่า 5'
console.log(shortIf)

// For Loop ==================
// For Loop form = for (expression 1; expression 2; expression 3)
// ส่วนมากชอบประกาศให้ค่าาที่คุม loop เป็นตัวแปร i
// loop จะดำเนินการจนกว่า i > 5 จึงหยุด ตามที่ตั้งไว้ว่า i <= 5
// Output = เลข 0-5
for(i = 0; i <= 5; i++) {
    console.log(i)
}

// Function ==================
function sumNumbers(number1, number2) {
    // ``(backquote) สามารถใช้ ${varaible} เพื่อแสดงค่าตัวแปรนั้นในรูปแบบ string ได้
    console.log(`Sum Value = ${number1 + number2}`)
}
// การเรียกใช้ function ถ้าไม่เรียกใช้ function function จะไม่ทำงาน
// Form : functionName(ค่า)
// ในกรณีนี้เราเก็บค่าใน parameter ชื่อ number1, number2
// ค่าข้างล่าง 1,2 จะเข้าไปแทนที่ number1, number2 ใน function
// การเขียนฟังก์ชั่น callNumbers(number1, number2)
// ตอนเรียกใช้ callNumbers(1, 2) (1, 2) แทนที่ parameter
sumNumbers(1, 2)

// Array ==================
// ทุก value ใน array มี index กำกับเสมอ โดยเริ่มนับจาก 0
let artists = ['Jeremy', 'Ruel', 'Anne', 'Bring Me The Horizon']
// console.log แสดงค่า array artists ในตำแหน่งที่ 0 = output ควรจะเป็น Jeremy
console.log(artists[0])
// การเข้าถึง index ใน array ไม่จำเป็นต้องใช้ตัวเลขที่กำหนดเสมอแต่สามารถใช้ตัวแปรได้

// ยกตัวอย่างการ loop เข้าไปเอาค่าทั้งหมดใน array โดยไม่ใช้ array method
// Expain code
// ตราบใดที่ i ยังน้อยกว่าความยาวของ array artists i จะถูก + ไปเรื่อย ๆ ตาม condition = i จะขยับตำแหน่งไปเรื่อย ๆ
// ตั้งให้แสดงค่าในตำแหน่ง artists[i] = console.log จะแสดงค่าทั้งหมดใน array จนกว่าจะจบ loop
for(i = 0; i < artists.length; i++) {
    console.log(artists[i])
}
// Array method (for each) for same output
// * มีละเอียดในโฟลเดอร์ Array method เขียนเทียบให้ดูเฉย ๆ
artists.forEach(artist => console.log(artist))

// Object ==================
const person = {name: 'Jeremy', age: 28}
// เราสามารถเข้าถึงค่าใน object ได้ด้วย 
// objectName.propertyName
// หรือ objectName["propertyName"]
console.log(person.age)
console.log(person["age"])

// Object in array ==================
const contacts = [
    {name: 'Jeremy', status: 'Single'},
    {name: 'Sabrina', status: 'ไม่บอก'}
]
// Will be undefined
console.log(contacts.name)
// If want to get name and status of jeremy
console.log(contacts[0].name, contacts[0].status)
// Like above you can use loop to get all object in array
for(i = 0; i < contacts.length; i++) {
    // Return in objects
    console.log(contacts[i])
    // Return in string
    console.log(contacts[i].name, contacts[i].status)
}

// Array in object ==================
const festivals = {
    name: 'Taylor Swift The Eras Tour',
    price: [1000, 2000, 7000, 100000]
}
// Return price as array
console.log(festivals.price)
// Return price in index 2 (String type)
console.log(festivals.price[2])

