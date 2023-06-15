// 🔴Create a function that will return the number of words in a text
// Code is => DONE✅

function numberFoWorld(p) {
    let tab = [];
    p = p.toLowerCase().replace(/[^a-z]/gi, "");
    let obj = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0,
    }
    for (let i = 0; i < p.length; i++) {
        obj[p[i]] = obj[p[i]] + 1;
    }
    for (const key in obj) {
        if (obj[key] > 0) {
            tab.push(`il y a ${obj[key]} ${key}`);
        }
    }
    return tab;
}

console.log(numberFoWorld("Bonjour je m'appel Toto 123"));