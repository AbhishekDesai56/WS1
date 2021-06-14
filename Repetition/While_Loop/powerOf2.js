const requiredReadLine = require("readline");
const readLine = requiredReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
readLine.question("Please enter the number:", function (number) {
    let i = 0;
    let powerOfTwo = 1;

    while (i <= number) {
        if (powerOfTwo <= 256) {
            console.log(i + " " + powerOfTwo);
            powerOfTwo = 2 * powerOfTwo;
        }
        i++;
    }
    readLine.close();
});