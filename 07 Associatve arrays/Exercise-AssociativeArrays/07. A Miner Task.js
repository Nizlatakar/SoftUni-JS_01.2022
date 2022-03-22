function miner(input) {

    let output = new Map();
    let arrLength = input.length;

    for (let i = 0; i < arrLength; i += 2) {
        let ore = input[i];
        let quantity = Number(input[i + 1]);;

        if (!output.has(ore)) {
            output.set(ore, 0);
        }
        let updateQuantity = output.get(ore);
        updateQuantity += quantity
        output.set(ore, updateQuantity);
    }
    for (const iterator of output) {
        console.log(`${iterator[0]} -> ${iterator[1]}`);
    }

}

miner([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])
miner([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])