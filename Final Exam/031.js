function shopping(array) {
    let result = {};
    for (let index = 0; index < array.length; index++) {
      let tokens = array.shift().split("->");
      let command = tokens[0];
      let store = tokens[1];
      let items1 = tokens[2];
      let items2 = tokens[3];
  
      result[store] = {
        items1,
        items2
      };
    }
    let entries = Object.entries(result);
    let values = Object.values(result)
    
  
    for (let [name, values] of entries) {
   
      console.log(
       ` ${name}:`
      );
      for (let product in result) {
          console.log(`${result[product].items1.split(',')}\n`);
          
        }
    }
  }
  shopping([
    "Add->Grocery->Dried-fruit,Nuts,Lemons",
    "Add->Market->Nuts,Juice",
    "Important->Market->Snack",
    "Remove->Market",
    
  ]);