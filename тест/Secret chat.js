function secretChat(input) {
    let text = input.shift();
    for (let line of input) {
        let command = line.split(':|:');
        if (command[0] === 'ChangeAll') {
            for (const occurance of text) {
                text = text.replace(command[1], command[2])

            }
            console.log(text);
        } else if (command[0] === 'Reverse') {
            if (!text.includes(command[1])) {
                console.log(`error`);
            } else {
                let reverse = command[1]
                    .split('')
                    .reverse()
                    .join('');
                let first = text.slice(0, -reverse.length)
                text = first.concat(reverse)
                console.log(text);
            } 
            
        } else if (command[0] === 'InsertSpace') {
            let firstHalf = text.slice(0, command[1])
            let secondHalf = text.slice(command[1],)
            text = firstHalf + " " + secondHalf
            console.log(text);
        }
        if (command[0] === 'Reveal') {

            console.log(`You have a new text message: ${text}`);
        }
    }
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])
