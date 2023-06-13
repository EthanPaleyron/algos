// 🔴Reverse an array
// Code is => DONE✅

function rotateReverse(array) {
    // array.reverse();
    let rev = new Array;
    for (let i = array.length - 1; i >= 0; i--) {
        rev.push(array[i]);
    }
    return rev;
}

console.log(rotateReverse([1, 2, 5, 10]));