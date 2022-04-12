function solve(input) {
  let message = input.shift();

  while (line !== "For Azeroth") {
    let line = input[i].split(" ");
    if (line[0] === "GladiatorStance") {
      message = message.toUpperCase()
      console.log(message);
    } else if (line[0] === "DefensiveStance") {
      message = message.toLowerCase()
      console.log(message);
    } else if (line[0] === "Dispel") {
      let sub = line[1];
      let str = line[2];
      if (sub >= 0 && sub <= message.length) {
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
    } else if (line[0] === "Target" || line[1] === "Change") {
      let sub = line[2];
      let str = line[3];
      if (message.includes(sub)) {
        while (message.includes(sub)) {
          let index = message.indexOf(sub);
          let part = message.substring(index, index + sub.length);
          message = message.replace(part, str);
        }
      } else {
        console.log(message);
      }
    } else if (line[0] === "Target" || line[1] === "Remove") {
      let sub = line[2];
      let str = '';
      while (message.includes(sub)) {
        let index = message.indexOf(sub);
        let part = message.substring(index, index + sub.length);
        message = message.replace(part, str);
      }
      console.log(message);
    } else if (
      line[0] !== "For Azeroth" &&
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




solve((["fr1c710n",
  "GladiatorStance",
  "Dispel 2 I",
  "Dispel 4 T",
  "Target Change RICTION riction",
  "For Azeroth"]))
  // solve((["DYN4MICNIC",
  // "Target Remove NIC",
  // "Dispel 3 A",
  // "DefensiveStance",
  // "Target Change d D",
  // "target change D d",
  // "For Azeroth"]))

