// 🔴Calculate the sum of numbers received in a comma delimited string
// Code is => DONE✅

function sumAfterComma(string) {
    let somme = 0;
    let num = ""
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ",") {
            somme += parseInt(num);
            num = "";
        } else {
            num += string[i];
        }
    }
    return somme += parseInt(num);
}

console.log(sumAfterComma("15,50,10,30,20"));