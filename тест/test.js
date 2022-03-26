function solve(input) {
  let text = input.shift();

  for (let line of input) {
    line = line.split("|");
    if (line[0] === "Move") {
      let first = text.slice(0, Number(line[1]))
      text = first;

    }
    

    if (line[0] === "ChangeAll") {

      for (let letter of text) {
        let another = letter.replace(line[1], line[2])
        text = text + another.concat()

      }
      

    }
    if (line[0] === "Insert") {
      let index = Number(line[1])
      let value = line[2]
      let cutted = text.slice(index)
      text = cutted + value
      console.log(text);

    }
  
     if (line[0] === "Decode") {
      console.log(`The decrypted message is: ${text}`);
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

