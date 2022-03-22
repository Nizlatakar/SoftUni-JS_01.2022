function solve(string) {
    let array = string.split(' ');
    for (let word of array) {
        if (word.startsWith('#') && word.length > 1 && checkForDigit(word)) {
            console.log(word.substr(1));
        }
    }
    function checkForDigit(word) {
        let isWord = true;
        for (let ch of word) {
            if (!isNaN(ch)) {
                return false;
            }
        }
        if (isWord) {
            return true;
        }
    }
}



solve('Nowadays everyone uses # to tag a #special word in #socialMedia')