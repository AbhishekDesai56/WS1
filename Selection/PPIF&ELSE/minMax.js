let num1 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
let num2 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
let num3 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
let num4 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
let num5 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
let max = 0, min = 0;

if (num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5)
    max = num1;
else
    min = num1;

if (num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5)
    max = num2;
else {
    if (min == 0)
        min = num2;
    else {
        if (min >= num2)
            min = num2;
    }
}

if (num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5)
    max = num3;
else {
    if (min >= num3 && min != 0)
        min = num3;
}

if (num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5)
    max = num4;
else {
    if (min >= num4 && min != 0)
        min = num4;
}

if (num5 >= num1 && num5 >= num2 && num5 >= num3 && num5 >= num4)
    max = num5;
else {
    if (min >= num5 && min != 0)
        min = num5;
}
console.log('Minimum and Maximum Value between num1: ' + num1 + ' num2: ' + num2 + ' num3: ' + num3 + ' num4: ' + num4 + ' num5: ' + num5 + ' is ');
console.log('Minimum Value: ' + min);
console.log('Maximum Value: ' + max);
