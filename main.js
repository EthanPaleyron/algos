// function breakTheCode(letters) {
//   for (let i = 0; i < letters.length; i++) {
//     if (letters[i] >= 1) {
//       letters = letters[i];
//     }
//   }
//   return letters;
// }

// console.log(breakTheCode('ehf2abna6449mnssuhi9d0h1d9svuo1lx1g3rg1dycrxolk65s3m94k8y7jgs01dycrxolkxj5fql059rdldqal03ed7h3fu154duumzymez54f21dycrxolk822n95bk25zb66i5bqe1dycrxolk2ic9t58vzityuuf88y858'));

// 🔴PLUS PETIT AU PLUS GRAND
function tab(array) {
  let result = array;
  
  for (let i = 0; i < array.length; i++) {
    let x = result[i];
    let j = i;

    while (j > 0 && result[j - 1] > x) {
      array[j] = array[j - 1];
      j = j - 1;
      array[j] = x;
    }
  }
  return result;
}

let arr = [
  [1, 2, 3],
  [12, 15, 40],
  [12, 16, 50],
  [12, 13, 20],
  [50, 42, 21],
];
console.log(tab(arr));

// 🔴ALGO OLIVIER 

// function algoOlivie() {
  
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[0] >= arr) {
//       result += arr[i][0];
//     } else {
//       arr = arr[i][1];
//     }
//   }
//   return result;
// }
