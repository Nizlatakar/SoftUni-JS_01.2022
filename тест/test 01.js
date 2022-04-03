function solve(input) {
 let pattern =/([=|\/])(?<destination>[A-Z][a-z]{2,})(\1)/g;
 let destinations= [];
 let travelpoints= 0;
let match = pattern.exec(input)
while(match !== null) {
    destinations.push(match[2])
    travelpoints+=match[2].length
  
}
let result = 'Destination: ';
for (let index = 0; index < destinations.length; index++) {
   if (index == 0) {
    result +=destinations[index]
   }else {
   result +=`, ${destinations[index]}`
   }
}
console.log(result);
console.log(travelpoints);
}

solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
