// 🔴Create a function that will convert an array containing ASCII codes in a string
// Code is => DONE✅

function convertFromASCIIArray(asciiArray) {
    let string = "";
    for (let i = 0; i < asciiArray.length; i++) {
        const asciiCode = asciiArray[i];
        const char = String.fromCharCode(asciiCode);
        string += char;
    }
    return string;
}

console.log(convertFromASCIIArray([72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]));