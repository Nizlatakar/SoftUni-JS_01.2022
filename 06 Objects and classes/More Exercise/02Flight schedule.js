function flightSchedule(arrays) {

    let allFlights = arrays[0]
    let changedStatuses = arrays[1]
    let flightStatus = arrays[2];

    let flightList = {};
    // When you put all flights into an object and change the statuses depends on the new information on the second array. 
    // You must print all flights with the given status from the last array.

    for (let flight of allFlights) {
        let [flightNum, destination, rest] = flight.split(" ")
        let fullDestination = '';
        if(rest !== undefined){
            fullDestination = destination + " " + rest
            flightList[flightNum] = {
                Destination: fullDestination, Status: 'Ready to fly'
            }
            
        }else {
            flightList[flightNum] = {
                Destination: destination, Status: 'Ready to fly'
    
            }
        }

        
    }
    for (let changed of changedStatuses) {
        let [flightNum, status] = changed.split(" ")

        if (flightList.hasOwnProperty(flightNum)) {
            flightList[flightNum].Status = status
        }

    }

    for (let fly in flightList) {
        if (flightList[fly].Status === String(flightStatus)) {
            console.log(flightList[fly]);
        }

    }


}
flightSchedule([['WN269 Delaware',
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
 'SK330 Cancelled'],
 ['Ready to fly']
]

)