// 🔴Create a function that will return a Boolean specifying if a number is prime
// Code is => DONE✅

function primeNumber(nbr) {
    for (let i = 2; i < nbr; i++) {
        if (nbr % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(primeNumber(22091));