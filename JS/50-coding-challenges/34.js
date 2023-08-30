// 🔴Create a function that returns an array with words inside a text
// Code is => DONE✅

function wordTable(txt) {
    // array = array.split(" ");
    const mots = [];
    let mot = "";

    for (let i = 0; i < txt.length; i++) {
        let char = txt[i];
        if (char === " ") {
            if (mot.length > 0) {
                mots.push(mot);
                mot = "";
            }
        } else {
            mot += char;
        }
    }

    if (mot.length > 0) {
        mots.push(mot)
    }

    return mots;
}

console.log(wordTable("Create a function that returns an array with words inside a text"));