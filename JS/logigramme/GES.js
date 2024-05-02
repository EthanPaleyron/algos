let GP = 760;
let N2O = 3040;
let CO2 = 28880;
let n_annee = 0;
while (GP <= CO2 && N2O <= CO2) {
  GP *= 1.01;
  N2O *= 1.003;
  CO2 *= 0.99;
  n_annee++;
}
if (GP >= CO2) {
  console.log("GP");
} else {
  console.log("N2O");
}
console.log(n_annee);
