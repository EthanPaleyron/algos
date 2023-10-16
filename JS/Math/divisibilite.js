// Code is => DONE✅
function diviseurs(n) {
  let i = 2;
  let divs = "1 ";
  let some = 0;
  while (i <= n) {
    if (n % i == 0) {
      divs = divs + i + " ";
      some += i;
    }
    i++;
  }
  return `Les diviseurs de ${n} sont => ${divs}\nla some de tout les diviseurs est de => ${some}`;
}

console.log(diviseurs(66));
