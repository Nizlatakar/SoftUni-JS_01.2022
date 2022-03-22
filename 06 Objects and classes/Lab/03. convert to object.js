function solve(data) {
    return Object.entries(JSON.parse(data)).reduce((agg, e) => agg += `${e[0]}: ${e[1]}\n`, '');
}