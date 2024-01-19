const mots = "bénjeur";
const voyelles = [
  ["à", "â"],
  ["é", "è"],
];
let nouveauMots = "";
let lettresEnregistrer = "";
let result = "oui";

for (let i = 0; i < mots.length; i++) {
  if (mots[i] === "é") {
    nouveauMots += "e";
  } else {
    nouveauMots += mots[i];
  }
}

for (let i = 0; i < nouveauMots.length; i++) {
  if (lettresEnregistrer.indexOf(nouveauMots[i]) != -1) {
    result = "non";
    break;
  }
  lettresEnregistrer += nouveauMots[i];
}

console.log(nouveauMots);
console.log(result);
