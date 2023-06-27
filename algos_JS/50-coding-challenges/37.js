// 🔴Create a function that will convert a string in an array containing the ASCII codes of each character
// Code is => DONE✅

function convertToASCIIString(string) {
    const asciiArray = [];
    for (let i = 0; i < string.length; i++) {
        const asciiCode = string.charCodeAt(i);
        asciiArray.push(asciiCode);
    }
    return asciiArray;
}

console.log(convertToASCIIString("Hello, World!"));