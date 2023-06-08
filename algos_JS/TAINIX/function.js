// TAINIX🔲
// Code is => INCOMPLETE❌

function result(tableau) {
    const values = [97, 94, 85, 69, 24, 81, 90, 10, 12, 26, 12, 36, 57, 62, 80, 41, 24, 98, 59, 74, 85, 92, 99, 43, 12, 34, 51];

    if (tableau < 10 || tableau < 100) {
        console.log('ca marhce pas');
        return;
    }

    for (let i = 0; i < tableau.length; i++) {
        values[i] *= 3;
    }
    return values;
}

console.log(result(tableau));