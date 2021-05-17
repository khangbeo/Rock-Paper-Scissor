/*
Rock paper scissor
take input from player
  when player input is recorded, computer will select a choice
    3 choices: rock, paper, scissor
convert player input into int
make playerSelection case-insensitive
*/
function computerPlay() {
    const moveList = ['rock','paper','scissor'];
    const randomMove = moveList[Math.floor(Math.random()*moveList.length)];
    return randomMove;
  }
  
  function playerPlay() {
    let pChoice = prompt('Play Rock, Paper, Scissor');
    pChoice = pChoice.toLowerCase();
    return pChoice;
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
  
    if(computerSelection == 'rock'){
      if(playerSelection == 'rock'){
        console.log('Tie, Rock and Rock');
      }
      else if(playerSelection == 'paper'){
        console.log('You Win, Paper beats Rock');
        return pScore++;
      }
      else if(playerSelection == 'scissor'){
        console.log('You Lose, Rock beats Scissor');
        return cScore++;
      }
    }
  
    if(computerSelection == 'scissor'){
      if(playerSelection == 'scissor'){
        console.log('Tied, Scissor and Scissor');
      }
      else if(playerSelection == 'paper'){
        console.log('You lose, Scissor beats Paper');
        return cScore++;
      }
      else if(playerSelection == 'rock'){
        console.log('You Win, Rock beats Scissor');
        return pScore++;
      }
    }
    
    if(computerSelection == 'paper'){
      if(playerSelection == 'paper'){
        console.log('Tied, Paper and Paper');
      }
      else if(playerSelection == 'rock'){
        console.log('You lose, Paper beats Rock');
        return cScore++;
      }
      else if(playerSelection == 'scissor'){
        console.log('You Win, Scissor beats Paper');
        return pScore++;
      }
    }
  }
  
  function game(){
    let i = 0;
    do {
      playRound(playerSelection, computerSelection);
      i++;
    } while(i < 5);
    /*
    for(i = 0; i < 5; i++){
      playRound(playerSelection, computerSelection;
    }*/
    if(pScore > cScore){
      console.log('You win this round');
    }
    else if(pScore < cScore){
      console.log('You lose this round');
    }
    else if(pScore == cScore){
      console.log('You and the Computer tied');
    }
  }
  
    
  var pScore = 0;
  var cScore = 0;
  var playerSelection;
  var computerSelection;
  
  game();
  console.log('Your score is '+ pScore);
  console.log('Computer score is '+ cScore);
  console.log('Game Over');