function destinationMapper(text) {
  let pattern = /([=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
  let destinations = [];
  let travelPoints = 0;
  let match = pattern.exec(text);
  while (match !== null) {
      destinations.push(match[2]);
      console.log();
      travelPoints += match[2].length;
      match = pattern.exec(text);
  }
  let result = 'Destinations: ';
  for (let i = 0; i < destinations.length; i++) {
      if (i == 0) {
          result += destinations[i];
      } else {
          result += `, ${destinations[i]}`;
      }
  }
  console.log(result);
  console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
destinationMapper("ThisIs some InvalidInput")
