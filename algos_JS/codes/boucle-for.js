// TAINIX🔲
// Code is => DONE✅

function boucleFor(num) {
    if (num < 50 || num > 100) {
        console.log('ca marhce pas');
        return;
    }
    
    let counteur = 0;

    for (let i = 0; i < num; i ++) {
        counteur += i;
    }
    return counteur;
}

console.log(boucleFor(91));