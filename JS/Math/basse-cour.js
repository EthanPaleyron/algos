// Code is => DONE✅
function nbrPoules(tetes, pates) {
  let result = "";
  let lapin = tetes;
  let poules = 0;
  for (let i = 0; i <= tetes; i++) {
    result = poules * 2 + lapin * 4;
    if (result === pates) {
      result = `Sur ${tetes} têtes il y a ${poules} poule et ${lapin} lapin.`;
      break;
    } else if (i === tetes) {
      result = "Ce n'est pas possible il maque des pates a tes animaux la.";
    } else {
      poules++;
      lapin--;
    }
  }
  return result;
}

console.log(nbrPoules(36, 118));
