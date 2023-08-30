// 🔴Find the maximum number in an array of numbers
// Code is => DONE✅

let array = [-1, -10, -100];
let resultMaxArray = array[0];

for (let i = 0; i < array.length; i++) {
    if (array[i] > resultMaxArray) {
        resultMaxArray = array[i];
    }
}

console.log(resultMaxArray);