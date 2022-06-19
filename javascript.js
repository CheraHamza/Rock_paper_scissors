//lets the computer make a random choice, then returns the result.
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


