function getComputerChoice(){
   const number = Math.floor(Math.random()*3) 
   let choice;
   if(number === 0){
     choice = 'Rock';
   }else if (number === 1) {
     choice = 'Paper';
    } else {
        choice = 'Scissors'
   }
   return choice;
}


function playRound(playerSelection, computerSelection){
    if(playerSelection === 'Rock' && computerSelection === 'Rock'){
        return 'there is the same result'
    }else if( playerSelection === 'Rock' && computerSelection === 'Scissors'){
        playerScore++
        return'you win, Rock beat Scissors'
    }else if(playerSelection === 'Rock' &&  computerSelection === 'Paper'){
        computerScore++
        return'you lose, Paper beat Rock' 
    }else if( playerSelection === 'Paper' && computerSelection === 'Paper'){
        return'there is the same result'
    }else if(playerSelection === 'Paper' && computerSelection === 'Scissors'){
        computerScore++
        return'you lose, Scissors beat Paper'
    }else if( playerSelection === 'Paper' && computerSelection === 'Rock'){
        playerScore++
        return'you win, Paper beat Rock'
    }else if(playerSelection === 'Scissors' && computerSelection === 'Scissors'){
        return'there is the same result'
    }else if( playerSelection === 'Scissors' && computerSelection === 'Paper'){
        playerScore++
        return'you win, Scissors beat  Paper'
    }else if(playerSelection === 'Scissors' && computerSelection === 'Rock'){
        computerScore++
        return 'you lose, Rock beat Scissors'
    }

    
}


let playerScore = 0;
let computerScore = 0
function playGame(){
    for(let i =0; i < 5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt('Please make you choice:', 'Rock, Paper, Scissors')
        console.log(playRound(playerSelection, computerSelection))  ;
    }
    
    if(playerScore > computerScore){
        
        return `win, you beat computer`
    }else if (playerScore < computerScore) {
        computerScore
        return `lose, computer beat you `
    } else {
        return 'ties, you are the same score'
    }
    
}
console.log(playGame())
 


