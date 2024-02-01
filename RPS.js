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


function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock" && computerSelection === "Scissors")
        || (playerSelection === "Paper" && computerSelection === "Rock")
        || (playerSelection === "Scissors" && computerSelection === "Paper")) {
            return "Congrats, you win!";
    } else if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }   
}


function playGame() {
    const numberOfGames = prompt("How many games would you like to play?")



    for (i=1; i<= numberOfGames; i++) {

        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }
}



playGame();