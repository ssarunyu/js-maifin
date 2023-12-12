const question1 = require('./question1')

describe('Question 1.1', () => {
    test('Value of myArray remove + symbol', () => {
      expect(question1.myArrayReturn('Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri'))
      .toStrictEqual(['Ryu', 'Ken','Chun-Li', 'Cammy','Guile', 'Sakura','Sagat', 'Juri']);
    });
});
describe('Question 1.2', () => {
    test('Length of array', () => {
      expect(question1.myArrayLengthReturn(['Ryu', 'Ken','Chun-Li', 'Cammy','Guile', 'Sakura','Sagat', 'Juri']))
      .toBe(8);
    });
});
describe('Question 1.3', () => {
    test('Last item of array', () => {
      expect(question1.lastItemOfArray(['Ryu', 'Ken','Chun-Li', 'Cammy','Guile', 'Sakura','Sagat', 'Juri']))
      .toStrictEqual('Juri');
    });
});