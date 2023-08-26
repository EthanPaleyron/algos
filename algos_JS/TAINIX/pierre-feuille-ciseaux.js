// TAINIX🔲
// Code is => DONE✅
// Dificulty = Débutant🙃

function chifoumi(opponent) {
    let player = "";
    for (let i = 0; i < opponent.length; i++) {
        switch (opponent[i]) {
            case "P":
                player += "F";
                break;
            case "F":
                player += "C";
                break;
            case "C":
                player += "P";
                break;
        }
    }
    return player;
}

console.log(chifoumi("CCCFFC"));