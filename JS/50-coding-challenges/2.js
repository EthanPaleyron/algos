// 🔴Print the odd numbers less than 100
// Code is => DONE✅

import { space } from "../main.js";

let printOdd = "";

for (let i = 1; i <= 100; i+=2) {
    printOdd += i + space;
}

console.log(printOdd);