function password(input) {
    let text = input.shift();
    let en = []
    let newText = ""
    for (let line of input) {
        let command = line.split(' ');
        if (command[0] === 'TakeOdd') {
            for (let i = 0; i < text.length; i++) {
                if (i % 2 === 1) {
                    en.push(text[i])
                }
            } console.log(en.join(''));
        } if (command[0] === 'Cut') {
            let index = Number(command[1])
            let length = Number(command[2])
            let cutted = en.splice(index, length)
            console.log(en.join(''));

        } if (command[0] === 'Substitute') {
            newText = en.join('').toString()
            if (!newText.includes(command[1])) {
                console.log("Nothing to replace!");
            }
        } else {
            for (const occurance of newText) {
                newText = newText.replace(command[1], command[2])
            }
            console.log(newText);
            en = newText.split('')

        } if (command[0] === 'Done') {

            console.log(`Your password is: ${en.join('')}`);
        }
    }
}

password(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
password(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])