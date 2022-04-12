function solve(input) {
    let message = input.shift();

    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(" ");
        if (line[0] === "GladiatorStance") {
            message = message.toUpperCase();
            console.log(message);
        } else if (line[0] === "DefensiveStance") {
            message = message.toLowerCase();
            console.log(message);
        } else if (line[0] === "Dispel") {
            let sub = Number(line[1]);
            let str = line[2];
            if (sub >= 0 && sub <= message.length-1) {
                let index = message.charAt(sub);
                message = message.replace(index, str);

                console.log("Success!");
            } else {
                console.log("Dispel too weak.");
            }
        } else if (line[0] === "ChangeAll") {
            let sub = line[1];
            let str = line[2];
         
            while (message.includes(sub)) {
                let index = message.indexOf(sub);
                let part = message.substring(index, index + sub.length);
                message = message.replace(part, str);
            }
            console.log(message);
        } else if (line[0] === "Target" && line[1] === "Change") {
            let forChange = line[2];
            let change = line[3];


            while (message.includes(forChange)) {

                message = message.replace(forChange, change);
            }

            console.log(message);

        } else if (line[0] === "Target" && line[1] === "Remove") {
            let sub = line[2];

            while (message.includes(sub)) {
                let index = message.indexOf(sub);

                message = message.substring(0, index);
            }
            console.log(message);
        }
         else if (line[0] === "For" &&line[1] === "Azeroth") {
            break;
        }else if (
            line[0] !== "For" ||
            line[1] !== "Azeroth" &&
            line[0] !== "GladiatorStance" &&
            line[0] !== "DefensiveStance" &&
            line[0] !== "Dispel" &&
            line[0] !== "Target" ||
            line[1] !== "Change" &&
            line[0] !== "Target" ||
            line[1] !== "Remove"
          ) {
            console.log("Command doesn't exist!");
          }
    } 
}
solve(["DYN4MICNIC",
    "Target Remove NIC",
    "Dispel 3 A",
    "DefensiveStance",
    "Target Change d D",
    "target change D d",
    "For Azeroth"])

// solve((["fr1c710n",
//     "GladiatorStance",
//     "Dispel 2 I",
//     "Dispel 4 T",
//     "Target Change RICTION riction",
//     "For Azeroth"]))
// solve(["TR1GG3R",
// "Dispel 2 I",
// "Dispel 5 E",
// "For Azeroth"])
