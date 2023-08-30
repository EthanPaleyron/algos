// 🔴Create a function to return the longest word in a string
// Code is => DONE✅

function longestWord(string) {
    let newString = string.split(" ");
    let longest = 0;
    let word = null;
    for (let i = 0; i < newString.length - 1; i++) {
        if (longest < newString[i].length) {
            longest = newString[i].length;
            word = newString[i];
        }
    }
    return word;
}

console.log(longestWord("Create a function to return the longesssssssssssssssssssssssssssst word in a string"));