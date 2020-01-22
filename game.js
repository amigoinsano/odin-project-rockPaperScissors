function computerPlay() {
    let randomNum = randomNumber();
    let choice = (randomNum === 1) ? "rock" : (randomNum === 2) ? "paper" : "scissors";
    return choice;
}

function randomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw!";
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return createResultText("lose", playerSelection, computerSelection);
        } else {
            return createResultText("win", playerSelection, computerSelection);
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return createResultText("lose", playerSelection, computerSelection);
        } else {
            return createResultText("win", playerSelection, computerSelection);
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return createResultText("lose", playerSelection, computerSelection);
        } else {
            return createResultText("win", playerSelection, computerSelection);
        }
    }

}

function createResultText(result, playerSelection, computerSelection) {
    playerSelection = playerSelection.replace(playerSelection.charAt(0), playerSelection.charAt(0).toUpperCase());
    computerSelection = computerSelection.replace(computerSelection.charAt(0), computerSelection.charAt(0).toUpperCase());
    if (result === "win") {
        playerPoints++;
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    } else if (result === "draw") {
        return "Draw!";
    } else {
        computerPoints++;
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }
}

function createResetButton(){
    const resetButton = document.createElement("button");
    resetButton.innerHTML = "Reset the Game";
    resetButton.addEventListener("click", resetGame);
    resetButton.setAttribute("id", "resetbutton");
    resetButton.toggleAttribute("resetButton");
    return resetButton;
}

function resetGame(){
    playerPoints = 0;
    computerPoints = 0;
    resultArea.textContent = "Click one of the buttons to play a round!";
    scoreArea.textContent = "";
    scoreArea.removeChild(document.getElementById("resetbutton"));
}

function playGame(playerSelection, computerSelection) {
    const result = playRound(playerSelection, computerSelection);
    resultArea.textContent = result;
    if (playerPoints >= 5) {
        scoreArea.textContent = "Congratulations! You won!";
        resetButtonArea.append(createResetButton());
    } else if (computerPoints >= 5) {
        scoreArea.textContent = "The computer won :(";
        resetButtonArea.append(createResetButton());
    } else { 
        scoreArea.textContent = "Player: " + playerPoints + " - " + computerPoints + " :Computer"; 
    }
}

let playerPoints = 0;
let computerPoints = 0;
const resultArea = document.querySelector("#result");
const scoreArea = document.querySelector("#score");
const resetButtonArea = document.querySelector("#resetButton");
const playbuttons = document.querySelectorAll(".playbutton");
playbuttons.forEach(currentButton => {
    currentButton.addEventListener("click", function () {
        playGame(currentButton.id, computerPlay());
    })
    console.log("added eventlistener")
});
    /* old playGame Function from the first Version of the Game (JavaScript Fundamentals) */
/*    function playGame() {
       let playerScore = 0, computerScore = 0;
       let playerSelection, computerSelection;
       let result;
       for (i = 0; i < 5; i++) {
           playerSelection = prompt("Enter rock, paper or scissors");
           computerSelection = computerPlay();
           result = playRound(playerSelection, computerSelection);
           (result === "win") ? (
               console.log(createResultText("win",playerSelection, computerSelection)),
               playerScore++
           ) : (result === "lose") ? (
               console.log(createResultText("lose",playerSelection, computerSelection)),
               computerScore++
           ) : console.log("Draw!");
       }
       console.log((playerScore>computerScore)?"Player won. \nPlayer: " + playerScore + "\nComputer: " + computerScore:
       "Computer won. \nPlayer: " + playerScore + "\nComputer: " + computerScore)
   } */