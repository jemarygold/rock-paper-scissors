const items = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const random = Math.floor(Math.random() * items.length);

    console.log(random, items[random]);
    return items[random]
}

// getComputerChoice();

function getPlayerSelection() {
    let playerChoice = "";
    let askCounter = 0

    const lowerCaseItems = items.map(element => {return element.toLowerCase();})

    // loop until sensible input is given
    while (!lowerCaseItems.includes(playerChoice.toLowerCase())) {
        if(askCounter === 0) {
            playerChoice = prompt("Please choose: Rock, Paper, Scissors?");
        } else {
            playerChoice = prompt("That isn't a valid choice, please choose: Rock, Paper, Scissors?")
        }

        // Loop to get alternative question after initial input
        askCounter++;
    }
    
    // rChange to proper case
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1).toLowerCase();

    return playerChoice;

}


function playRound(playerSelection, computerSelection, playerScore=0, computerScore=0) {
    if ((playerSelection === "Rock" && computerSelection === "Scissors")
        || (playerSelection === "Paper" && computerSelection === "Rock")
        || (playerSelection === "Scissors" && computerSelection === "Paper")) {
            playerScore += 1;
            return [`Congrats, you win this round! ${playerSelection} beats ${computerSelection}. Player: ${playerScore} Computer: ${computerScore}`, playerScore, computerScore];
    } else if (playerSelection === computerSelection) {
        return [`It's a draw! You both chose ${playerSelection} Player: ${playerScore} Computer: ${computerScore}` , playerScore, computerScore];
    } else {
        computerScore += 1;
        return [`You Lose this round! ${computerSelection} beats ${playerSelection}. Player: ${playerScore} Computer: ${computerScore}`, playerScore, computerScore];
    }   
}


const buttonElements = document.querySelectorAll('button');

let playerScore = 0;
let computerScore = 0;

buttonElements.forEach(function (buttonElement) {
    buttonElement.addEventListener('click', function() {

        const playerChoice = buttonElement.innerText;
        const gameResultMessage = document.querySelector(".game-resul");
        [gameResultMessage.innerText, playerScore, computerScore] = playRound(playerChoice, getComputerChoice(), playerScore, computerScore);

        if(playerScore == 5) {
            gameResultMessage.innerText = `Congratulations you're the first to win ${playerScore} games!`
        } else if (computerScore == 5){
            gameResultMessage.innerText = `Unlucky! The computer was first to win ${computerScore} games!`

        }
    });
});





// playGame();