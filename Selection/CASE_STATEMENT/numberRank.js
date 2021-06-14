const requiredReadLine = require("readline");
const readLine = requiredReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("Enter the number:", function (number) {
    let numberLengthToGetRange = number.length;
    switch (numberLengthToGetRange) {
        case 1:
            console.log("Unit");
            break;
        case 2:
            console.log("Ten");
            break;
        case 3:
            console.log("Hundred");
            break;
        case 4:
            console.log("Thousand");
            break;
        case 5:
            console.log("Hundreds of Thousand");
            break;
        case 6:
            console.log("Lakhs");
            break;
        case 7:
            console.log("Crores");
            break;
        default:
            console.log("Invalid Number");
    }
    readLine.close();
});