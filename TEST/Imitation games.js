function imitation(input) {
    let text = input.shift();
    for (let line of input) {
        let command = line.split('|');
        if (command[0] === 'ChangeAll') {
            for (const occurance of text) {
                text = text.replace(command[1], command[2]);
            }

        } else if (command[0] === 'Insert') {
            let firstPart = text.slice(0, command[1])
            let secondPart = text.slice(command[1],)
            text = firstPart + command[2] + secondPart

        } else if (command[0] === 'Move') {
            let firstPart = text.slice(0, command[1])
            let secondPart = text.slice(command[1],)
            text = secondPart + firstPart

        } if (command[0] === 'Decode') {
            console.log(`The decrypted message is: ${text}`);
        }
    }
}
imitation([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])
imitation([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
])
