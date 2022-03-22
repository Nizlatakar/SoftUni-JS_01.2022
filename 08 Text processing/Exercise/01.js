function replaceWith(word,text) {
let prowords = word.split(', ');
for (const iterator of prowords) {
    let ready= '*'.repeat(iterator.length)
    text =text.replace(ready,iterator)
}
console.log(text);
}

replaceWith('great',
'softuni is ***** place for learning new programming languages')