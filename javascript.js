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

// takes two paramaters and returns a value indicating the results of the game.
function Round(playerSelection,computerSelection)
{
    if (playerSelection===computerSelection)
    { 
        return 0;
    }
    else if(playerSelection === 'rock' && computerSelection==='paper'
        || playerSelection === 'paper' && computerSelection === 'scissors'
        || playerSelection === 'scissors' && computerSelection === 'rock')
    { 
        return 1;
    }
    else
    { 
        return 2;
    }
    
}
// plays a round of the game by invoking the last function and using the previous functions as parameters.
function playRound()
{ 
    return Round(playerSelection(),computerPlay());
}
// plays five rounds of the game, shows result's message for each round
// stores the score of these games and prints out a message of who's the winner.
function game()
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
}