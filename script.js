// Computer and player scores are zero and updated everytime game() is called
alert("Welcome to an exciting game of Rock Paper Scissors!");
alert("Think you have what it takes to beat the computer in this 5-round challenge?!");
let playerScore = 0;
let computerScore = 0;

game();
game();
game();
game();
game();

determineWinner(playerScore, computerScore);

// Function gets player's choice, and if invalid, it runs again until player types in a valid response
function getPlayerChoice() {
    let playerChoice = prompt("Choose your weapon: Rock, Paper or Scissors?").toLowerCase();

    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
            return playerChoice;
        }
    else {
        alert("INVALID CHOICE! Must choose Rock, Paper or Scissors!");
        getPlayerChoice();
    }
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