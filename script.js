let userscore = 0;
let comscore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let score_user = document.querySelector("#score-user");
let score_comp = document.querySelector("#score-comp");

const draw = () => {
    console.log("Mtach Draw")
    msg.innerText = "Match Draw"
    msg.style.backgroundColor = "yellow"
}

const showWinner = (winner, compChoice, userChoice) => { 
    if (winner) {
        msg.innerText = `you Win!.Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
        userscore++;
        score_user.innerText = userscore
    }
    else {
        msg.innerText = `You Lose.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
        comscore++;
        score_comp.innerText = comscore
    }
}

const genComChoice = () => {
    let option = ["rock", "paper", "scissor"];
    let RandIndx = Math.floor(Math.random() * 3)
    return option[RandIndx]
}

const playGame = (userChoice) => {
    console.log("userchoice is ", userChoice)
    let compChoice = genComChoice();
    console.log("computer choice is ", compChoice);
    if (userChoice === compChoice) {
        draw()
    }
    else {
        let winner = true;
        if (userChoice === "rock") {
            winner = compChoice === "scissor" ? true : false
        }
        else if (userChoice === "scissor") {
            winner = compChoice === "paper" ? true : false
        }
        else {
            userChoice === "paper";
            winner = compChoice === "rock" ? true : false
        }
        showWinner(winner, compChoice, userChoice);

    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})


