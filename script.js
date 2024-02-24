let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (human, computer, secretNumber) => {
    const humanDifference = Math.abs(human - secretNumber);
    const computerDifference = Math.abs(computer - secretNumber);
    if (humanDifference <= computerDifference) {
        //human win
        return true;
    } else {
        //computer win
        return false;
    }
}

const computer = generateTarget();
const secretNumber = generateTarget();

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

function advanceRound() {
    return currentRoundNumber++;
}