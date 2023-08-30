// 🔴Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
// Code is => DONE✅

function arrayOneSingleNumber(array) {
    let newArray = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (!newArray.includes(element)) {
                newArray.push(element);
            }
        }
    return newArray;
}

console.log(arrayOneSingleNumber([1, 2, 3, 2, 5, 22, 35, 45, 22]));