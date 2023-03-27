function CoinFlip() {
    const HEAD = 1;
    let coin = Math.floor(Math.random() * 2)
    if (coin == HEAD)
        console.log("HEAD");
    else
        console.log("TAILS");
}

//CoinFlip();

// --------------------------------------------------//

function CheckAge(){
    let age = prompt("Enter age");
    if(age > 18)
    {
        console.log("You are Adult");
    }
    else
    {
        console.log("Under age");   
    }
}

CheckAge();

console.log("first");




