//JavaScript

const choices = document.querySelectorAll('.choice');

function getPlayerChoice(e){
    console.log(this.classList.value);
}

choices.forEach(choice => choice.addEventListener('click', getPlayerChoice));


function getComputerChoice(){
    const choice =['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * choice.length);
    return random, choice[random];
}






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
