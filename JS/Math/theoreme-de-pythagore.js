function theoremeDePythagore(a, b) {
  const cSquared = a * a + b * b;
  const c = Math.sqrt(cSquared);
  return c;
}

console.log("L'hypoténuse est : " + theoremeDePythagore(3, 4));
