class Reserve {
    static autoId = 1
    constructor() {
        this.reservations = []
    }

    getAllReservation() {
        return this.reservations
    }
    addNewreservation(name, qty) {
        const newReservation = {
            id: Reserve.autoId++,
            name: name,
            qty: qty
        }
        this.reservations.push(newReservation)
        return newReservation
    }
    getIndexOfReservation(id) {
        const findIndex = this.reservations.findIndex(rs => rs.id === id)
        return findIndex
    }
    updateNameOfReservationById(targetId, updateName) {
        const findIndexById = this.getIndexOfReservation(targetId)
        // or
        // const index = this.reservations.findIndex(rs => rs.id === targetId)
        if (findIndexById !== -1) {
            // We just return to see what update value
            // If you not return this function still work
            return this.reservations[findIndexById].name = updateName
            // or
            // this.reservations[index] = updateName
        } else {
            return 'this index not exist'
        }
    }
    updateNameOfReservationByName(targetName, updateName) {
        const findIndexByName = this.reservations.findIndex(fs => fs.name.toLowerCase() === targetName.toLowerCase())
        if(findIndexByName !== -1) {
            // We just return to see what update value
            // If you not return this function still work
            return this.reservations[findIndexByName].name = updateName
        } else {
            return 'this index not exist'
        }

    }
    updateDetailInReservation(targetId, updateDetail) {
        const findIndexById = this.getIndexOfReservation(targetId)
        if(findIndexById !== -1) {
            this.reservations[findIndexById].name = updateDetail.name || this.reservations[findIndexById].name
            this.reservations[findIndexById].qty = updateDetail.qty || this.reservations[findIndexById].qty
        } else {
            return 'this index not exist'
        }
    }
    removeReservationById(removeId) {
        const index = this.getIndexOfReservation(removeId)
        // or
        // const index = this.reservations.findIndex(rs => rs.id === removeId)
        if (index !== -1) {
            // If return it will show what we remove
            // if not return this function still work
            // * Sometime question doesn't want to see what remove.
            // so we should not return this line
            return this.reservations.splice(index, 1)
        } else {
            return 'this index not exist'
        }
    }
    removeReservationByName(removeName) {
        const findIndexByName = this.reservations.findIndex(rs => rs.name.toLowerCase() === removeName.toLowerCase())
        if (findIndexByName !== -1) {
            // If return it will show what we remove
            // if not return this function still work
            // * Sometime question doesn't want to see what remove.
            // so we should not return this line
            return this.reservations.splice(findIndexByName, 1)
        } else {
            return 'this index not exist'
        }
    }
}

const a1 = new Reserve()
a1.addNewreservation('Sarunyu', 2)
a1.addNewreservation('ไม่ชอบ js', 5)
a1.addNewreservation('ไม่ชอบมึงด้วย', 7)
a1.addNewreservation('หวัดดีฮ้าฟฟุ่', 20)
a1.addNewreservation('HOW TO GET A', 4)
console.log('======== Get reservations array ========')
console.log(a1.getAllReservation())
console.log('==================================')
console.log('======== Get index ========')
// console show -1 because not exist
console.log('Get index of id = 10: ', a1.getIndexOfReservation(10))
// console show value because it exist
console.log('Get index of id = 1: ', a1.getIndexOfReservation(1))
console.log('==================================')
console.log('======== Update name by id, name ========')
console.log(`Update id 1 to name 'Jeremy': `, a1.updateNameOfReservationById(1, 'Jeremy'))
console.log(`Update name 'ไม่ชอบ js' to 'Emily': `, a1.updateNameOfReservationByName('ไม่ชอบ js', 'Emily'))
console.log('==================================')
console.log('======== Update name by id, name (not exist) ========')
// should return 'this index not exist'
console.log(`Update id 10 to name 'xxx': `, a1.updateNameOfReservationById(10, 'xxx'))
// should return 'this index not exist'
console.log(`Update name 'John' to 'yyy': `, a1.updateNameOfReservationByName('John', 'yyy'))
console.log('==================================')
// Get whole array after update name
console.log('After update name: ', a1.getAllReservation())
console.log('==================================')
// Update details user put update detail in object
// update only name
console.log('======== Update details ========')
a1.updateDetailInReservation(4, {name: 'Taylor'})
// update only qty
a1.updateDetailInReservation(1, {qty: 200})
// update both
a1.updateDetailInReservation(3, {name: 'Jason', qty: 100})
console.log(a1.getAllReservation())
console.log('==================================')
console.log('======== Remove by id, name ========')
// Remove
console.log('Remove id 1: (console will show what we remove): ', a1.removeReservationById(1))
console.log(`Remove name 'Emily' (console will show what we remove): `, a1.removeReservationByName('emily'))
console.log('==================================')
console.log('======== Remove by id, name (not exist) ========')
// Remove but console should return 'this index not exist'
console.log('Remove id 10: ', a1.removeReservationById(10))
console.log(`Remove name 'John': `, a1.removeReservationByName('John'))
console.log('==================================')
console.log('Whole array after remove: ', a1.getAllReservation())