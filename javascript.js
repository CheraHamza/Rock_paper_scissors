function computerPlay()
{
    let random=(Math.floor(Math.random()*100)+1);
    if (random<=(100/3))
    {
        return 'Rock';
    }
    else if (random<(200/3))
    { 
        return 'Paper';
    }
    else
    { 
        return 'Scissors';
    }
}