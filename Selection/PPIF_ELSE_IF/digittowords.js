const requiredReadLine = require("readline");
const readLine = requiredReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("Please Enter Single Digit Number:\n", function (digit) {
    if (digit.length > 1) {
        console.log("Please enter the single digit");
    } else if (digit == 0) {
        console.log("Zero")
    } else if (digit == 1) {
        console.log("One")
    } else if (digit == 2) {
        console.log("Two")
    } else if (digit == 3) {
        console.log("Three")
    } else if (digit == 4) {
        console.log("Four")
    } else if (digit == 5) {
        console.log("Five")
    } else if (digit == 6) {
        console.log("Six")
    } else if (digit == 7) {
        console.log("Seven")
    } else if (digit == 8) {
        console.log("Eight")
    } else if (digit == 9) {
        console.log("Nine");
    } else {
        console.log("No a valid digit");
    }
    readLine.close();
});


