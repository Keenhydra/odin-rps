//JavaScript

//const choices = document.querySelectorAll('.choice');

const rocks = document.getElementById("rock");
rocks.addEventListener("click", myRock);

const papers = document.getElementById("paper");
papers.addEventListener("click", myPaper);

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", myScissor);
//scissors.addEventListener('click', playSound)

function myScissor() {
  choice = 'scissors';
  console.log(choice);
  return choice;
}

function myPaper() {
    choice = 'paper';
    console.log(choice)
    return choice;
}

function myRock() {
    choice = 'rock';
    console.log(choice)
    return choice;
}

function playSound(){
    console.log('boom');
}


//function getPlayerChoice(e) {
//  console.log(this.id);
//  e.stopPropagation();
//  playerChoice = this.id;
//  return playerSelection;}

//choices.forEach(choice => choice.addEventListener('click', getPlayerChoice, {
//  capture: true
//}));


function getComputerChoice(){
    const choice =['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * choice.length);
    return random, choice[random];
}

computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection){
        //PlayerSelection Rock
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        return 'You Win!'
    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You Lose!'
    }else if(playerSelection === 'rock' && computerSelection === 'rock'){
        return 'You Tied!'
        //PlayerSelection Paper
    }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'You Lose!'
    }else if (playerSelection === 'paper' && computerSelection === 'paper'){
        return 'You Tied!'
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You Win!'
        //PlayerSelection Scissors
    }else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return 'You Tied!'
    }else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'You Win!'
    }else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        return 'You Lose!'
    }else{
        return "Invalid input! Can't compare " + (playerSelection) + ' to ' + (computerSelection)
    }
  }
