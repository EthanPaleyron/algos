const duplicate = ["tatane", "fesse", "moi", "les", "fesse"];
let result = [];

for (let i = 0; i < duplicate.length; i++) {
  let bool = true;
  for (let y = 0; y < result.length; y++) {
    if (duplicate[i] === result[y]) {
      bool = false;
      break;
    }
  }
  bool ? result.push(duplicate[i]) : "";
}

console.log(result);
