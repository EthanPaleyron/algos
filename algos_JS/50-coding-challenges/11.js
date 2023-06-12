// 🔴Calculate the average of the numbers in an array of numbers
// Code is => DONE✅

let mediumArray = [15, 133, 10, 2, 40];
let resultArray = 0;

for (let i = 0; i < mediumArray.length; i++) {
    resultArray += mediumArray[i] / 2;
}

console.log(resultArray);