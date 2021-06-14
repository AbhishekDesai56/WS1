const requiredReadLine = require("readline");
const readLine = requiredReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("Enter the number:\n", function (number) {
    switch (Number(number)) {
        case 1:
        case 01:
            console.log("Monday");
            break;
        case 2:
        case 02:
            console.log("Tuesday");
            break;
        case 3:
        case 03:
            console.log("Wednesday");
            break;
        case 4:
        case 04:
            console.log("Thursday");
            break;
        case 5:
        case 05:
            console.log("Friday");
            break;
        case 6:
        case 06:
            console.log("Saturday");
            break;
        case 7:
        case 07:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid Week Day");
    }
    readLine.close();
});