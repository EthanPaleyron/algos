let fibonacci = 0;
let f1 = 0;
let f2 = 1;
let min = 0;
let distanceVaiseauA = 1;
let distanceVaiseauB = 1.6;

while (distanceVaiseauA + distanceVaiseauB <= 225000000) {
  fibonacci = f1 + f2;
  f1 = f2;
  f2 = fibonacci;
  distanceVaiseauA += fibonacci;
  distanceVaiseauB *= 1.6;
  min++;
}

console.log(min);
