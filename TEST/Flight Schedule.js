function solve(arrays) {

    let allFlights = arrays[0]
    let changedStatuses = arrays[1]
    let flightStatus = arrays[2];

    let flightList = {};
    for (let flight of allFlights) {
        let [flightNum, destination, rest] = flight.split(" ")
        let fullDestination = '';
        console.log(flight[flightNum]);}
}
solve([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]
)