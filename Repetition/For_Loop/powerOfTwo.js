const { read } = require("fs");
const requiredReadLine = require("readline");
const readLine = requiredReadLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

readLine.question("Please enter power of nth value: \n", function (number) {
  let powerOfTwo = 1;

  for (var intialValue = 0; intialValue < number; intialValue++) {
    console.log(intialValue + " " + powerOfTwo);
    powerOfTwo = 2 * powerOfTwo;
  }
  readLine.close();
});

