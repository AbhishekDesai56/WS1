const requiredReadLine = require("readline");
const readLine = requiredReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("Enter the year: \n", function (year) {
    if (year.length > 4) {
        console.log("Please enter valid year")
    } else {
        if (year % 400 == 0) {
            isLeapYear = 1
        } else {
            if (year % 100 == 0) {
                isLeapYear = 0
            } else {
                if (year % 4 == 0) {
                    isLeapYear = 1
                } else {
                    isLeapYear = 0
                }
            }
        }
    }

    if (isLeapYear == 1) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }

    readLine.close();
});




