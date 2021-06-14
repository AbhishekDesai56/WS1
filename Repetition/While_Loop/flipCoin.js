let coinFlip = Math.floor(Math.random() * 10);
let isTrue = true;
let countHeads = 0;
let countTails = 0;

while (isTrue) {
    if (coinFlip == 1) {
        countTails++;
    } else {
        countHeads++;
    }

    if (countHeads == 11) {
        console.log("Heads is a winner");
        isTrue = false;
    } else if (countTails == 11) {
        console.log("Tails is a winner");
        isTrue = false;
    }
}

