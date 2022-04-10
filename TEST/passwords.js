function solve(input) {
    let text = input.shift();
    let workedText = [];
    for (let command of input) {
        command = command.split(" ");
        if (command[0] === "TakeOdd") {
            for (let index = 0; index < text.length; index++) {
                if (index % 2 !== 0) {
                    workedText.push(text[index]);
                }
            }
            console.log(workedText.join(""));
        } else if (command[0] === "Cut") {
         let first=   workedText.slice(0,command[1]);
         let second=   workedText.slice(command[1], command[2]+command[1]);
         workedText=first+second
            console.log(workedText);
        } else if (command[0] === "Substitute") {
            let proText = workedText;
            if (!proText.includes(command[1])) {
                console.log("Nothing to replace!");
            } else {
                for (const occur of proText) {
                    proText = proText.replace(command[1], command[2]);
                    workedText = proText.split("");;
                } console.log(workedText.join(""));
                workedText = proText.split("");
            }
        }
    }
    console.log(`Your password is: ${workedText.join("")}`);
}
solve([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done",
]);
