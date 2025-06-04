let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
  const userGuess = parseInt(document.getElementById('guessInput').value);
  const message = document.getElementById('message');
  const attemptsDisplay = document.getElementById('attempts');

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a number between 1 and 100.';
    return;
  }

  attempts--;

  if (userGuess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}.`;
    disableInput();
  } else if (attempts === 0) {
    message.textContent = `💥 Game Over! The number was ${secretNumber}.`;
    disableInput();
  } else if (userGuess < secretNumber) {
    message.textContent = '📉 Too low! Try again.';
  } else {
    message.textContent = '📈 Too high! Try again.';
  }

  attemptsDisplay.textContent = attempts;
}

function disableInput() {
  document.getElementById('guessInput').disabled = true;
  document.querySelector('button').disabled = true;
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 10;
  document.getElementById('guessInput').value = '';
  document.getElementById('guessInput').disabled = false;
  document.querySelector('button').disabled = false;
  document.getElementById('message').textContent = '';
  document.getElementById('attempts').textContent = attempts;
}
