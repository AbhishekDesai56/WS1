win = 1;
lose = 0;

let numberWins = 0;
let numberLoses = 0;
let gambleAmount = 100;

while (gambleAmount < 200 && gambleAmount > 0) {
    let bet = Math.floor(Math.random() * 10);
    if (bet == win) {
        gambleAmount++;
        numberWins++;
        console.log("Bet Wins");
    } else if (bet == lose) {
        gambleAmount--;
        numberLoses++;
        console.log("Bet Loss");
    } else {
        console.log("No bet has been made");
    }
}


console.log("How much it wins?" + numberWins);
console.log("How much it loss?" + numberLoses);