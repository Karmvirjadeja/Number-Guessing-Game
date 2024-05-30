'use strict';

const SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number Entered !';
  } else if (guess === SecretNumber) {
    document.querySelector('.message').textContent = 'Correct Number Entered !';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = SecretNumber;

    document.querySelector('body').style.backgroundColor = '#60b947';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > SecretNumber ? 'Guess is too High!' : 'Guess is too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.message').textContent = 'You Lost ! Try again !';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20; // Reset score
  const SecretNumber = Math.trunc(Math.random() * 20) + 1; // Reset secret number

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
