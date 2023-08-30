// 🔴Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
// Code is => DONE✅

function arraySingleNumber(array1, array2) {
    let newArray = [];
    const array1IsHighest = Math.max(array1.length, array2.length) === array1.length;
    if (array1IsHighest) {
        for (let index = 0; index < array1.length; index++) {
            const element = array1[index];
            if (!array2.includes(element)) {
                newArray.push(element)
            }
        }
    } else {
        for (let index = 0; index < array2.length; index++) {
            const element = array2[index];
            if (!array1.includes(element)) {
                newArray.push(element)
            }
        }
    }
    return newArray;
}

console.log(arraySingleNumber([1, 2, 3], [5, 1, 6, 3, 10]))