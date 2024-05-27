let tab = [
  [1, 4, 5],
  [1, 1, 1],
  [11, 1, 3],
  [5, 9, 1],
  [11, 3, 7],
  [15, 4, 2],
];
let go = true;
let compte = -1;
while (go) {
  go = false;
  compte++;
  console.log(compte);
  for (let i = compte; i < tab.length - 1; i++) {
    if (
      tab[i][0] > tab[i + 1][0] ||
      (tab[i][0] == tab[i + 1][0] && tab[i][1] > tab[i + 1][1])
    ) {
      //echange de tout le sous-tab
      let echange = tab[i];
      tab[i] = tab[i + 1];
      tab[i + 1] = echange;
      go = true;
    }
  }
}
console.log(tab);
