function mirrorWords(input) {
    let text = input[0]
    let pattern = /(@|#)[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/gm
    let counter = 0;
    let masiv = []
    let matches = [...text.matchAll(pattern)]
    let search = pattern.exec(text)
    for (let line of matches) {
        //  masiv+=line.shift();
        masiv.push(line.shift())

        for (const word of masiv) {
            let firstPart = word.slice(0, word.length / 2)
            let secondPart = word.slice(length / 2)
            console.log(firstPart);
            console.log(secondPart);
        }

    }
    console.log();
    console.log();
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])