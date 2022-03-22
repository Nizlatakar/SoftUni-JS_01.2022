function solve(input) {
    let words = new Map();
    for (let string of input) {

        if (words.has(string)) {
            let currrentCount = words.get(string)
            words.set(string, currrentCount + 1)
        } else {
            words.set(string, 1)
        }
    }
    let sortedWords = Array.from(words.entries())
    sortedWords.sort((a,b)=>b[1]-a[1])
    for (const wordEntry of sortedWords) {
        console.log(`${wordEntry[0]} -> ${wordEntry[1]} times`);
    }
}

solve() 