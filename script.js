// Prompts the user to type in their choice
alert("Welcome to an exciting game of Rock Paper Scissors!");
alert("Think you have what it takes to beat the computer in this 5-round challenge?!");

let playerChoice = getPlayerChoice();

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

