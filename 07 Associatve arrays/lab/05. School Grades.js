function solve(input) {
    let map = new Map();
    for (let string of input) {
        let tokens = string.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);
        if (!map.has(name)) {
            map.set(name, []);
        }
        for (const grade of grades)
            map.get(name).push(grade);
    }

    let sorted = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    for (let kvp of sorted) {

        console.log(`${kvp[0]}: ${avgGrade(kvp[1]).toFixed(2)}`);

        function avgGrade(a,b){
            let sumA=0
            let sumB=0
            let gradesA=a[1]
            let gradesB=b[1]
            gradesA.forEach(ga => sumA += ga)
            gradesB.forEach(gb => sumB += gb)
            let averageA =sumA/gradesA.length()
            let averageB =sumB/gradesB.length( )
            return averageA-averageB

            
        }

    }
}

solve(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6']) 