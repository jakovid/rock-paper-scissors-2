/* variables */
let playerSelection = "rock";
let computerSelection = computerPlay();

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

/* runs a round of the game */
function playRound(playerSelection, computerSelection) {
    if(playerSelection == "rock" && computerSelection == "scissors" 
    || playerSelection == "paper" && computerSelection == "rock"
    || playerSelection == "scissors" && computerSelection == "paper") {
        console.log(`Player throws ${playerSelection}`);
        console.log(`Computer throws ${computerSelection}`);
        console.log('Player wins!');
    } else if(playerSelection == computerSelection) {
        console.log(`Player throws ${playerSelection}`);
        console.log(`Computer throws ${computerSelection}`);
        console.log('It is a tie!');
    } else {
        console.log(`Player throws ${playerSelection}`);
        console.log(`Computer throws ${computerSelection}`);
        console.log('The Computer wins!');
    }
}



playRound(playerSelection, computerSelection);

