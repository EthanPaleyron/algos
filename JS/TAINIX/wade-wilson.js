// TAINIX🔲
// Code is => DONE✅
// Dificulty = Intermédiaire😐

function conductOfTheMission(steps) {
    let min = 0;
    let sec = 0;
    let hp = 100;

    for (let i = 0; i < steps.length; i++) {
        switch (steps[i]) {
            case "_":
                sec += 10;
                hp += 5;
                break;
            case "S":
                sec += 10;
                hp -= 10;
                break;
            case "H":
                sec += 30;
                hp -= 25;
                break;
            case "T":
                min += 2;
                hp -= 50;
                break;
            case "E":
                hp -= 100;
                break;
        }
        if (hp < 0) {
            min += 5;
            hp = 100;
        }
        if (sec >= 60) {
            min++;
            sec = 0;
        }
        console.log(`${steps[i]} => ${min} : ${sec} et ${hp}hp`);
    }

    return `${min}min_${sec}sec_${hp}hp`;
}

console.log(conductOfTheMission("_ES_EHS_ETE_H___H__T_TEHST_"));