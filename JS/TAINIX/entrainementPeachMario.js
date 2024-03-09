// TAINIX🔲
// Code is => DONE✅
// Dificulty = Intermédiaire😐

const parcours = "P_P_____P_____P____P_P__P____P_____P____P__P_____P'";

let vide = 0;
let peach = true;
let sauts = "";
for (let i = 0; i < parcours.length; i++) {
  if (parcours[i] === "P") {
    if (vide === 1 || vide === 2) {
      sauts += "M";
    } else if (vide === 4 || vide === 5) {
      sauts += "P";
    } else if (vide === 3) {
      if (peach) {
        sauts += "PM";
        peach = false;
      } else {
        sauts += "MP";
        peach = true;
      }
    }
    vide = 0;
  } else {
    vide++;
  }
}

console.log(sauts);
