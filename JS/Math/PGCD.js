function PGCD(n1, n2) {
  let reste;
  let result;
  while (reste !== 0) {
    reste = n1 % n2;
    n1 = n1 - reste;
    n2 = reste;
    if (reste !== 0) {
      result = n2;
    }
  }
  return Math.ceil(result);
}

console.log(PGCD(2622, 2530));
