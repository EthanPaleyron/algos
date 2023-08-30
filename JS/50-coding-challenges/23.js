// 🔴Reverse a string
// Code is => DONE✅

function rotateReverseString(username) {
    let splitString = username.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}

console.log(rotateReverseString("Ethan"));