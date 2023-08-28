// TAINIX🔲
// Code is => DONE✅
// Dificulty = Débutant🙃

function coursForest(kms, runners, stop) {
    let kmsEveryone = 0;
    let numberRunner = 1;
    let index = 0;
    for (let i = 0; i <= stop; i++) {
        if (i === kms[index]) {
            numberRunner += runners[index];
            index++;
            console.log(`Ils sont maitenant ${numberRunner} coureurs!🏃`);
        }
        kmsEveryone += numberRunner;
        console.log(kmsEveryone);
    }
    return `Forest parcours ${stop}km tout le total de kilometre parcourue par ces camarade et de ${kmsEveryone}km`;
}

console.log(coursForest([13, 84, 135], [6, 4, 4], 153));