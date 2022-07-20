"use strict";

const $ = selector => document.querySelector(selector);

let playerScore = 0;
let computerScore = 0;

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
            $("#roundWin").textContent = "You Tied!";
            return null;
        }
        else if (computerSelection == "paper") {
            $("#roundWin").textContent = "You Lose! Paper beats Rock";
            return 1;
        }
        else if (computerSelection == "scissors") {
            $("#roundWin").textContent = "You Win! Rock beats Scissors";
            return 0;
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            $("#roundWin").textContent = "You Win! Paper beats Rock";
            return 0;
        }
        else if (computerSelection == "paper") {
            $("#roundWin").textContent = "You Tied!";
            return null;
        }
        else if (computerSelection == "scissors") {
            $("#roundWin").textContent = "You Lose! Scissors beats Paper";
            return 1;
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            $("#roundWin").textContent = "You Lose! Rock beats Scissors";
            return 1;
        }
        else if (computerSelection == "paper") {
            $("#roundWin").textContent = "You Win! Scissors beats Paper";
            return 0;
        }
        else if (computerSelection == "scissors") {
            $("#roundWin").textContent = "You Tied!";
            return null;
        }
    }
}

const resetGame = () => {
    $("#playerScore").textContent = 0;
    $("#computerScore").textContent = 0;
    playerScore = 0;
    computerScore = 0;
}

const game = (playerSelection) => {
    let computerSelection = computerPlay();
    let playerWin = playRound(playerSelection, computerSelection);
    if (playerWin == 0) {
        playerScore++;
        $("#playerScore").textContent = `${playerScore}`;
    }
    else if (playerWin == 1) {
        computerScore++;
        $("#computerScore").textContent = `${computerScore}`;
    }

    if (computerScore >= 5) {
        resetGame();
        $("#gameWin").textContent = "the computer won the match";
    }
    if (playerScore >= 5) {
        resetGame();
        $("#gameWin").textContent = "you won the match";
    }
}


$("#rock").addEventListener("click", () => {
    game("rock");
});

$("#paper").addEventListener("click", () => {
    game("paper");
});

$("#scissors").addEventListener("click", () => {
    game("scissors");
});