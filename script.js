/* variables */
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];
const rpsEmoji = {rock:'&#9994', paper:'&#9995', scissors:'&#9996', reset:'&#10067'};

/* event listeners */


/* functions */

/* sets the computer's choice */
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

/* sets player variable, plays a round of the game, and updates DOM*/
function playGame(playerInput) {
    playerSelection = choices[playerInput];
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(`You: ${playerScore} Computer: ${computerScore}`);
    if(playerScore == 5) {
        alert("You won!");
        resetGame();
    } else if(computerScore == 5) {
        alert("You lost!");
        resetGame();
    }
    domUpdate();
}

/* this function resets the game upon completion */
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerSelection = 'reset';
    computerSelection = 'reset';
}

function domUpdate() {
    document.getElementById("playerScore").innerHTML = `You: ${playerScore}`;
    document.getElementById("playerChoice").innerHTML = `${rpsEmoji[playerSelection]}`;
    document.getElementById("computerScore").innerHTML = `Computer: ${computerScore}`;
    document.getElementById("computerChoice").innerHTML = `${rpsEmoji[computerSelection]}`;
}

/* runs a round of the game*/
function playRound(playerSelection, computerSelection) {
    if(playerSelection == "rock" && computerSelection == "scissors" 
    || playerSelection == "paper" && computerSelection == "rock"
    || playerSelection == "scissors" && computerSelection == "paper") {
        console.log(`you throw ${playerSelection}.`);
        console.log(`computer throws ${computerSelection}.`);
        console.log(`you win! ${playerSelection} beats ${computerSelection}!`);
        document.getElementById("results").innerHTML = `you win! ${playerSelection} beats ${computerSelection}!`;
        playerScore++;
    } else if(playerSelection == computerSelection) {
        console.log(`you throw ${playerSelection}.`);
        console.log(`computer throws ${computerSelection}.`);
        console.log('it is a tie!');
        document.getElementById("results").innerHTML = 'it is a tie!';
    } else {
        console.log(`you throw ${playerSelection}.`);
        console.log(`computer throws ${computerSelection}.`);
        console.log(`you lose! ${computerSelection} beats ${playerSelection}!`);
        document.getElementById("results").innerHTML = `you lose! ${computerSelection} beats ${playerSelection}!`;
        computerScore++;
    }
}