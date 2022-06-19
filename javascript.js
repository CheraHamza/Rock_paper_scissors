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
// prompts the user to type in his choice.
function playerSelection()
{ 
    let choice= (prompt("choose: rock, paper or scissors ",''));
    return (choice.toLowerCase());
}

// takes two paramaters and returns a message indicating which one wins.
function Round(playerSelection,computerSelection)
{
    if (playerSelection===computerSelection)
    { 
        return 'that\'s a draw'
    }
    else if(playerSelection === 'rock' && computerSelection==='paper'
        || playerSelection === 'paper' && computerSelection === 'scissors'
        || playerSelection === 'scissors' && computerSelection === 'rock')
    { 
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else
    { 
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    
}
// plays a round of the game by invoking the last function and using the previous functions as parameters.
function playRound()
{ 
    return Round(playerSelection(),computerPlay());
}
