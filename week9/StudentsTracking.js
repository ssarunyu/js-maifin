const students = [
    {
      name: 'Sophia',
      attendance: [true, true, false, true, true],
      testScores: [88, 92, 85, 78, 90]
    },
    {
      name: 'Mason',
      attendance: [true, true, true, true, false],
      testScores: [70, 82, 88, 75, 62]
    },
    {
      name: 'Isabella',
      attendance: [true, false, false, true, true],
      testScores: [68, 71, 70, 60, 78]
    },
    {
      name: 'Liam',
      attendance: [true, true, true, true, true],
      testScores: [90, 87, 92, 88, 95]
    },
    {
      name: 'Olivia',
      attendance: [true, true, true, true, false],
      testScores: [72, 78, 75, 80, 62]
    }
]

// 1.1 Attendance Percentage
const attendancePercents = students.map(student => {
    const att = student.attendance
    // Filter always return TRUE values
    // Count the attendance
    const attenceCount = att.filter(Boolean).length
    const attendancePercent = (attenceCount / att.length) * 100
    console.log(`[Avg attendance] ${student.name} : ${attendancePercent}`)
    return attendancePercent
})

// 1.2 testScores avg
const averageScores = students.map(student => {
    const totalScore = student.testScores.reduce((a, b) => a + b, 0)
    const averageScore = totalScore / student.testScores.length
    console.log(`[Avg scores] ${student.name} : ${averageScore}`)
    return averageScore
})

function underPerformStudents(students) {
  const resultUnderPerform = students
      .map((student, index) => ({
          name: student.name,
          attendancePercent: attendancePercents[index],
          averageScore: averageScores[index]
      }))
      // attendancePercent, averageScore check from the line 52, 53 but you need to return variable above at line 37, 45
      .filter(student => student.attendancePercent < 80 || student.averageScore < 70)

  return resultUnderPerform
}

console.log(underPerformStudents(students))