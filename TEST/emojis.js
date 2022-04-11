function solve(input) {
    let text = input[0]
    let namePattern = /(::|\*\*)([A-Z][a-z]{2,})\1/gm;
    let digitPattern = /\d/g;
    let emojiLength = []
    let proEmo = []
    let match = text.match(namePattern);
    let numbers = text.match(digitPattern);
    let treshold = 1;
    for (let index = 0; index < numbers.length; index++) {
        treshold *= numbers[index]
    }
    if (match != null) {
        for (const emoji of match) {
            let coolness = 0;
            emojiLength.push(emoji)
            let chars = emoji.slice(2, -2)
            for (const char of chars) {
                coolness += char.charCodeAt()

            }
            if (coolness > treshold) {
                proEmo.push(emoji);
            }
        }

    }
    console.log(`Cool threshold: ${treshold}`);
    console.log(`${emojiLength.length} emojis found in the text. The cool ones are:`);
    for (const iterator of proEmo) {
        console.log(` ${iterator}`);
    }
}

solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])