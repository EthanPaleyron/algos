// 🔴Create a function that will capitalize the first letter of each word in a text
// Code is => DONE✅

function primeLetterUpperCase(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i - 1] === undefined  || string[i - 1] ===  " ") {
            newString += string[i].toUpperCase();
        } else {
            newString += string[i];
        }
    }
    return newString;
}

console.log(primeLetterUpperCase("ethan, 17, homme je sais pas 🤔"));