//JavaScript


const rocks = document.getElementById("rock");
rocks.addEventListener("click", myRock);

const papers = document.getElementById("paper");
papers.addEventListener("click", myPaper);

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", myScissor);


const container = document.querySelector('.container-images');
container.addEventListener('click', playRound)

function myScissor() {
    playerSelection = 'scissors';
    console.log(playerSelection);
    return playerSelection;
}

function myPaper() {
    playerSelection = 'paper';
    console.log(playerSelection)
    return playerSelection;
}

function myRock() {
    playerSelection = 'rock';
    console.log(playerSelection)
    return playerSelection;
}

function getComputerChoice(){
    const choice =['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * choice.length);
    return random, choice[random];
}

computerSelection = getComputerChoice();

function playRound(){
        //PlayerSelection Rock
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return console.log('You Win!')
    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return console.log('You Lose!')
    }else if(playerSelection === 'rock' && computerSelection === 'rock'){
        return console.log('You Tied!')
        //PlayerSelection Paper
    }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return console.log('You Lose!')
    }else if (playerSelection === 'paper' && computerSelection === 'paper'){
        return console.log('You Tied!')
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return console.log('You Win!')
        //PlayerSelection Scissors
    }else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return console.log('You Tied!')
    }else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return console.log('You Win!')
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return console.log('You Lose!')
    }else{
        return "Invalid input! Can't compare " + (playerSelection) + ' to ' + (computerSelection)
    }
  }
