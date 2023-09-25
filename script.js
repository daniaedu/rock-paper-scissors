// Computer and player scores are zero and updated everytime game() is called

let playerScore = 0;
let computerScore = 0;

// Event listeners for Rock, Paper, Scissors button
const rockButton = document.querySelector('#rock').addEventListener('click', getPlayerChoice);
const paperButton = document.querySelector('#paper').addEventListener('click', getPlayerChoice);
const scissorsButton = document.querySelector('#scissors').addEventListener('click', getPlayerChoice);

determineWinner(playerScore, computerScore);

// Returns playerChoice based on the button that was clicked and stores button ID name
function getPlayerChoice(event) {
    let playerChoice = event.target.id;
    return playerChoice;
} 

// Function gets computer's choice via Math.random
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1) {
        return computerChoice = 'rock';
    } 
    else if (computerChoice === 2) {
        return computerChoice = 'paper';
    } 
    else {
        return computerChoice = 'scissors';
    }
}

// Function plays a round of Rock Paper Scissors each time it's called and updates score
function game() {
    let playerSelection = getPlayerChoice();
    let computerSelection= getComputerChoice();

    if (playerSelection === computerSelection) {
        playerScore += 1;
        computerScore += 1;
        alert('It is a tie!');
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            alert(`${playerSelection} beats ${computerSelection}! Player Wins!`);
            playerScore += 1;
        }
        else {
            alert(`${computerSelection} beats ${playerSelection}! Computer Wins!`);
            computerScore += 1;
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            alert(`${playerSelection} beats ${computerSelection}! Player Wins!`);
            playerScore += 1;
        }
        else {
            alert(`${computerSelection} beats ${playerSelection}! Computer Wins!`);
            computerScore += 1;
        }
    }
    else {
        if (computerSelection === 'paper') {
            alert(`${playerSelection} beats ${computerSelection}! Player Wins!`);
            playerScore += 1;
        }
        else {
            alert(`${computerSelection} beats ${playerSelection}! Computer Wins!`);
            computerScore += 1;
        }
    }
}

function determineWinner(playerScore, computerScore) {
    if (playerScore === computerScore) {
        alert(`Player Score: ${playerScore}, Computer Score: ${computerScore}. It's a tie!`);
    }
    else if (playerScore > computerScore) {
        alert(`Player Score: ${playerScore}, Computer Score: ${computerScore}. Player wins!`);

    }
    else {
        alert(`Player Score: ${playerScore}, Computer Score: ${computerScore}. Computer wins!`);
    }
}