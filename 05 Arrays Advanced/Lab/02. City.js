function solve(name, area, population, country, postCode) {
    let cityInfo = { name, area, population, country, postCode };
    return Object.entries(cityInfo).reduce((a, b) => a += `${b[0]} -> ${b[1]}\n`, '');
}