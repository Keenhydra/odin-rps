//JavaScript
//get computerSelection every round
//return score to document
//create round counter XXX
//create score keeper
//return score/round to document
//create big ol reset button

//finish up bug fixes

const rocks = document.getElementById("rock");
rocks.addEventListener("click", myRock);

const papers = document.getElementById("paper");
papers.addEventListener("click", myPaper);

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", myScissor);

const container = document.querySelector('.container-images');
container.addEventListener('click', getComputerChoice)
container.addEventListener('click', playRound)
container.addEventListener('click', update)


function myScissor() {
    playerSelection = 'scissors';
    return playerSelection;
}

function myPaper() {
    playerSelection = 'paper';
    return playerSelection;
}

function myRock() {
    playerSelection = 'rock';
    return playerSelection;
}

function getComputerChoice(){
    const choice =['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * choice.length);
    computerSelection = (random,choice[random]);
    return computerSelection;
}

playerScore = 0;
computerScore = 0;

function playRound(){
        //PlayerSelection Rock
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        document.getElementById("result").innerText = "You Won!";
        playerScore += 1;
    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
        document.getElementById("result").innerText = "You Lose!";
        computerScore += 1;
    }else if(playerSelection === 'rock' && computerSelection === 'rock'){
        document.getElementById("result").innerText = 'You Tied!';
        //PlayerSelection Paper
    }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        document.getElementById("result").innerText = "You Lose!";
        computerScore += 1;
    }else if (playerSelection === 'paper' && computerSelection === 'paper'){
        document.getElementById("result").innerText = "You Tied!";
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        document.getElementById("result").innerText = "You Won!";
        playerScore += 1;
        //PlayerSelection Scissors
    }else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        document.getElementById("result").innerText = "You Tied!";
    }else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        document.getElementById("result").innerText = "You Won!";
        playerScore += 1;
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        document.getElementById("result").innerText = "You Lose!";
        computerScore += 1;
    }else{
        return "Invalid input! Can't compare "
    }
  }


function update() {
    document.getElementById('score-player').innerText = `${playerScore}`
    document.getElementById('score-computer').innerText = `${computerScore}`
    document.getElementById('computer-selection').innerText = `Computer picked ${computerSelection}`
    if (playerScore === 5){
        document.getElementById('computer-selection').innerText = `You won the game!`;
        removeAllChildNodes(parent);
        parent.appendChild(btn);
        const reload = document.getElementById('reload');
        reload.addEventListener("click", refresh);
    } else if (computerScore === 5){
        document.getElementById('computer-selection').innerText = `Computer won the game!`;
        removeAllChildNodes(parent);      
        parent.appendChild(btn);
        const reload = document.getElementById('reload');
        reload.addEventListener("click", refresh);
    } 
    }

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
const parent = document.querySelector('.display-result');

let btn = document.createElement("button");
btn.innerHTML = "Reload";
btn.id = 'reload'


function refresh() {
    location.reload();
}