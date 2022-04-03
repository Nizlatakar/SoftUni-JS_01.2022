function activationKey(input) {
    let rawKey = input.shift();
    for (let line of input) {
        let command = line.split('>>>');

        if (command[0] === 'Slice') {
            let firstPart = rawKey.slice(0, command[1]);
            let secondPart = rawKey.slice(command[2],);
            rawKey = firstPart + secondPart
            console.log(rawKey);
        }
        if (command[0] === 'Flip') {
            if (command[1] === 'Upper') {
                let firstPart = rawKey.slice(0, command[2]);
                let toUpperCase = rawKey.slice(command[2], command[3]);
                toUpperCase = toUpperCase.toUpperCase();
                let secondPart = rawKey.slice(command[3],);
                rawKey = firstPart + toUpperCase + secondPart
                console.log(rawKey);

            } else if (command[1] === 'Lower') {
                let firstPart = rawKey.slice(0, command[2]);
                let toLowerCase = rawKey.slice(command[2], command[3]);
                toLowerCase = toLowerCase.toLowerCase();
                let secondPart = rawKey.slice(command[3],);
                rawKey = firstPart + toLowerCase + secondPart
                console.log(rawKey);
            }
        }
        if (command[0] === 'Contains') {
            if (rawKey.includes(command[1])) {
                console.log(`${rawKey} contains ${command[1]}`);
            } else {
                console.log("Substring not found!");
            }

        }
        if (command[0] === 'Generate') {

            console.log(`Your activation key is: ${rawKey}`);
        }
    }
}
activationKey(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])