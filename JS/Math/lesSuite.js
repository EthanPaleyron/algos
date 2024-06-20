let un = 1165;
let vn = 0;
let sec = 0;

while (un > vn) {
  un -= 3;
  vn += 2;
  sec++;
}

console.log(
  `Environt vers les n°${un} et n°${vn} marche il se croise au bouts de ${sec} secondes`
);
