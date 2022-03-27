function solve(input) {
    let nLines = input.shift()
    let collection = []    
    input.pop();
for (let index = 0; index < nLines; index++) {
    collection+=input.shift()
    
        // let piece= line[0]
        // let composer= line[1]
        // let key= line[2]
        // console.log(piece);
    
    console.log(collection);
}


}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ])
