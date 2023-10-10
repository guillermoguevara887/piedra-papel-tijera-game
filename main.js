let playerResult = 0;
let computerResult = 0;
let player = document.getElementById('player');
let compu = document.getElementById('computer-choice');
let result = document.getElementById('result');
let scorePlayer = document.getElementById('scorePlayer');
let scoreComputer = document.getElementById('scoreComputer');


function selectRock() {
    let playerChoice = "Rock";
    let computer = selectComputer();
    let computerOption = selectOption(computer);
    player.textContent = "Player: " + playerChoice;
    compu.textContent = "Computer: " + computerOption;

    if (computerOption == "Paper") {

        lost();

    } else if (computerOption == "Scissor") {

        win();

    } else {
        result.textContent = "Draw";
    }


}
function selectPaper() {
    let playerChoice = "Paper";
    let computer = selectComputer();
    let computerOption = selectOption(computer);
    player.textContent = "Player: " + playerChoice;
    compu.textContent = "Computer: " + computerOption;

    if (computerOption == "Scissor") {

        lost();

    } else if (computerOption == "Rock") {
        win();
    } else {
        result.textContent = "Draw";

    }


}
function selectScissor() {
    let playerChoice = "Scissor";
    let computer = selectComputer();
    let computerOption = selectOption(computer);
    player.textContent = "Player: " + playerChoice;
    compu.textContent = "Computer: " + computerOption;

    if (computerOption == "Rock") {

        lost();

    } else if (computerOption == "Paper") {
        win();
    } else {
        result.textContent = "Draw";

    }

}

function lost() {
    result.textContent = "You Lost";
    computerResult++;
    scoreComputer.textContent = computerResult;


}
function win() {
    result.textContent = "You Win";
    playerResult++;
    scorePlayer.textContent = playerResult;

}




function selectComputer() {
    let computerChoice = Math.floor(Math.random() * 3)


    return computerChoice;

}

function selectOption(option) {
    if (option == 0) {
        variable = "Rock"
    } else if (option == 1) {
        variable = "Paper"
    } else {
        variable = "Scissor"
    }

    return variable;

}

function reset() {
    playerResult = 0;
    computerResult = 0;
    scoreComputer.textContent = computerResult;
    scorePlayer.textContent = playerResult;

}
