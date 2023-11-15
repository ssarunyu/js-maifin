const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'playerName',
    message: 'What is your name?',
  },
  {
    type: 'list',
    name: 'colorQuestion',
    message: 'What is the primary color of a banana?',
    choices: ['Red', 'Green', 'Yellow', 'Blue'],
  },
  {
    type: 'list',
    name: 'capitalQuestion',
    message: 'What is the capital of France?',
    choices: ['Berlin', 'Madrid', 'Paris', 'Rome'],
  },
  {
    type: 'checkbox',
    name: 'colorsQuestion',
    message: 'Select the primary colors:',
    choices: [
      { name: 'Red', value: 'red' },
      { name: 'Green', value: 'green' },
      { name: 'Blue', value: 'blue' },
      { name: 'Yellow', value: 'yellow' },
      { name: 'Purple', value: 'purple' },
    ],
  },
];

const correctAnswers = {
  colorQuestion: 'Yellow',
  capitalQuestion: 'Paris',
  colorsQuestion: ['red', 'blue', 'yellow'],
};

function startGame() {
  inquirer.prompt(questions).then((answers) => {
    console.log('Hello, ' + answers.playerName);

    let score = 0;

    if (correctAnswers.colorQuestion === answers.colorQuestion) {
      score++
    }

    if (correctAnswers.capitalQuestion === answers.capitalQuestion) {
      score++;
    }

	if (correctAnswers.colorsQuestion.every((correctColor) => answers.colorsQuestion.includes(correctColor))) {
        score++;
    }

	// Minus the ask name question
    console.log(`Score ${score}/${questions.length - 1}`)

    inquirer
      .prompt([
        {
          type: 'confirm',
          name: 'playAgain',
          message: 'Do you want to play again?',
          default: false,
        },
      ])
      .then((playAgain) => {
        if (playAgain.playAgain) {
          console.log('Let\'s play again!');
          startGame();
        } else {
          console.log('Thanks for playing. Goodbye!');
        }
      });
  });
}

startGame();
