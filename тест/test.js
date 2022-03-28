function worldTour(input) {
  //take encoded message
  let stops = input.shift();
  for (let element of input) {
    //console.log(element); //Add Stop:7:Rome
    let tokens = element.split(":");
    //console.log(tokens); //['Add Stop', '7', 'Rome']
    let command = tokens[0];
    //console.log(command); //Add Stop
    if (command === "Add Stop") {
      let index = +tokens[1];
      let str = tokens[2];

      let firstHalf = stops.substring(0, index);
      let secondHalf = stops.substring(index);
      stops = firstHalf + str + secondHalf;
      console.log(stops);
    } else if (command === "Remove Stop") {
      let startIndex = +tokens[1];
      let endIndex = +tokens[2];
      //console.log(startIndex, endIndex); //11 16
      removed = stops.slice(startIndex, endIndex + 1);
      stops = stops.replace(removed, "");
      console.log(stops);
    } else if (command === "Switch") {
      let oldString = tokens[1];
      let newString = tokens[2];
      //console.log(oldString, newString); //Hawai Bulgaria
      if (stops.includes(oldString)) {
        stops = stops.replace(oldString, newString);
      }
      console.log(stops);
    } else if (command === "Travel") {
      console.log(`Ready for world tour! Planned stops: ${stops}`);
      break;
    }
  }
}
solve([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode',
])
solve([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode',
])

