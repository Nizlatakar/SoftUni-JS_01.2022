function towns(input) {
    for (const line of input) {
        let singleLine = line.split(" | ");
        let town = singleLine[0];
        let latitude = singleLine[1];
        let longitude = singleLine[2];

        let currentTown = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }

        console.log(currentTown);
    }
}
// function solve(input) {
//     for (const line of input) {
        
//         let[city,lat,long]=line.split(' | ')
        
//         console.log(` town: '${city}', latitude: '${Number(lat).toFixed(2)}', longitude: '${Number(long).toFixed(2)}' `);
//     }
//     }

towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
towns(["Plovdiv | 136.45 | 812.575"]);
