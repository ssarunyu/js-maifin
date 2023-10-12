const friuts = ['Bananaes', 'Papaesya', 'Tomato', 'Onion']

let final = ''
friuts.forEach((friut) => {
    final += friut.charAt(0)
    console.log(final)
})

const oFilter = friuts.filter((friut) => friut.toLowerCase().includes('o')) // includes is case sensitive NEED to use tolowercase to fix it
console.log(oFilter)