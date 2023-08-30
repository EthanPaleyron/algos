// TAINIX🔲
// Code is => DONE✅
// Dificulty = Débutant🙃

function soccerTeam(players) {
    let bestPlayers = "";
    const byValue = (a, b) => b - a;
    const smallestToLargest = [...players].sort(byValue);
    console.log("Joueurs triér du plus grand au plus petit => " + smallestToLargest);

    for (let i = 0; i < smallestToLargest.length / 1.5; i++) {
        for (let y = 0; y < players.length; y++) {
            if (players[y] === smallestToLargest[i]) {
                if (bestPlayers !== "") {
                    bestPlayers += "-";
                }
                bestPlayers += y;
            }
        }
    }
    return bestPlayers;
}

console.log(soccerTeam([19, 14, 23, 10, 3, 29, 20, 12, 28, 5, 1, 26, 4, 17, 22, 6]));