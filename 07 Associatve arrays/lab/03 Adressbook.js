function solve(input) {
    let streets = {};

    for (let line of input) {
     let[name,address]=line.split(':');
     streets[name]=address;
    }
    let sorted=Object.entries(streets);
    sorted.sort((a,b) => a[0].localeCompare(b[0]));
    for (let key of sorted) {

        console.log(`${key[0]} -> ${key[1]}`);
    }
}
solve(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])

