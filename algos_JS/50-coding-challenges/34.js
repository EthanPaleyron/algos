// 🔴Create a function that returns an array with words inside a text
// Code is => INCOMPLETE❌

function wordTable(txt) {
    // array = array.split(" ");
    let separator = [" ", ".", ";", "?", "!", "(", ")"];
    let array = [];
    for (let i = 0; i < txt.length; i++) {
        if (txt[i] != separator) {
            txt = array.push(txt[i]);
            txt = array;
        }
    }
    return txt;
}

console.log(wordTable("Create a function that returns an array with words inside a text"));