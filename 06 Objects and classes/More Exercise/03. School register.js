function solve(data) {
    return data.reduce((a, b) => {
        let tuples = b.split(', ');

        a.push(tuples.reduce((a, b) => {
            let [k, v] = b.split(': ');
            a[k] = v;
            return a;
        }, {}));

        return a;
    }, [])
        .filter(e => e['Graduated with an average score'] >= 3)
        .sort((a, b) => a['Grade'] - b['Grade'])
        .map(e => {
            e['Grade'] = Number(e['Grade']) + 1;
            return e;
        })
        .reduce((a, b) => {
            let entries = Object.entries(b);
            if (a.filter(e => e.Grade == entries[1][1]).length == 0) {
                a.push({
                    ['Grade']: entries[1][1],
                    ['List of students']: [entries[0][1]],
                    ['Average annual grade from last year']: [entries[2][1]]
                })
            } else {
                let obj = a.filter(e => e.Grade == entries[1][1])[0];
                obj['List of students'].push(entries[0][1]);
                obj['Average annual grade from last year'].push(entries[2][1]);
            }
            return a;
        }, [])
        .forEach(x => {
            console.log(`${Object.values(x)[0]} Grade 
List of students: ${Object.values(x)[1].join(', ')}
Average annual grade from last year: ${(Object.values(x)[2].map(Number).reduce((a, b) => a + b) / Object.values(x)[2].length).toFixed(2)}`
            )
            console.log();
        })
    //     .map(x => {
    //         console.log(`${Object.values(x)[0]} Grade
    // List of students: ${Object.values(x)[1].join(', ')}
    // Average annual grade from last year: ${(Object.values(x)[2].map(Number).reduce((a, b) => a + b)).toFixed(2)}`
    //         )
    //        console.log();
    //     })
}