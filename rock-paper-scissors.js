// Computer random choice
const arr = ["rock", "paper", "scissors"]
function getComputerChoice() {
    const choice = arr[Math.floor(Math.random() * arr.length)];
    console.log(choice);
    return choice;
}

// Human choice
function getHumanChoice() {
    let choice = prompt("Write 'rock', 'paper' or 'scissors'");
    let humanChoice = choice.toLowerCase();
    if (arr.includes(humanChoice)) {
        console.log(humanChoice);
    } else {
        alert("It's not included!")
        return getHumanChoice();
    }
    return humanChoice;
}

// players variables
let humanScore = 0;
let computerScore = 0;

// conditions
function playRound(humanChoice, computerChoice) {
    if (computerChoice == "rock" && humanChoice == "paper") {
        humanScore = humanScore + 1;
        console.log("You win!");
    } else if (computerChoice == "paper" && humanChoice == "scissors") {
        humanScore = humanScore + 1;
        console.log("You win!");
    } else if (computerChoice == "scissors" && humanChoice == "rock") {
        humanScore = humanScore + 1;
        console.log("You win!");
    } else if (computerChoice == humanChoice) {
        console.log("Tie. Try again!");
    } else {
        computerScore = computerScore + 1;
        console.log("You lose!");
    }
}
playRound(getHumanChoice(), getComputerChoice());

