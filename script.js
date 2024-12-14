let score =  JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
 
updateScore();
let result = '';




  function playGame(playerMove){
    const computerMove= pickComputerMove();
    let result = '';
        
    if (playerMove === 'scissors'){
       
        if (computerMove ==='rock')
        { 
            result = 'you lose';
        }else if (computerMove ==='paper')
        { 
            result ='you win';
        } else if (computerMove === 'scissors')
        { 
            result='tie';
        }
        
    }else if(playerMove=== 'paper'){


        if (computerMove==='rock')
        { 
            result= 'you win';
        }else if (computerMove==='paper')
        {
            result='tie';
        } else if (computerMove=== 'scissors')
        { 
            result='you lose';
        }
    }else if(playerMove==='rock'){
        if (computerMove==='rock')
        { 
            result= 'tie';
        }else if (computerMove==='paper')
        { 
            result='you lose';
        } else if (computerMove=== 'scissors')
        { 
            result='you win';
        }
    }

    if( result === 'you win')
    {
      score.wins+=1;
    }else if (result ==='you lose'){
     score.losses +=1;

    }else if(result==='tie'){
    score.ties +=1;
    }
    localStorage.setItem('score', JSON.stringify(score));

    updateScore();
    document.querySelector('.js-result').innerText = result;

    document.querySelector('.js-moves').innerHTML = 
   ` you 
    <img src="/img/${playerMove}-emoji.png " alt="" width="50px">|
    <img src="/img/${computerMove}-emoji.png" alt="" width="50px">
    computer`
    
    }
    function updateScore() {
document.querySelector('.js-score').innerHTML = 
    `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}.`;

}

    
 function pickComputerMove(){
   const randomNumber = Math.random();
   let computerMove = '';
   
   
   if (randomNumber>=0 && randomNumber<1/3)
   {
       computerMove='rock';
   } 
    
   if (randomNumber>=1/3 && randomNumber<2/3)
   {   
        computerMove='paper';
   }
       
   if (randomNumber>=2/3 && randomNumber<1)
   {
        computerMove='scissors';
   }
        console.log(computerMove)  
    return computerMove;
 }
 function replay(){
    
    const response ='Score has been reset \nWins: '+score.wins+' Losses: '+score.losses+' Ties: '+score.ties+'.';
      
}