SCORE = {
    PW: 0,
    CW: 0,
    DRAW: 0
};

game();


function game() {    
        for (let i = 0; i < 5; i++) {
            SCORE[playRound()]++;
            console.log(SCORE);
        }
        if (SCORE.PW > SCORE.CW || SCORE.PW >= 3) {
            alert(`Congratulations, you won the game!!! \n PLAYER:${SCORE.PW}\n COMPUTER:${SCORE.CW}\n DRAW:${SCORE.DRAW} `)
        }
        else if (SCORE.CW > SCORE.PW || SCORE.CW >= 3) {
            alert(`Sorry, you lost!!! \n COMPUTER:${SCORE.CW}\n PLAYER:${SCORE.PW}\n DRAW:${SCORE.DRAW}\n `)
        }
        else {
            alert(`Ehh there is no winner!!!\n PLAYER:${SCORE.PW}\n COMPUTER:${SCORE.CW}\n DRAW:${SCORE.DRAW} `)
        }
    }



function playRound() {
    let computer = getComputerChoice()
    let player = getPlayerChoice()
    if (player === computer) {
        alert(`Its a draw, PLAYER:${player}  COMPUTER:${computer}`)
        return "DRAW"
    }
    else if (player === "ROCK" && computer === "SCISSORS") {
        alert(`You win, ${player}  beats  ${computer}!!`)
        return "PW"
    }
    else if (player === "PAPER" && computer === "ROCK") {
        alert(`You win, ${player}  beats  ${computer}!!`)
        return "PW"
    }
    else if (player === "SCISSORS" && computer === "PAPER") {
        alert(`You win, ${player}  beats  ${computer}!!`)
        return "PW"
    }
    else {
        alert(`You lose, ${computer} beats ${player}!!`)
        return "CW"
    }
}

function getPlayerChoice() {
    let pick = prompt("Please, make your choice", "Rock, Paper or Scissors").toUpperCase();
    
    if (pick === "ROCK" || pick === "PAPER" || pick === "SCISSORS") {
        return pick;
    }
    else {
       return getPlayerChoice();
    }


    
}

function getComputerChoice() {
    const CHOICES = ["ROCK", "PAPER", "SCISSORS"]
    let randomNumber = Math.floor(Math.random()*3)
    console.log(randomNumber)
    return CHOICES[randomNumber]
}




