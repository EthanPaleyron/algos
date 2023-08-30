// 🔴Print all the multiplication tables with numbers from 1 to 10
// Code is => DONE✅

import { space, lineJump } from "../main.js";

let printAllMultiplication = "";

for (let i = 1; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        printAllMultiplication += j * i + space;
    }
    printAllMultiplication += lineJump;
}

console.log(printAllMultiplication);