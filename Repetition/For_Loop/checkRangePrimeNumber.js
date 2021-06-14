const requiredReadLine = require("readline");
const readLine = requiredReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
readLine.question("Please Enter the range 1:", function (range1) {
    readLine.question("Please Enter the range 2:", function (range2) {
        if (range1 > range2) {
            console.log("Range 2 is greater than Range 1");
        } else {
            console.log("Prime Number between the range of " + range1 + " to " + range2 + ":");
            let flag = 0;
            for (let i = range1; i <= range2; i++) {
                let divideNumByTwo = i / 2;
                if (i == 0 || i == 1) {
                    flag = 1;
                } else {
                    for (let j = 2; j < divideNumByTwo; j++) {
                        if (i % j == 0) {
                            flag = 1;
                            break;
                        }
                    }
                }

                if (flag == 0) {
                    console.log(i);
                }
                flag = 0;
            }
        }
        readLine.close();
    });
});