// TAINIX🔲
// Code is => DONE✅
// Dificulty = Starter😊

function multiplyableOfThree(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
            if (result !== "") {
                result += "-";
            }
            result += array[i];
        }
    }
    return result;
}

console.log(multiplyableOfThree([49, 27, 10, 88, 85, 83, 45, 79, 63, 46, 27, 38, 51, 40, 25, 50, 73, 71, 85, 14, 91, 21, 90, 69, 68, 27, 71, 42]));