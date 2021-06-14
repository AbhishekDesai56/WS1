const requiredReadLine = require("readline");
const readLine = requiredReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
readLine.question("Enter the number between 1 to 100:\n", function(number) {

    readLine.close();
});