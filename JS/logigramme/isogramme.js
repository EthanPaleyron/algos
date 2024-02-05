const mots = "bonjôur";
const lettersA = ["à", "â"];
const lettersE = ["é", "è", "ê", "ë"];
const lettersI = ["î", "ï"];
const lettersO = ["ô", "ö"];
const lettersU = ["û", "ü"];
let lettresEnregistrer = "";
let result = "oui";

for (let i = 0; i < mots.length; i++) {
  let letter = mots[i];
  console.log(letter);
  if (lettersA.indexOf(letter) != -1) {
    letter = "a";
  } else if (lettersE.indexOf(letter) != -1) {
    letter = "e";
  } else if (lettersI.indexOf(letter) != -1) {
    letter = "i";
  } else if (lettersO.indexOf(letter) != -1) {
    letter = "o";
  } else if (lettersU.indexOf(letter) != -1) {
    letter = "u";
  }
  if (lettresEnregistrer.indexOf(letter) == -1) {
    lettresEnregistrer += letter;
  } else {
    result = "non";
    break;
  }
}

console.log(lettresEnregistrer);
console.log(result);
