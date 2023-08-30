// Code is => DONE✅

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
  
  // 🔴Dans plusieurs tableaux
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
