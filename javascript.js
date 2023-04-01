const matchResult = document.querySelector('.matchResult');
const finalResult =document.querySelector('.finalResult');

// lets the computer make a random choice, then returns the result.
function computerPlay()
{
    let random=(Math.floor(Math.random()*100)+1);
    if (random<=(100/3))
    {
        return 'rock';
    }
    else if (random<(200/3))
    { 
        return 'paper';
    }
    else
    { 
        return 'scissors';
    }
}

function playerSelection(choice)
{ 
    return (choice.toLowerCase());
}

// takes two parameters and returns a value indicating the results of the game.
function Round(playerSelection,computerSelection)
{
    if (playerSelection===computerSelection)
    { 
        return 'draw';
    }
    else if(playerSelection === 'rock' && computerSelection==='paper'
        || playerSelection === 'paper' && computerSelection === 'scissors'
        || playerSelection === 'scissors' && computerSelection === 'rock')
    { 
        return 'lose';
    }
    else
    { 
        return 'win';
    }
    
}
let csScore=0;
let plrScore=0;
let result=0;

function Playround(e)
{ 
    this.classList.add('clicked');
    let choice=playerSelection(e.target.classList[0]);
    let csChoice=computerPlay()
    result=Round(choice,csChoice);
    if(csScore<5 && plrScore<5)
    {
        console.log(result);
        if (result==='lose')
        {
            csScore++;
            matchResult.textContent=`${choice} is beaten by ${csChoice}!`;
            score.innerHTML=`<p>COMPUTER: ${csScore}/5</p><p>YOU: ${plrScore}/5</p>`;
        }
        else if(result==='win')
        {
            plrScore++;
            matchResult.textContent=`${choice} beats ${csChoice}!`;
            score.innerHTML=`<p>COMPUTER: ${csScore}/5</p><p>YOU: ${plrScore}/5</p>`;
        }
        else
        {
            matchResult.textContent=`${choice} ties with ${csChoice}!`;
            score.innerHTML=`<p>COMPUTER: ${csScore}/5</p><p>YOU: ${plrScore}/5</p>`;
        }
        
    }
    if (csScore===5)
    {
        finalResult.textContent='You Have Lost The Game!';
    }
    else if (plrScore===5)
    {
        finalResult.textContent='You Have Won The Game!';
    }   
}

function removeTransition(e)
{
    if(e.propertyName !== 'transform') return;
    this.classList.remove('clicked');
}

let btns = document.querySelectorAll('button'); 
btns.forEach( btn => btn.addEventListener('click', Playround));
btns.forEach(btn => btn.addEventListener('transitionend',removeTransition));


const score= document.querySelector('.score');











    
    
    

















// plays five rounds of the game, shows result's message for each round
// stores the score of these games and prints out a message of who's the winner.
/*function game()
{   
    let roundResult;
    let computerscore=0;
    let myscore=0;
    for ( let i = 0; i < 5; i++)
    {
        roundResult=playRound();
        if(roundResult===0)
        {
            console.log("that's a draw!");
        }
        else if (roundResult===1)
        { 
            computerscore++;
            console.log("you Lose!");
        }
        else
        { 
            myscore++;
            console.log("You Win!")
        }
    }
    if(myscore===computerscore)
    { 
        console.log("draw");
    }
    else if (myscore>computerscore)
    { 
        console.log("you are the winner!");
    }
    else
    {
        console.log("you lost!");
    }
}*/