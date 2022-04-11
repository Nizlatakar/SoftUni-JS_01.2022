function solve(input) {
    let operation = Number(input.shift())
    let collection = {};

    for (let index = 0; index < operation; index++) {
        let tokens = input.shift().split("|")
        let car = tokens[0]
        let mileage = tokens[1]
        let fuel = tokens[2]

        collection[car] = {
            mileage,
            fuel
        }
    }

    while (input[0] !== 'Stop') {
        let line = input.shift()
        let tokens = line.split(" : ")
        let command = tokens[0]
        if (command === "Drive") {
            let currentCar = tokens[1]
            let newMiles = tokens[2]
            let newFuel = Number(tokens[3])
            console.log(collection[fuel]);

            if (Number(collection[fuel]) > newFuel) {
                collection.fuel -= newFuel
                Number(collection.mileage) += Number(newMiles)
                console.log(`${currentCar} driven for ${distance} kilometers. ${fuel} liters of fuel consumed."`)
            }
            else if (Number(collection.mileage) >= 100000) {
                console.log(`Time to sell the ${currentCar}!`)
            } else {
                console.log(`Not enough fuel to make that ride`)
            }


        // }

        // else if (command === "Revert") {
        //     let pieceNew = tokens[1]
        //     if (result.hasOwnProperty(pieceNew) === false) {
        //         console.log(`Invalid operation! ${pieceNew} does not exist in the collection.`)
        //     } else {
        //         delete result[pieceNew]
        //         console.log(`Successfully removed ${pieceNew}!`)
        //     }

        // }

        // else if (command === "ChangeKey") {
        //     let pieceNew = tokens[1]
        //     let keyNew = tokens[2]

        //     if (result.hasOwnProperty(pieceNew)) {
        //         result[pieceNew].key = keyNew
        //         console.log(`Changed the key of ${pieceNew} to ${keyNew}!`)
        //     } else {
        //         console.log(`Invalid operation! ${pieceNew} does not exist in the collection.`)
        //     }

    }
}
}

solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])
	// Audi A6 driven for 543 kilometers. 47 liters of fuel consumed.
//   Mercedes CLS driven for 94 kilometers. 11 liters of fuel consumed.
//   Not enough fuel to make that ride
//   Audi A6 refueled with 50 liters
//   Mercedes CLS mileage decreased by 500 kilometers
//   Audi A6 -> Mileage: 10000 kms, Fuel in the tank: 65 lt.
//   Mercedes CLS -> Mileage: 10594 kms, Fuel in the tank: 24 lt.
//   Volkswagen Passat CC -> Mileage: 45678 kms, Fuel in the tank: 5 lt.