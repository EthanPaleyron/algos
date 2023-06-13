// 🔴Create a function that will find the nth Fibonacci number using recursion
// Code is => DONE✅

const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(10));

// 📜(Les récursion servent jamais et a pas vraiment d'utilité)