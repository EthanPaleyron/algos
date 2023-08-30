// 🔴Create a function that converts a string to an array of characters
// Code is => DONE✅

function convertirEnTableau(chaine) {
    const tableau = [];
    for (let i = 0; i < chaine.length; i++) {
        tableau.push(chaine[i]);
    }
    return tableau;
}

console.log(convertirEnTableau("Create a function that converts a string to an array of characters"));