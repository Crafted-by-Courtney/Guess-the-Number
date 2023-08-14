const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');
const resetButton = document.getElementById('resetButton'); // Get the Reset button

const maxAttempts = 10;
let targetNumber, attempts;

// Generate a random number between min (inclusive) and max (inclusive)
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

alert("Welcome to Guess the Number!");
alert(`Try to guess the secret number between 1 and 100. You have ${maxAttempts} attempts.`);

function resetGame() {
  targetNumber = generateRandomNumber(1, 100);
  attempts = 0;
  message.textContent = '';
  guessButton.disabled = false;
  guessInput.disabled = false;
}

const minNumber = 1;
const maxNumber = 100;

// Main game function
function guessTheNumberGame() {
  resetGame(); // Initialize the game when the page loads

  guessButton.addEventListener('click', function () {
    const playerGuess = parseInt(guessInput.value, 10);

    // while (attempts <= maxAttempts) {
      // message.textContent = "Enter your guess:";

      if ((isNaN(playerGuess)) || (playerGuess> maxNumber)) {
      message.textContent = "Please enter a valid number.";
      return;
     }

    attempts++;

    if ((playerGuess < targetNumber) && (attempts <= maxAttempts)) {
      message.textContent = "Too low! Try again.";
    } else if (playerGuess > targetNumber) {
      message.textContent = "Too high! Try again.";
    } else {
      message.textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
      guessButton.disabled = true;
      guessInput.disabled = true;
    } 

    if ((playerGuess !== targetNumber) && (attempts > maxAttempts)) {
      message.textContent = `Sorry, you've run out of attempts. The secret number was ${targetNumber}. You lose!`;
    }
  });
  }

resetButton.addEventListener('click', resetGame); // Add event listener for the Reset button


// Start the game
guessTheNumberGame();







