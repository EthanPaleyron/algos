// 🔴Rotate an array to the right 1 position
// Code is => DONE✅

function rotateRight(array) {
    array.push(array[0]);
    array.shift();
    return array;
}

console.log(rotateRight(["right", 1, 2, 5, 10]));