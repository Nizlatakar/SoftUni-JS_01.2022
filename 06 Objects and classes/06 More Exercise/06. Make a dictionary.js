function solve(data) {
    function output(arr) {
        let r = '';
        arr.forEach(x => r += `Term: ${x[0]} => Definition: ${x[1]}\n`);
        return r;
    }
    function objectGenerator(element, agg) {
        let currO = JSON.parse(element);
        let [k, v] = Object.entries(currO)[0];
        agg[k] = v;
    }
    const sortKeys = (a, b) => a[0].localeCompare(b[0]);

    let arr = Object.entries(
        data.reduce((agg, element) => {
            objectGenerator(element, agg);
            return agg;
        }, {})
    ).sort(sortKeys);

    return output(arr);
}