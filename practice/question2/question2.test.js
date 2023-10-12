const question2 = require('./question2')

describe('Question 2.1', () => {
    test('Remove the last item in the array', () => {
      expect(question2.removeLastItem(['Ryu', 'Ken','Chun-Li', 'Cammy','Guile', 'Sakura','Sagat', 'Juri']))
      .toEqual([
        'Ryu',     'Ken',
        'Chun-Li', 'Cammy',
        'Guile',   'Sakura',
        'Sagat'
      ])
    })
})
describe('Question 2.2', () => {
    test(`Add two new 'Jeremy' and 'Sabrina' to the beginning of the array. Return array`, () => {
      expect(question2.addNewValueBeginning(['Ryu', 'Ken','Chun-Li', 'Cammy','Guile', 'Sakura','Sagat', 'Juri']))
      .toEqual([
        'Jeremy',   'Sabrina',
        'Ryu',     'Ken',
        'Chun-Li', 'Cammy',
        'Guile',   'Sakura',
        'Sagat',    'Juri'
      ])
    })
})
describe('Question 2.3', () => {
    test(`Add one new 'Poppy' to the end of array. Return array`, () => {
      expect(question2.addNewValueEnd(['Ryu', 'Ken','Chun-Li', 'Cammy','Guile', 'Sakura','Sagat', 'Juri']))
      .toEqual([
        'Ryu',     'Ken',
        'Chun-Li', 'Cammy',
        'Guile',   'Sakura',
        'Sagat',    'Juri',
        'Poppy'
      ])
    })
})
describe('Question 2.4', () => {
    test('Go over each item in the array and add its index number after the name inside parentheses, for example Ryu (0)', () => {
      expect(question2.indexAfterNames(['Ryu', 'Ken','Chun-Li', 'Cammy','Guile', 'Sakura','Sagat', 'Juri']))
      .toEqual(`Ryu (0),Ken (1),Chun-Li (2),Cammy (3),Guile (4),Sakura (5),Sagat (6),Juri (7)`)
    })
})
describe('Question 2.5', () => {
    test('Join the array items together in a single string called myString, with a separator of "|"', () => {
      expect(question2.singleString(['Ryu', 'Ken','Chun-Li', 'Cammy','Guile', 'Sakura','Sagat', 'Juri']))
      .toEqual('Ryu|Ken|Chun-Li|Cammy|Guile|Sakura|Sagat|Juri')
    })
})