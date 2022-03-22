function tax(input) {
    let newCar = input.shift().split('>>')
    let final = 0
    for (i = 0; i < newCar.length; i++) {
        let command = newCar[i]
        let splitted = command.split(' ')
        if (splitted[0] !== 'family' && splitted[0] !== 'heavyDuty' && splitted[0] !== 'sports') {
            console.log('Invalid car type.');
        }
        if (splitted[0] === 'family') {
            let tax = 50
            let taxYears = tax - (5 * splitted[1])
            let taxAndYears = Math.floor(splitted[2] / 3000)
            let totalTax = taxAndYears * 12 + taxYears
            console.log(A ${splitted[0]} car will pay ${totalTax.toFixed(2)} euros in taxes.);
            final += totalTax
        }
        if (splitted[0] === 'heavyDuty') {
            let tax = 80
            let taxYears = tax - (8 * splitted[1])
            let taxAndYears = Math.floor(splitted[2] / 9000)
            let totalTax = taxAndYears * 14 + taxYears
            console.log(A ${splitted[0]} car will pay ${totalTax.toFixed(2)} euros in taxes.);
            final += totalTax
        }
        if (splitted[0] === 'sports') {
            let tax = 100
            let taxYears = tax - (9 * splitted[1])
            let taxAndYears = Math.floor(splitted[2] / 2000)
            let totalTax = taxAndYears * 18 + taxYears
            console.log(A ${splitted[0]} car will pay ${totalTax.toFixed(2)} euros in taxes.);
            final += totalTax
        }
    }
    console.log(The National Revenue Agency will collect ${final.toFixed(2)} euros in taxes.);
}
tax(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])