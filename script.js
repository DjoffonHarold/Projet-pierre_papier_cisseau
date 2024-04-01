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
        
        const returnResult = document.createElement('p')
        returnResult.textContent ='there is the same result'
        result.appendChild(returnResult)
    }else if( playerSelection === 'Rock' && computerSelection === 'Scissors'){
        playerScore++
        
        const returnResult = document.createElement('p')
        returnResult.textContent =`you win ${playerScore}, Rock beat Scissors`
        result.appendChild(returnResult)
        
    }else if(playerSelection === 'Rock' &&  computerSelection === 'Paper'){
        computerScore++
      
        const returnResult = document.createElement('p')
        returnResult.textContent =`you lose ${computerScore}, Paper beat Rock` 
        result.appendChild(returnResult)
        
    }else if( playerSelection === 'Paper' && computerSelection === 'Paper'){
     
        const returnResult = document.createElement('p')
        returnResult.textContent ='there is the same result'
        result.appendChild(returnResult)
    }else if(playerSelection === 'Paper' && computerSelection === 'Scissors'){
        computerScore++
        
        const returnResult = document.createElement('p')
        returnResult.textContent =`you lose ${computerScore}, Scissors beat Paper`
        result.appendChild(returnResult)
    }else if( playerSelection === 'Paper' && computerSelection === 'Rock'){
        playerScore++
       
        const returnResult = document.createElement('p')
        returnResult.textContent =`you win ${playerScore}, Paper beat Rock`
        result.appendChild(returnResult)
    }else if(playerSelection === 'Scissors' && computerSelection === 'Scissors'){
       
        const returnResult = document.createElement('p')
        returnResult.textContent ='there is the same result'
        result.appendChild(returnResult)
    }else if( playerSelection === 'Scissors' && computerSelection === 'Paper'){
        playerScore++
       
        const returnResult = document.createElement('p')
        returnResult.textContent =`you win ${playerScore}, Scissors beat  Paper`
        result.appendChild(returnResult)
    }else if(playerSelection === 'Scissors' && computerSelection === 'Rock'){
        computerScore++
        
        const returnResult = document.createElement('p')
        returnResult.textContent = `you lose ${computerScore}, Rock beat Scissors`
        result.appendChild(returnResult)
    }

    
}

const result = document.querySelector('.Results')
let playerScore = 0;
let computerScore = 0;

function checkResult (playerScore, computerScore){
    
    if (computerScore === 5 ) {
        console.log('hey')
        const gameResult = document.querySelector('.gameResult')
        const computerResult = document.createElement('h2')
        computerResult.textContent = `lose, playerScore:${playerScore}, computerScore:${computerScore}, computer beat you `
        gameResult.appendChild(computerResult)
    }
        if(playerScore === 5){
            console.log('yo')
            const gameResult = document.querySelector('.gameResult')
            const playerResult = document.createElement('h2')
            playerResult.textContent = `win, playerScore:${playerScore}, computerScore:${computerScore}, you beat computer`
            gameResult.appendChild(playerResult)
        }
        
     

}

const rock = document.querySelector('.Rock')
rock.addEventListener('click', () => {
    const playerSelection = 'Rock'
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    checkResult(playerScore, computerScore);
    
})

const paper = document.querySelector('.Paper')
paper.addEventListener('click', () => {
    const playerSelection = 'Paper'
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    checkResult(playerScore, computerScore);
})
const scissors = document.querySelector('.Scissors')
scissors.addEventListener('click', () => {
    const playerSelection = 'Scissors'
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    checkResult(playerScore, computerScore)
})

/*function playGame(){
      
    //  playRound(playerSelection, computerSelection)
    
     

          if(playerScore > computerScore){
             scoreP.textContent = playerScore
              return `win, you beat computer`
          }else if (playerScore < computerScore) {
              scoreC.textContent = computerScore
              return `lose, computer beat you `
          } else {
              return 'ties, you are the same score'
          }
      }*/
  
    
    
