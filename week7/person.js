class Person {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName
        this.lastName = lastName
        this.dateOfBirth = dateOfBirth
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
    isEqual(anotherPerson) {
        return (
            this.firstName.toLowerCase() === anotherPerson.firstName.toLowerCase() &&
            this.lastName.toLowerCase() === anotherPerson.lastName.toLowerCase()
        )
    }
    getAge() {
        const nowDateTime = Date.now()
        const birthTime = this.dateOfBirth.getTime()
        let diffTime = nowDateTime - birthTime
        // 2629746000 = millisec in 1 month
        let yearCount = 0
        let monthCount = Math.floor(diffTime / 2629746000)
        for(let i = 0; i <= 100; i++) {
            if (monthCount > 12) {
                yearCount++
                monthCount -= 12
            }
        }
        const age = `${yearCount} Years, ${monthCount} Months`
        return age
    }
    toString() {
        return `${this.firstName} ${this.lastName}`
    }
}
const p1 = new Person("Sarunyu", "Supokhai", new Date(2004, 6, 23))
const p2 = new Person("Jeremy", "Zucker", new Date(2002, 5, 20))
console.log(p1.getFullName())
console.log(p1.getAge())