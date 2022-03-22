function solve(text) {
    let result = '';
    for (let char of text) {
        if (char !== result[result.length - 1]) {
            result += char;
        }
        
    }
    console.log(result);
}

solve('aaaaabbbbbccccddd')
