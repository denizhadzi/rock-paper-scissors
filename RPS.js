let SCORE = {
    PW: 0,
    CW: 0,
    DRAW: 0
};


let cohicesArray = document.querySelectorAll("button");
let playerScore = document.getElementById("score-player");
let computerScore = document.getElementById("score-computer");
let drawScore = document.getElementById("score-draw");
let scoreAlert1 = document.getElementById("alert-container1");
let scoreAlert2 = document.getElementById("alert-container2");

function game() {   

    if (SCORE["PW"] == 5) {
        scoreAlert1.innerHTML = `YOU WON THE GAME!`
        scoreAlert2.innerHTML = `FINAL RESULT - PLAYER: 5  COMPUTER: ${SCORE["CW"]}`
        cohicesArray.forEach(function(e) {
            e.removeEventListener("click", getinnerHTML)
        });
    }
    if (SCORE["CW"] == 5) {

        scoreAlert1.innerHTML = `YOU LOST THE GAME!`
        scoreAlert2.innerHTML = `FINAL RESULT - PLAYER: ${SCORE["PW"]} - COMPUTER: 5`
        cohicesArray.forEach(function(e) {
            e.removeEventListener("click", getinnerHTML)
        });
    }
}


cohicesArray.forEach(function(e) {
    e.addEventListener("click", getinnerHTML);
})

function getinnerHTML(e2) {
    const playerChoice = e2.target.innerHTML;
    playRound(playerChoice);
    game();
}

function playRound(playerChoice) {
    let computer = getComputerChoice();
    let player = playerChoice;
    if (player === computer) {
        SCORE["DRAW"]++;
        drawScore.innerHTML = SCORE["DRAW"];
        scoreAlert1.innerHTML = "DRAW"
        scoreAlert2.innerHTML = ""

    }
    else if (player === "ROCK" && computer === "SCISSORS") {
        SCORE["PW"]++;
        playerScore.innerHTML = SCORE["PW"];
        scoreAlert1.innerHTML = `CONGRATS! YOU WON!`
        scoreAlert2.innerHTML = `${player}  BEATS  ${computer}!`
    }
    else if (player === "PAPER" && computer === "ROCK") {
        SCORE["PW"]++;
        playerScore.innerHTML = SCORE["PW"];
        scoreAlert1.innerHTML = `CONGRATS! YOU WON!`
        scoreAlert2.innerHTML = `${player}  BEATS  ${computer}!`
    }
    else if (player === "SCISSORS" && computer === "PAPER") {
        SCORE["PW"]++;
        playerScore.innerHTML = SCORE["PW"];
        scoreAlert1.innerHTML = `CONGRATS! YOU WON!`
        scoreAlert2.innerHTML = `${player}  BEATS  ${computer}!`
    }
    else {
        SCORE["CW"]++;
        computerScore.innerHTML = SCORE["CW"]; 
        scoreAlert1.innerHTML = `YOU LOST!`
        scoreAlert2.innerHTML = `${computer}  BEATS  ${player}!`
    }



}

function getComputerChoice() {
    const CHOICES = ["ROCK", "PAPER", "SCISSORS"]
    let randomNumber = Math.floor(Math.random()*3)
    console.log(randomNumber)
    return CHOICES[randomNumber]
}




