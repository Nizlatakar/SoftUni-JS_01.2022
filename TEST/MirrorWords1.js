function solve(string) {
    let pattern = /(@|#)(?<word>[A-Za-z]{3,})\1\1(?<mirror>[A-Za-z]{3,})\1/gm
    let regex = pattern.exec(string);
    let probe = []

    for (const match of regex) {

        if (regex[2] === regex[3].split('').reverse().join('')) {
            probe.push({ word: regex[2], mirror: regex[3] })
        }
        else if (regex[2] !== regex[3].split('').reverse().join('')) {
console.log(probe);
            console.log("No mirror words!");
        }
        else if (regex === undefined) {

            console.log("No mirror words!");
        }
    }
}
    solve([
        '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    )