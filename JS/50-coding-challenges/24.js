// 🔴Create a function that will merge two arrays and return the result as a new array
// Code is => DONE✅

function arrayGrouping(array1, array2) {
    let newArray = array1.concat(array2);
    return newArray;
}

console.log(arrayGrouping([1, 2, 3, "soleil"], [-1, -2, -3]));