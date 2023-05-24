//JavaScript





for(let i = 1; i <= 5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log('Round Number: ' + i);
    console.log('You picked ' + playerSelection);
    console.log('Computer picked ' + computerSelection);
    console.log(playRound(playerSelection, computerSelection))
}

function getComputerChoice(){
    const choice =['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * choice.length);
    return random, choice[random];
}

function getPlayerChoice(){
    const playerInput = prompt('Rock, Paper or Scissors?');
    let playerSelection = playerInput.toLowerCase('');
    return playerSelection;
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
