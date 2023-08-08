const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');

// Generate a random number between min (inclusive) and max (inclusive)
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Main game function
function guessTheNumberGame() {
  const minNumber = 1;
  const maxNumber = 100;
  const targetNumber = generateRandomNumber(minNumber, maxNumber);
  let attempts = 0;

  guessButton.addEventListener('click', function () {
    const playerGuess = parseInt(guessInput.value, 10);

    if (isNaN(playerGuess)) {
      message.textContent = "Please enter a valid number.";
      return;
    }

    attempts++;

    if (playerGuess < targetNumber) {
      message.textContent = "Too low! Try again.";
    } else if (playerGuess > targetNumber) {
      message.textContent = "Too high! Try again.";
    } else {
      message.textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
      guessButton.disabled = true;
      guessInput.disabled = true;
    }
  });
}

// Start the game
guessTheNumberGame();
