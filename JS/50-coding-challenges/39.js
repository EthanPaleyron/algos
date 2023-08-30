// 🔴Implement the Caesar cypher
// Code is => DONE✅

function caesarShift (str, amount) {
    if (amount < 0) {
        return caesarShift(str, amount + 26);
    }
    
    let ouput = "";
    
    for (let i = 0; i < str.length; i++) {
        let c = str[i];

        if (c.match(/[a-z]/i)) {
            let code = str.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
        
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            }
        }
        ouput += c;
    }
    return ouput;
}

console.log(caesarShift("HELLO WORLD", 1));