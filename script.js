let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = (number) => {
 return Math.floor(Math.random()*10);
}
const compareGuesses = (human, computer, number) => {
  if (human === true) {
    return 'The human player win.';
  } else {
    return 'The computer player win.';
  }
}  
const updateScore = (string) => {
 if (string === 'human') {
   return humanScore++;
 } else {
  return computerScore++;
 }
}

const advanceRound = () => currentRoundNumber++;
