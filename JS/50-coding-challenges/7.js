// 🔴Calculate the sum of even numbers greater than 10 and less than 30
// Code is => DONE✅
import { space } from "../main.js";

let numberPaire = "";

for (let i = 10; i <= 30; i += 2) {
    numberPaire += i + space;
}

console.log(numberPaire);