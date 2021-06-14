const requiredReadLine = require("readline");
const readLine = requiredReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("Enter first number:", function (firstNumber) {
    readLine.question("Enter second number:", function (secondNumber) {
        readLine.question("Enter third number:", function (thirdNumber) {
            num1 = firstNumber + secondNumber * thirdNumber
            num2 = firstNumber % secondNumber + thirdNumber
            num3 = thirdNumber + firstNumber / secondNumber
            num4 = firstNumber * secondNumber + thirdNumber

            maxMessage = "Maximum Number: "
            minMessage = "Minimum Message: "
            if (num1 > num2 && num1 > num3 && num1 > num4) {
                console.log(maxMessage + num1);
            }
            else if (num2 > num1 && num2 > num3 && num2 > num4) {
                console.log(maxMessage + num2);
            }
            else if (num3 > num1 && num3 > num2 && num3 > num4) {
                console.log(maxMessage + num3);
            }
            else {
                console.log(maxMessage + num4);
            }

            if (num1 < num2 && num1 < num3 && num1 < num4) {
                console.log(minMessage + num1);
            }
            else if (num2 < num1 && num2 < num3 && num2 < num4) {
                console.log(minMessage + num2);
            }
            else if (num3 < num1 && num3 < num2 && num3 < num4) {
                console.log(minMessage + num3)
            }
            else {
                console.log(minMessage + num4);
            }

            readLine.close();
        });
    });
});
