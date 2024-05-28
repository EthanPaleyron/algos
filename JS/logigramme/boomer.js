// trié de A a Z le tableau si la date est paire et l'inverse si la date est impaire
function trie(tab, date) {
  let bool = true;
  let paire;
  if (date % 2 === 0) {
    paire = true;
  } else {
    paire = false;
  }
  while (bool) {
    bool = false;
    for (let i = 0; i < tab.length; i++) {
      if (
        (tab[i] > tab[i + 1] && paire == true) ||
        (tab[i] < tab[i + 1] && paire == false)
      ) {
        let tmp = tab[i];
        tab[i] = tab[i + 1];
        tab[i + 1] = tmp;
        bool = true;
        break;
      }
    }
  }
  return tab;
}
console.log(
  trie(
    ["afdfdsa", "fdfshgfdq", "hehehah", "uahjehk", "bdqsfhjlifkh", "dahhejfez"],
    32
  )
);
