// 🔴Create a function that will return in an array the first “p” prime numbers greater than “n”
// Code is => DONE✅

let tab = 0;
let listOfNaturalNumber = [];

function verifNmbPremier(tab) {
    for (let i = 2; i < tab; i++) {
        if (tab % i === 0) {
            return true;
        };
    }
    return false;
}

console.log(verifNmbPremier(6));

while (listOfNaturalNumber.length < 100) {
    tab++
    if (verifNmbPremier(tab)) {
        listOfNaturalNumber.push(tab)
    }
}

console.log(listOfNaturalNumber);