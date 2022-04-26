/* variables */
let playerSelection;
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

/* event listeners */


/* functions */

/* logs the computer's choice */
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("rock, paper, or scissors?");
    if(playerSelection != "rock"
    && playerSelection != "paper"
    && playerSelection != "scissors") {
        alert("Please make sure you typed rock, paper, or scissors correctly.");
    } else {
        playRound(playerSelection, computerSelection);
    }
    }
    console.log(`FINAL SCORE: YOU: ${playerScore} COMPUTER: ${computerScore}`);
}

/* runs a round of the game */
function playRound(playerSelection, computerSelection) {
    if(playerSelection == "rock" && computerSelection == "scissors" 
    || playerSelection == "paper" && computerSelection == "rock"
    || playerSelection == "scissors" && computerSelection == "paper") {
        console.log(`you throw ${playerSelection}.`);
        console.log(`computer throws ${computerSelection}.`);
        console.log(`you win! ${playerSelection} beats ${computerSelection}!`);
        playerScore++;
        console.log(`You: ${playerScore} Computer: ${computerScore}`);
    } else if(playerSelection == computerSelection) {
        console.log(`you throw ${playerSelection}.`);
        console.log(`computer throws ${computerSelection}.`);
        console.log('it is a tie!');
        console.log(`You: ${playerScore} Computer: ${computerScore}`);
    } else {
        console.log(`you throw ${playerSelection}.`);
        console.log(`computer throws ${computerSelection}.`);
        console.log(`you lose! ${computerSelection} beats ${playerSelection}!`);
        computerScore++;
        console.log(`You: ${playerScore} Computer: ${computerScore}`);
    }
}