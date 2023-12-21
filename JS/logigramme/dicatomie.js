function dicatomie(array, n) {
  let result = "";
  let min = 0;
  let max = array.length - 1;
  let bettwen = Math.ceil((min + max) / 2);
  while (min < max) {
    if (array[bettwen] == n) {
      min = bettwen;
      break;
    } else if (array[bettwen] > n) {
      max = bettwen - 1;
    } else {
      min = bettwen + 1;
    }
    bettwen = Math.ceil((min + max) / 2);
  }
  if (array[min] == n) {
    result = "trouvé à la position: " + (min + 1);
  } else {
    result = "non trouvé";
  }
  return result;
}
console.log(dicatomie([1, 5, 8, 11, 16, 23, 30], 16));
