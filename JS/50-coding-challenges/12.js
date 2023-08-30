// 🔴Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
// Code is => DONE✅

function positiveNumbersme(array) {
    let resultNumbersPositive = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 1) {
            resultNumbersPositive.push(array[i]);
        }
    }
    return resultNumbersPositive;
}

console.log(positiveNumbersme([10, -5, 50, 0, 24, -34, -2]));