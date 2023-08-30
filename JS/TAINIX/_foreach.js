// TAINIX🔲
// Code is => DONE✅
// Dificulty = Starter😊

function forEach(array) {
    let newArray = [];
    array.forEach(element => {
        if (element >= 5) {
            newArray.push(element)
        }
    });
    return newArray;
}

console.log(forEach([6, 1, 1, 7, 7, 9, 2, 6, 2, 4, 3, 8, 1, 6, 6, 7, 1, 9, 6, 5, 8]));