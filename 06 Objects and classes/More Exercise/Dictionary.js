function makeDictionary (input) {

    let dictionary = {};

    for (let element of input) {
        let obj = JSON.parse(element);
        dictionary = Object.assign(dictionary, obj);
    }

    let sortedKeys = Object.keys(dictionary);
    sortedKeys.sort((a,b) => a.localeCompare(b));

    for (let term of sortedKeys) {
        let definition = dictionary[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}