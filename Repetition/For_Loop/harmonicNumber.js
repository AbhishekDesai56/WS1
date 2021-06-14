const requiredReadLine = require("readline");
const readLine = requiredReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("Please enter the number: \n", function (n) {
    let harmonicPattern = 1;
    let harmonicAnswer = 1;
    for (let i = 2; i < n; i++) {
        harmonicPattern += ' + ' + 1 + '/' + i;
        harmonicAnswer += 1 / i;
    }
    console.log(harmonicPattern + " = " + harmonicAnswer);
    readLine.close();
});