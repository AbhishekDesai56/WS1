const requiredReadLine = require("readline");
const readLine = requiredReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
readLine.question("Please Enter the number:", function (number) {
    let factorizationPattern;
    let factorizationAnswer = 1;
    for (let i = 1; i <= number; i++) {
        if (i == 1) {
            factorizationPattern = number + "!= " + i;
        }
        else {
            factorizationPattern += " * " + i;
        }
        factorizationAnswer = factorizationAnswer * i;
    }
    console.log(factorizationPattern + " : " + factorizationAnswer);
    readLine.close();
});
