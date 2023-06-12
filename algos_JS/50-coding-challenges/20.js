// 🔴Rotate an array to the left 1 position


function rotateLeft(array) {
    array.shift();
    array.push();
    return array;
}

console.log(rotateLeft([1, 2, 5, 10, "left"]));