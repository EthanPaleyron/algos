// 🔴Print the first 10 Fibonacci numbers without recursion
// Code is => DONE✅

function fibonacci(number) {
    let n1 = 0;
    let n2 = 1;
    let somme = 0;
    let result = "";

    for (let i = 2; i < number; i++) {
        somme = n1 + n2;

        n1 = n2;
        n2 = somme;
        result += number ? n2 : n1;
    }
    return result;
}

console.log(fibonacci(10));