const requiredReadLine = require("readline");
const readLine = requiredReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("Please Enter the number:", function(number) {
    let flag = 0;
    let divideNumByTwo = number / 2;
    console.log(divideNumByTwo);
    if (number == 0 || number == 1) {
        flag = 1
    } else {
        for (let count = 2; Math.sqrt(count) <= number; count++) {
            if (number % count == 0) {
                flag = 1;
                break;
            }
        }
    }

    if (flag == 0) {
        console.log(number + " is a prime number");
    } else {
        console.log(number + " is not a prime number");
    }
    readLine.close();
});