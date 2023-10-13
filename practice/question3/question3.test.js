const question3 = require('./question3')
const raceResults = [
    {
        name: 'Max Verstappen',
        team: 'Red Bull Racing',
        finishPos: [1, 1, 1],
        number: '1',
        track: ['Miami', 'Monaco', 'Spain']
    },
    {
        name: 'Sergio Perez',
        team: 'Red Bull Racing',
        finishPos: [2, 16, 4],
        number: '11',
        track: ['Miami', 'Monaco', 'Spain']
    },
    {
        name: 'Lewis Hamilton',
        team: 'Mecedes',
        finishPos: [6, 4, 2],
        number: '44',
        track: ['Miami', 'Monaco', 'Spain']
    },
    {
        name: 'Charles Leclerc',
        team: 'Ferrari',
        finishPos: [7, 6, 11],
        number: '16',
        track: ['Miami', 'Monaco', 'Spain']
    },
    {
        name: 'Kevin Magnussen',
        team: 'Haas',
        finishPos: [10, 19, 18],
        number: '20',
        track: ['Miami', 'Monaco', 'Spain']
    },
]
describe('Question 3.1', () => {
    test(`Find the driver numbers who use number start with '1'`, () => {
      expect(question3.driverNumbers1(raceResults))
      .toEqual([
        {
          name: 'Max Verstappen',
          team: 'Red Bull Racing',
          finishPos: [ 1, 1, 1 ],
          number: '1',
          track: [ 'Miami', 'Monaco', 'Spain' ]
        },
        {
          name: 'Sergio Perez',
          team: 'Red Bull Racing',
          finishPos: [ 2, 16, 4 ],
          number: '11',
          track: [ 'Miami', 'Monaco', 'Spain' ]
        },
        {
          name: 'Charles Leclerc',
          team: 'Ferrari',
          finishPos: [ 7, 6, 11 ],
          number: '16',
          track: [ 'Miami', 'Monaco', 'Spain' ]
        }
      ]);
    });
});
describe('Question 3.2', () => {
    test(`Find data where drivers racing in track call 'Monaco' return only driver name`, () => {
      expect(question3.driveMonaco(raceResults))
      .toEqual([
        'Max Verstappen',
        'Sergio Perez',
        'Lewis Hamilton',
        'Charles Leclerc',
        'Kevin Magnussen'
      ]);
    });
});
describe('Question 3.3', () => {
    test(`Find the average position finish of each driver`, () => {
      expect(question3.averagePosDri(raceResults))
      .toEqual([
        { name: 'Max Verstappen', avgPostition: 1 },
        { name: 'Sergio Perez', avgPostition: 7.333333333333333 },
        { name: 'Lewis Hamilton', avgPostition: 4 },
        { name: 'Charles Leclerc', avgPostition: 8 },
        { name: 'Kevin Magnussen', avgPostition: 15.666666666666666 }
      ]);
    });
});