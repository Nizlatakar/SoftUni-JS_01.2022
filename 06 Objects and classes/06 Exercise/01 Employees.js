function employees(input) {
 input.forEach(element=>console.log(`Name: ${element} -- Personal Number: ${element.length}`)); 
//  function solve(input) {
//     for (const singleName of input) {
//         let person = {
//             name: singleName,
//             number: singleName.length
//         }
//         console.log(`Name: ${person.name} -- Personal Number: ${person.number}`);
//     }
// }


}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ])
