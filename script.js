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

  while (true) {
    const playerGuess = parseInt(prompt(`Guess the number between ${minNumber} and ${maxNumber}:`), 10);

    if (isNaN(playerGuess)) {
      console.log("Please enter a valid number.");
      continue;
    }

    attempts++;

    if (playerGuess < targetNumber) {
      console.log("Too low! Try again.");
    } else if (playerGuess > targetNumber) {
      console.log("Too high! Try again.");
    } else {
      console.log(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`);
      break;
    }
  }
}

// Start the game
guessTheNumberGame(165);
