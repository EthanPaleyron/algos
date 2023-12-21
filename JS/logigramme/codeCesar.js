function cesar(str, amount) {
  if (amount < 0) {
    return cesar(str, amount + 26);
  }

  let result = "";
  for (let i = 0; i < str.length; i++) {
    let tmp = str[i];
    if (tmp.match(/[a-z]/i)) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90)
        tmp = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      else if (code >= 97 && code <= 122)
        tmp = String.fromCharCode(((code - 97 + amount) % 26) + 97);
    }
    result += tmp;
  }
  return result;
}
console.log(cesar("ABCDGH", 10));
