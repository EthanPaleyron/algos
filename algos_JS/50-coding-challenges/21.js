// 🔴Rotate an array to the right 1 position

let array = [1, 2, 5, 10, 15];

array.push(array[0]);
array.unshift(array[1]);

console.log(array);