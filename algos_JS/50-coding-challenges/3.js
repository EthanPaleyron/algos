// 🔴Print the multiplication table with 7
// Code is => DONE✅

import { space } from "../main.js";

let printMultiplication = "";

for (let i = 0; i <= 10; i++) {
    printMultiplication += i*7 + space;
}

console.log(printMultiplication);