function solve(arr) {

    let heroes = []

    arr.map(x => x.split(' / '))

        .map(x => heroes.push({ name: x[0], level: +x[1], items: x[2].split(', ').join(', ') }))



        heroes.sort((a, b) => a.level - b.level)

        .map(x => console.log(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.items}`))

}


// function inventory(arr){
//     const heroes = [];

//     for(let element of arr){
//         element = element.split(' / ');

//         let heroName = element.shift();
//         let level = element.shift();
//         let items = element.join('').split(', ').sort((a, b) => a.localeCompare(b));

//         const hero = {
//             name : heroName,
//             level : Number(level),
//             items : items
//         }

//         heroes.push(hero);
//     }

//     const heroesAscending = [];
//     heroesAscending.push(heroes.shift());


//     for(let hero of heroes){
//         let level = hero.level;

//         if(level < heroesAscending[0].level){
//             heroesAscending.unshift(hero);
//         }else if(level > heroesAscending[heroesAscending.length - 1].level){
//             heroesAscending.push(hero);
//         }
//     }

//     for(let hero of heroesAscending){
//         console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(', ')}`);
//     }

// }

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])

solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
])