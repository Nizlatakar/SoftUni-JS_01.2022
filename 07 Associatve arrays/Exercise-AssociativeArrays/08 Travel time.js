function travel(input) {
    let countries = {};
    for (const line of input) {
        let currentLine = line.split(" > ");
        let country = currentLine[0];
        let city = currentLine[1];
        let price = Number(currentLine[2]);

        if (!countries.hasOwnProperty(country)) {
            countries[country] = {};
        }

        if (!countries[country].hasOwnProperty(city)) {
            countries[country][city] = price;
        }
        if (countries[country][city] > price) {
            countries[country][city] = price;
        }
    }
    let keys = Object.keys(countries);

    keys.sort((a, b) => a.localeCompare(b));

    for (const item of keys) {
        let sortedCities = Object.entries(countries[item]);
        sortedCities.sort((a, b) => a[1] - b[1]);


        let result = [];
        for (const city of sortedCities) {
            result.push(city.join(" -> "));
        }
        console.log(`${item} -> ${result.join(" ")}`);
    }
}
travel([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200",
]);
travel([
    "Bulgaria > Sofia > 25000",
    "Bulgaria > Sofia > 25000",
    "Kalimdor > Orgrimar > 25000",
    "Albania > Tirana > 25000",
    "Bulgaria > Varna > 25010",
    "Bulgaria > Lukovit > 10",
]);
