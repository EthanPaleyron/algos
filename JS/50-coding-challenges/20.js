// 🔴Rotate an array to the left 1 position
// Code is => DONE✅

function rotateLeft(array) {
    array.unshift(array[4]);
    array.pop();
    return array;
}

console.log(rotateLeft([1, 2, 5, 10, "left"]));