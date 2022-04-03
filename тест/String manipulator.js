function stingMan(input) {
    let text = input.shift();

    for (let line of input) {
        let command = line.split(' ');
        if (command[0] === 'Translate') {
            for (const occurance of text) {
                text = text.replace(command[1].toString(), command[2].toString());

            } console.log(text);

        } else if (command[0] === 'Includes') {
            let searched = command[1].toString()
            if (text.includes(searched)) {
                console.log('True');
            } else {
                console.log('False');
            }
        }
        else if (command[0] === 'Start') {
            let searched = command[1].toString()
            if (text.startsWith(searched)) {
                console.log('True');
            } else {
                console.log('False');
            }
        }
        else if (command[0] === 'Lowercase') {
            text = text.toLowerCase();
            console.log(text);
        }

        else if (command[0] === 'FindIndex') {
            let searchedIndex = text.lastIndexOf(command[1])


            console.log(searchedIndex);
        }
        else if (command[0] === 'Remove') {
            let firstPart = text.slice(0, command[1])
            let secondPart = text.slice(command[2],)
            text =   firstPart+secondPart
            console.log(text);
        }
        if (command[0] === 'End') {

        }
    }
}
stingMan(["//Thi5 I5 MY 5trING!//",
"Translate 5 s",
"Includes string",
"Start //This",
"Lowercase",
"FindIndex i",
"Remove 0 10",
"End"])
stingMan(["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])