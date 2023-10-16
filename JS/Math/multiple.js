// Code is => DONE✅
function multiple(n, first, last) {
  let result = "";
  for (let i = first; i <= last; i++) {
    if (i % n === 0) {
      result += i + " ";
    }
  }
  return result;
}

console.log(multiple(3, 121, 139));

function multipleVerificateur(n, m) {
  if (n % m === 0) {
    return `${n} est bien divisible par ${m}`;
  } else {
    return `${n} n'est pas divisible par ${m}`;
  }
}

console.log(multipleVerificateur(112, 3));
