function wordsTracker(input) {
    let searchedWords = input.shift().split(' ')
    let myWords = {}
    for (let elements of searchedWords) {
        myWords[elements] = 0;
    }
    for (let word of input) {
        if (myWords.hasOwnProperty(word)) {
            myWords[word] += 1;
        }
    }
    let sortedWords = Object.entries(myWords).sort((a, b) => {
        return b[1] - a[1];
    });
    sortedWords.forEach((el) => {
        console.log(`${el[0]} - ${el[1]}`);
  
    })


}




wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the',
    'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])