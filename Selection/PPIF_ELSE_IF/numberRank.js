const requiredReadLine = require('readline');
const readLine = requiredReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("Enter the number:\n", function (number) {
    let numberCount = number.length;

    if (numberCount == 1) {
        console.log("Unit")
    } else if (numberCount == 2) {
        console.log("Ten")
    } else if (numberCount == 3) {
        console.log("Hundred")
    } else if (numberCount == 4) {
        console.log("Thousand")
    } else if (numberCount == 5) {
        console.log("Hundreds of Thousand")
    } else if (numberCount == 6) {
        console.log("Lakhs")
    } else if (numberCount == 7) {
        console.log("Crores")
    } else {
        console.log("Not a Valid Input")
    }
    readLine.close();
});
