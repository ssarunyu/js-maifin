const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'DAVID', score: 79 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 },
    { name: 'david', score: 85 }
    ]
//return student who has name equals to david with in casesensitive and score more than 80
const foundIndex = studentScores.findIndex((student) => student.name.toLowerCase() === 'eve')
console.log(foundIndex) //5

getPassingName(studentScores)
function getPassingName(students) {
    // Find where >= 70
    const filterStudents = students.filter((student) => student.score >= 70)
    // Loop to change all to lowercase
    const studentNames = filterStudents.map((filterStudent) => filterStudent.name.toLowerCase())
    console.log(studentNames)
}


const sumAll = studentScores.reduce((sum, studentScore) => {
    return sum + studentScore.score
}, 0)
console.log(sumAll)

// Homework
const persons = [
    { id: 1, fullname: 'Susan Jo' },
    { id: 3, fullname: 'John Lee' },
    { id: 2, fullname: 'ann Smith' }
  ]
//return sorted array by fullname (ascending order and ignore case)
// asc = a-z (1-10) | desc = z-a (10-1)
const namesAsc = persons.map((name) => name.fullname.toLowerCase())
const namesDesc = persons.map((name) => name.fullname.toLowerCase())
const idAsc = persons.map((id) => id.id)
const idDesc = persons.map((id) => id.id)
const asc = namesAsc.sort((a, b) => a.localeCompare(b))
const desc = namesDesc.sort((a, b) => b.localeCompare(a))
const ascId = idAsc.sort((a, b) => a - b)
const descId = idDesc.sort((a, b) => b - a)
// const desc = namesDesc.sort().reverse()
console.log(asc)
console.log(desc)
console.log(ascId)
console.log(descId)

// Other ways (but this show whole array)
const ans2 = persons.sort((a, b) => a.fullname.toLocaleLowerCase().localeCompare(b.fullname.toLocaleLowerCase()))
console.log(ans2)