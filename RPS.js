let SCORE = {
    PW: 0,
    CW: 0,
    DRAW: 0
};





//* Header animation 
const header1 = document.querySelector(".header1");
const header2 = document.querySelector(".header2");
const header1Array = Array.from(document.querySelector(".header1").textContent);
const header2Array = Array.from(document.querySelector(".header2").textContent);

header1.textContent = "";
header2.textContent = "";

for (let i = 0; i < header1Array.length; i++) {
    document.querySelector(".header1").innerHTML += `<span class="span1">`+ header1Array[i] + `</span>`;

}

for (let i = 0; i < header2Array.length; i++) {
    document.querySelector(".header2").innerHTML += `<span class="span2">`+ header2Array[i] + `</span>`;

}

let char = 0;
let timer = setInterval(animation, 60);

function animation() {
    const span = document.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if(char === (header1Array.length + header2Array.length)) {
        for(let i =0; i < header1Array.length + header2Array.length; i++) {
            document.querySelectorAll("span")[i].classList.add("unfade");
        }
        complete();
        return;
    }
}



function complete() {
    
    clearInterval(timer);
    timer = null;
}


// show msg to user

function showMsg(msg) {
    const message = document.querySelector(".message");
    message.innerHTML = msg;
    message.classList.add("show");
    
}

//hide msg from user


function hideMsg() {
    const message = document.querySelector(".message");
    message.classList.add("hide");
    message.classList.remove("show");
    message.classList.remove("hide");
}

setTimeout(function() {
    showMsg("GO!!");
},5500);

setTimeout(hideMsg,7000)






//buttons animations

//show buttons
const buttonsWithContainers = document.querySelectorAll("button, .button-container");
function showBtn() {
    for (let i=0; i < buttonsWithContainers.length; i++) {

        buttonsWithContainers[i].classList.add("show-button-container");
    }
}

setTimeout(showBtn,8000);



function addButtonEvent() {
    const buttons = document.querySelectorAll(".button-container, button");
for (let i=0; i < buttons.length; i++) {
    // get bigger when mouse is over
   buttons[i].addEventListener("mouseover", (e) => {
        e.target.classList.add("button-bigger");
        e.target.parentElement.classList.add("button-bigger");

        e.preventDefault();
   }, false);

   // gets in the original position when mouse is out
   buttons[i].addEventListener("mouseout", (e) => {
    e.target.classList.remove("button-bigger");
    e.target.classList.remove("button-smaller");
    e.target.parentElement.classList.remove("button-bigger");
    e.target.parentElement.classList.remove("button-smaller");

    e.preventDefault();
}, false);

    // 
    buttons[i].addEventListener("mousedown", (e) => {    
        e.target.classList.remove("button-bigger");
        e.target.classList.add("button-smaller");
        e.target.parentElement.classList.remove("button-bigger");
        e.target.parentElement.classList.add("button-smaller");

   }, false);

   buttons[i].addEventListener("mouseup", (e) => {
    e.target.classList.remove("button-smaller");
    e.target.parentElement.classList.remove("button-smaller");
    e.target.classList.add("button-bigger");
    e.target.parentElement.classList.add("button-bigger");
    e.preventDefault();
}, false);
}};
setTimeout(addButtonEvent, 8000);




// Game function


let cohicesArray = document.querySelectorAll("button");
let playerScore = document.getElementById("score-player-left");
let computerScore = document.getElementById("score-player-right");
let messageToUser = document.querySelector(".message");

// addd click event listener to buttons (choicesarray)

cohicesArray.forEach(function(e) {
    e.addEventListener("click", getPlayerChoiceAndPlay);
});

function getPlayerChoiceAndPlay(e2) {
    let playerChoice = (e2.target.classList[0]);
    console.log(playerChoice);
    playRound(playerChoice);
    game();
}

function getComputerChoice() {
    const CHOICES = ["ROCK", "PAPER", "SCISSORS"]
    let randomNumber = Math.floor(Math.random()*3)
    return CHOICES[randomNumber]
}




function playRound(playerChoice) {
    let computer = getComputerChoice();
    let player = playerChoice;
    
    if (player === computer) {
        SCORE["DRAW"]++;
       
        if (document.querySelector(".message").classList[1] === "show") {
            document.querySelector(".message").classList.remove("show");
        }
        else  {
            document.querySelector(".message").classList.add("show");
        }
        messageToUser.innerHTML = "DRAW";
    }
    else if (player === "ROCK" && computer === "SCISSORS") {
        SCORE["PW"]++;
        playerScore.textContent = SCORE["PW"];

        document.querySelector(".image-container-left").classList.add("image-animation");
        const animationed = document.querySelector("div.image-animation");
        animationed.addEventListener("animationend", () => {
            animationed.classList.remove("image-animation");
        })

        document.querySelector("#score-player-left").classList.add("score-animation");
        const animationedscore = document.querySelector("div.score-animation");
        animationedscore.addEventListener("animationend", () => {
            animationedscore.classList.remove("score-animation");
        })

        if (document.querySelector(".message").classList[1]  === "show") {

            document.querySelector(".message").classList.remove("show");
        }
        else {
            document.querySelector(".message").classList.add("show");
        }
        messageToUser.innerHTML= `YOU WON! ${player}  >  ${computer}!`;

        
    }
    else if (player === "PAPER" && computer === "ROCK") {
        SCORE["PW"]++;
        playerScore.textContent = SCORE["PW"];

        document.querySelector(".image-container-left").classList.add("image-animation");
        const animationed = document.querySelector("div.image-animation");
        animationed.addEventListener("animationend", () => {
            animationed.classList.remove("image-animation");
        })

        document.querySelector("#score-player-left").classList.add("score-animation");
        const animationedscore = document.querySelector("div.score-animation");
        animationedscore.addEventListener("animationend", () => {
            animationedscore.classList.remove("score-animation");
        })

        if (document.querySelector(".message").classList[1]  === "show") {
            document.querySelector(".message").classList.remove("show");
        }
        else   {
            document.querySelector(".message").classList.add("show");
        }
        messageToUser.innerHTML= `YOU WON! ${player}  >  ${computer}!`;
        

    }
    else if (player === "SCISSORS" && computer === "PAPER") {
        SCORE["PW"]++;
        playerScore.textContent = SCORE["PW"];
        document.querySelector(".image-container-left").classList.add("image-animation");
        const animationed = document.querySelector("div.image-animation");
        animationed.addEventListener("animationend", () => {
            animationed.classList.remove("image-animation");
        })

        document.querySelector("#score-player-left").classList.add("score-animation");
        const animationedscore = document.querySelector("div.score-animation");
        animationedscore.addEventListener("animationend", () => {
            animationedscore.classList.remove("score-animation");
        })

        if (document.querySelector(".message").classList[1]  === "show") {
            document.querySelector(".message").classList.remove("show");
        }
        else   {
            document.querySelector(".message").classList.add("show");
        }
        messageToUser.innerHTML= `YOU WON! ${player}  >  ${computer}!`;
        

    }
    else {
        SCORE["CW"]++;
        computerScore.textContent = SCORE["CW"];

        document.querySelector(".image-container-right").classList.add("image-animation");
        const animationed = document.querySelector("div.image-animation");
        animationed.addEventListener("animationend", () => {
            animationed.classList.remove("image-animation");
        })


        document.querySelector("#score-player-right").classList.add("score-animation");
        const animationedscore = document.querySelector("div.score-animation");
        animationedscore.addEventListener("animationend", () => {
            animationedscore.classList.remove("score-animation");
        })


        
        if (document.querySelector(".message").classList[1]  === "show") {
            document.querySelector(".message").classList.remove("show");
        }
        else   {
            document.querySelector(".message").classList.add("show");
        }
        messageToUser.innerHTML= `YOU LOST! ${computer}  >  ${player}!`;
    }
}



function game() {   

    if (SCORE["PW"] == 5) {
        messageToUser.innerHTML = `FINAL RESULT - PLAYER: 5  COMPUTER: ${SCORE["CW"]}`
        document.querySelector(".message").classList.add("show")
        let imageContainerL = document.querySelector(".image-container-left");
        imageContainerL.style.opacity = 1;

        let scoreContainerL = document.querySelector(".score-container-left");
        scoreContainerL.style.opacity = 1;

        let imageContainerR = document.querySelector(".image-container-right");
        imageContainerR.style.opacity = 0.1;

        let scoreContainerR= document.querySelector(".score-container-right");
        scoreContainerR.style.opacity = 0.1;
        
        cohicesArray.forEach(function(e) {
            e.removeEventListener("click", getPlayerChoiceAndPlay)
        });
    }
    if (SCORE["CW"] == 5) {

        messageToUser.innerHTML = `FINAL RESULT - PLAYER: ${SCORE["PW"]} - COMPUTER: 5`
        document.querySelector(".message").classList.add("show")

        let imageContainerL = document.querySelector(".image-container-left");
        imageContainerL.style.opacity = 0.1;

        let scoreContainerL = document.querySelector(".score-container-left");
        scoreContainerL.style.opacity = 0.1;

        let imageContainerR = document.querySelector(".image-container-right");
        imageContainerR.style.opacity = 1;

        let scoreContainerR= document.querySelector(".score-container-right");
        scoreContainerR.style.opacity = 1;

        cohicesArray.forEach(function(e) {
            e.removeEventListener("click", getPlayerChoiceAndPlay)
        });
    }
}










