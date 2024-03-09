// TAINIX🔲
// Code is => DONE✅
// Dificulty = Intermédiaire😐

const john = 50;
const ennemis = [87, 57, 56, 60, 69, 98, 80, 91, 61, 40, 46];
const etageMax = 100;
let ennemisViser = [];
let ennemisLister = [];

// Recupere tous ce qui sont a l'etage supperieur de john
for (let i = 0; i < ennemis.length; i++) {
  if (ennemis[i] > john) {
    ennemisViser.push(ennemis[i]);
  }
}

// Les trie du plus petit au plus grand
let plusGrand = 0;
let indexEnnemis;
const NombresEnnemisViser = ennemisViser.length;
for (let i = 0; i < NombresEnnemisViser; i++) {
  for (let y = 0; y < ennemisViser.length; y++) {
    if (ennemisViser[y] > plusGrand) {
      plusGrand = ennemisViser[y];
      indexEnnemis = y;
    }
  }
  ennemisLister.unshift(plusGrand);
  ennemisViser.splice(indexEnnemis, 1);
  plusGrand = 0;
}

// john qui monte et enregistre ce qui tue au cours de sa route
let seq = [];
for (let i = 0; i < ennemisLister.length; i++) {
  seq.push(ennemisLister[i]);
  for (let y = i + 1; y < ennemisLister.length; y++) {
    if (ennemisLister[y] <= ennemisLister[i] + 3) {
      // Si l'ennemis est dans l'un des 3 etage au dessus de john, il dessende d'un etage
      ennemisLister[y] = ennemisLister[y] - 1;
    } else {
      // Sinon on coupe la boucle de touts les etage suivant, et john continue de monter l'immeuble
      break;
    }
  }
}
seq.unshift(john);
seq.push(etageMax);

console.log(seq);
