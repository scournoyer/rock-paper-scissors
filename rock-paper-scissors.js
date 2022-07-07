"use strict";

const computerPlay = () => {
    let number = Math.floor(Math.random() * 3);
    if (number == 0)
        return "rock";
    else if (number == 1)
        return "paper";
    else if (number == 2)
        return "scissors";
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            alert("You Tied!");
            return null;
        }
        else if (computerSelection == "paper") {
            alert("You Lose! Paper beats Rock");
            return 1;
        }
        else if (computerSelection == "scissors") {
            alert("You Win! Rock beats Scissors");
            return 0;
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            alert("You Win! Paper beats Rock");
            return 0;
        }
        else if (computerSelection == "paper") {
            alert("You Tied!");
            return null;
        }
        else if (computerSelection == "scissors") {
            alert("You Lose! Scissors beats Paper");
            return 1;
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            alert("You Lose! Rock beats Scissors");
            return 1;
        }
        else if (computerSelection == "paper") {
            alert("You Win! Scissors beats Paper");
            return 0;
        }
        else if (computerSelection == "scissors") {
            alert("You Tied!");
            return null;
        }
    }
}

const game = () => {
    let playerscore = 0;
    let computerscore = 0;
    for (let i=0; i<5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors");
        let computerSelection = computerPlay();
        let playerWin = playRound(playerSelection, computerSelection);
        if (playerWin == 0)
            playerscore++;
        else if (playerWin == 1)
            computerscore++;
    }
    if (playerscore > computerscore)
        console.log(`You won ${playerscore} to ${computerscore}`);
    else if (playerscore < computerscore)
        console.log(`You lost ${computerscore} to ${playerscore}`);
    else
        console.log("You tied with the computer")
}

game();