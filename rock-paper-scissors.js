// Computer random choice
let arr = ["rock", "paper", "scissors"]
function getComputerChoice() {
    console.log(arr[Math.floor(Math.random() * arr.length)]);
}
getComputerChoice();

// Human choice
let choice = prompt("Write 'rock', 'paper' or 'scissors'");
let humanChoice = choice.toLowerCase();
if (arr.includes(humanChoice)) {
    console.log(humanChoice);
} else {
    alert("It's not included!")
}


