// Code is => DONE✅

let tab = 0;
let listOfPrimeNumber = [];

function verifNmbPremier(tab) {
    for (let i = 2; i < tab; i++) {
            if (tab%i === 0) {
                return false;
            };
    };
    return true;
};

while (listOfPrimeNumber.length < 100) {
    tab++
    if (verifNmbPremier(tab)) {
        listOfPrimeNumber.push(tab)
    };
};

console.log(listOfPrimeNumber);