// document.getElementById() method is used to fetch an element from the HTML page having the id as provided (specified) by the user
const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');
const resetButton = document.getElementById('resetButton'); // Get the Reset button
const maxAttempts = 10;
const minNumber = 1;
const maxNumber = 100;

let targetNumber, attempts, score;

// Generate a random number between min (inclusive) and max (inclusive)
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

alert("Welcome to Guess the Number!");
// The user is prompted to guess a number from 1 to 100
alert(`Try to guess the secret number between 1 and 100. You have ${maxAttempts} attempts.`);

function resetGame() {
  targetNumber = generateRandomNumber(1, maxNumber);
  attempts = 0;
  score = 0;
  updateScoreDisplay(); // Update the score display
  message.textContent = '';
  guessButton.disabled = false;
  guessInput.disabled = false;
}

function updateScoreDisplay() {
  document.getElementById('score').textContent = `Score: ${score}`;
}

const computerScoreElement = document.getElementById('computerScore'); // Get the element for computer's score
let computerScore = 0; // Initialize the computer's score

function updateComputerScoreDisplay() {
  computerScoreElement.textContent = `Computer Score: ${computerScore}`;
}

// Main game function
function guessTheNumberGame() {
  resetGame(); // Initialize the game when the page loads

  guessButton.addEventListener('click', function () {
    // The parseInt() converts the numeric string value to an integer value
    const playerGuess = parseInt(guessInput.value, 10);
    const computerGuess = generateRandomNumber(minNumber, maxNumber); // Computer's guess

    // while (attempts <= maxAttempts) {
      // message.textContent = "Enter your guess:";

      if ((isNaN(playerGuess)) || (playerGuess > maxNumber)) {
      message.textContent = "Please enter a valid number.";
      return;
     }

    attempts++;

    // The if...else statement is used to check the condition. The equal to == operator is used to check if the guess was correct
    if ((playerGuess < targetNumber) && (attempts <= maxAttempts)) {
      message.textContent = "Too low! Try again.";
    } else if (playerGuess > targetNumber) {
      message.textContent = "Too high! Try again.";
    } else if ((playerGuess === targetNumber) && (attempts <= maxAttempts)) {
      score += 10; // Increase the score when the player guesses correctly
      message.textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
      updateScoreDisplay();
      guessButton.disabled = true;
      guessInput.disabled = true;
    } 

    if (attempts > maxAttempts) {
      message.textContent = `Sorry, you've run out of attempts. The secret number was ${targetNumber}. You lose!`;
      guessButton.disabled = true;
      guessInput.disabled = true;
      score -= 5; // Subtract 5 from the score when the player loses
      updateScoreDisplay();
      computerScore += 5; // Increase computer's score when the player loses
      updateComputerScoreDisplay(); // Update computer's score display
    }
  });
  }

resetButton.addEventListener('click', guessTheNumberGame); // Add event listener for the Reset button


// Start the game
guessTheNumberGame();







