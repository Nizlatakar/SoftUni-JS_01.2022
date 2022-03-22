function numbers(sequence) {
    let numbers = sequence.shift().split(" ").map(Number);
  
    for (const command of sequence) {
      let currrentCommand = command.split(" ");
  
      switch (currrentCommand[0]) {
        case "Add":
          numbers.push(Number(currrentCommand[1]));
          break;
  
        case "Remove":
          for (let index = 0; index < numbers.length; index++) {
            if (Number(currrentCommand[1]) === numbers[index]) {
              numbers.splice(index, 1);
              break;
            }
          }
          break;
  
        case "Replace":
          for (let index = 0; index < numbers.length; index++) {
            if (Number(currrentCommand[1]) === numbers[index]) {
              numbers.splice(index, 1, Number(currrentCommand[2]));
              break;
            }
          }
          break;
  
        case "Collapse": 
          for (let index = 0; index < numbers.length; index++) {
              if (numbers[index] <= Number(currrentCommand[1])) {
                  numbers.splice(index, 1);
              }
          }
          break;
  
  
        case "Finish":
          break;
      }
    }
  
    console.log(numbers.join(' '));
  }
  
  numbers(["1 20 -1 10 14 2 8", "Collapse 8", "Remove 20", "Add 5", "Finish"]);
  