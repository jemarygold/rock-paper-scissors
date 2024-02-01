const items = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const random = Math.floor(Math.random() * items.length);

    console.log(random, items[random]);
    return items[random]
}

getComputerChoice();

function playerSelection() {
    let playerChoice = "";
    let askCounter = 0

    const lowerCaseItems = items.map(element => {return element.toLowerCase();})

    while (!lowerCaseItems.includes(playerChoice.toLowerCase())) {
        if(askCounter == 0) {
            playerChoice = prompt("Please choose: Rock, Paper, Scissors?");
        } else {
            playerChoice = prompt("That isn't a valid choice, please choose: Rock, Paper, Scissors?")
        }

        askCounter++;
    }
    
}

playerSelection();


