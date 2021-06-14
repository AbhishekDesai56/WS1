const requiredReadLine = require("readline");
const readLine = requiredReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question("Please Enter the Number:\n", function (number) {
    readLine.question("Please select number for below for unit conversion:\n1. Feet to Inch \n2. Feet to Meter \n3. Inch to Feet \n4. Meter to Feet\n", function (selectedUnit) {
        switch (Number(selectedUnit)) {
            case 1:
                console.log(number * 12);
                break;
            case 2:
                console.log(number / 3.281);
                break;
            case 3:
                console.log(number / 12);
                break;
            case 4:
                console.log(number * 3.281);
                break;
            default:
                console.log("Invalid Option");
        }
        readLine.close();
    });
});





