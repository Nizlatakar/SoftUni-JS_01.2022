function solve(input) {
    let heroes = [];
    for (const line of input) {

        let [heroName, heroLevel, item] = line.split(' / ')
        let splitted = item.split(', ')
        splitted.sort((a, b) => a.localeCompare(b)).join(', ')


        let warcraft = {
            name: heroName,
            level: heroLevel,
            item
        }
        heroes.push(warcraft)
    }
    let sorted = heroes.sort((a, b) => a.level - b.level)

    sorted.forEach(warcraft => {
        console.log(`Hero: ${warcraft.name}`);
        console.log(`level => ${warcraft.level}`);
        console.log(`items => ${warcraft.item}`);

    })

}