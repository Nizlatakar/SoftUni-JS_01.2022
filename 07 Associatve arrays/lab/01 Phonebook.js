function solve(input) {
    let meetings = {};

    for (let line of input) {
        line = line.split(" ")
        let weekday = line[0];
        let name = line[1];        

        if (meetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }
    for (let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}
solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])

