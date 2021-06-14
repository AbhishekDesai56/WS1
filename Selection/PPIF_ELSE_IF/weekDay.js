const requiredReadLine = require("readline")
const readLine = requiredReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("Please Enter a number to see the weekday:\n", function (num) {
    if (num == 1 || num == 01) {
        console.log("Monday")
    } else if (num == 2 || num == 02) {
        console.log("Tuesday")
    } else if (num == 3 || num == 03) {
        console.log("Wednesday")
    } else if (num == 4 || num == 04) {
        console.log("Thurday")
    } else if (num == 5 || num == 05) {
        console.log("Friday")
    } else if (num == 6 || num == 06) {
        console.log("Saturday")
    } else if (num == 7 || num == 07) {
        console.log("Sunday")
    } else {
        console.log("Not a valid Week Day")
    }
    readLine.close();
});

