function solve(input) {
   let kk =Object.values(input).length
// input.forEach(element =>console.log(`Name: ${element} -- Personal Number: ${element.length}`))
  console.log( `Name: ${Object.values(input)} -- Personal Number: ${kk}`);      
}
    


solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])