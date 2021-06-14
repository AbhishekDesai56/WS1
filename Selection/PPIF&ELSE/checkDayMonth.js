const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the month:\n ", function (month) {
    rl.question("Enter the day:\n ", function (day) {

        if (month == 3 && day >= 20 && day <= 31 ||
            month == 4 && day >= 1 && day <= 30 ||
            month == 5 && day >= 1 && day <= 31 ||
            month == 6 && day >= 1 && day <= 20) {
            console.log(true);
        } else {
            console.log(false);
        }
        rl.close();
    });
});

