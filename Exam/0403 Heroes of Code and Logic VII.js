function solve(input) {
    // 'Solmyr 85 120',
    // 'Kyrre 99 50',

    // 'Heal - Solmyr - 10',
    // 'Recharge - Solmyr - 50',
    // 'TakeDamage - Kyrre - 66 - Orc',
    // 'CastSpell - Kyrre - 15 - ViewEarth',

    // 'End'

    // 4
    // Adela 90 150
    // SirMullich 70 40
    // Ivor 1 111
    // Tyris 94 61

    // Heal - SirMullich - 50
    // Recharge - Adela - 100
    // CastSpell - Tyris - 1000 - Fireball
    // TakeDamage - Tyris - 99 - Fireball
    // TakeDamage - Ivor - 3 - Mosquito
    // End

    let actions = {

        'CastSpell': castSpell,
        'TakeDamage': takeDamage,
        'Recharge': recharge,
        'Heal': heal

    }

    let numberOfHeroes = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < numberOfHeroes; i++) {
        // Solmyr 85 120',
        let [heroName, hitPoints, manaPoints] = input.shift().split(' ');
        hitPoints = Number(hitPoints);
        manaPoints = Number(manaPoints);

        heroes[heroName] = {
            hitPoints,
            manaPoints
        }
    }

    while (input[0] !== 'End') {

        let tokens = input.shift().split(' - ');
        let command = tokens[0];
        let action = actions[command];
        action(tokens[1], tokens[2], tokens[3]);

    }

    function heal(heroName, amount) {
        // Heal - Solmyr - 10',

        // Heal – {hero name} – {amount}
        // •	The hero increases his HP. If a command is given that would bring the HP of the hero above the maximum value (100), HP is increased to 100 (the HP can’t go over the maximum value).
        // •	 Print the following message:
        // o	"{hero name} healed for {amount recovered} HP!"
        amount = Number(amount);
        let hero = heroes[heroName]; // we have 70. they heal us with 50. max heal is 100. so we need to heal with (100 - 70). we have 20 on top - we need to remove 20 
        let oldValue = hero.hitPoints;
        hero.hitPoints = Math.min(100, hero.hitPoints + amount);
        console.log(`${heroName} healed for ${hero.hitPoints - oldValue} HP!`);
    }


    function castSpell(heroName, mpNeeded, spellName) {
        mpNeeded = Number(mpNeeded);
        //         CastSpell – {hero name} – {MP needed} – {spell name} 
        // •	If the hero has the required MP, he casts the spell, thus reducing his MP. Print this message: 
        // o	"{hero name} has successfully cast {spell name} and now has {mana points left} MP!"
        // •	If the hero is unable to cast the spell print:
        // o	"{hero name} does not have enough MP to cast {spell name}!"
        // 'CastSpell - Kyrre - 15 - ViewEarth',
        let hero = heroes[heroName];

        if (hero.manaPoints >= mpNeeded) {
            hero.manaPoints -= mpNeeded;

            console.log(`${heroName} has successfully cast ${spellName} and now has ${hero.manaPoints} MP!`);
            // Kyrre has successfully cast ViewEarth and now has 35 MP!
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
        }
    }


    function takeDamage(heroName, damage, attacker) {
        //      TakeDamage – {hero name} – {damage} – {attacker}

        // •	Reduce the hero HP by the given damage amount. If the hero is still alive (his HP is greater than 0) print:
        // o	"{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!"
        // •	If the hero has died, remove him from your party and print:
        // o	"{hero name} has been killed by {attacker}!"
        // TakeDamage - Kyrre - 66 - Orc',
        damage = Number(damage);
        let hero = heroes[heroName];

        hero.hitPoints -= damage;

        if (hero.hitPoints > 0) {
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${hero.hitPoints} HP left!`);

        } else {
            delete heroes[heroName];
            console.log(`${heroName} has been killed by ${attacker}!`);
        }
    }


    function recharge(heroName, amount) {
        amount = Number(amount);
        // Recharge - Solmyr - 50'

        // Recharge – {hero name} – {amount}
        // •	The hero increases his MP. If a command is given that would bring the MP of the hero above the maximum value (200), MP is increased to 200. (the MP can’t go over the maximum value).
        // •	 Print the following message:
        // o	"{hero name} recharged for {amount recovered} MP!"
        let hero = heroes[heroName];

        let oldValue = hero.manaPoints;
        hero.manaPoints = Math.min(200, hero.manaPoints + amount);
        console.log(`${heroName} recharged for ${hero.manaPoints - oldValue} MP!`);

    }

    // Solmyr healed for 10 HP!
    // Solmyr recharged for 50 MP!
    // Kyrre was hit for 66 HP by Orc and now has 33 HP left!
    // Kyrre has successfully cast ViewEarth and now has 35 MP!
    // Solmyr
    //   HP: 95   / descending order 
    //   MP: 170
    // Kyrre
    //   HP: 33
    //   MP: 35

    // SirMullich healed for 30 HP!
    // Adela recharged for 50 MP!
    // Tyris does not have enough MP to cast Fireball!
    // Tyris has been killed by Fireball!
    // Ivor has been killed by Mosquito!
    // SirMullich
    //   HP: 100
    //   MP: 40
    // Adela
    //   HP: 90
    //   MP: 200

    //     Print all members of your party who are still alive, sorted by their HP in descending order (b – a) , then by their name in ascending order (a – b) , in the following format (their HP/MP need to be indented 2 spaces):
    // "{hero name}
    //      HP: {current HP}
    //      MP: {current MP}

    // [
    //     [ 'Adela', { hitPoints: 90, manaPoints: 200 } ],
    //     [ 'SirMullich', { hitPoints: 100, manaPoints: 40 } ]
    //   ]

    let sortedHeroes = Object.entries(heroes).
        sort(sortingHeroes);

    function sortingHeroes(a, b) {

        let [aName, aInfo] = a;
        let [bName, bInfo] = b;

        let byHealthDescending = bInfo.hitPoints - aInfo.hitPoints;

        if (byHealthDescending === 0) {
            return aName.localeCompare(bName);
        }

        return byHealthDescending;

    }

    for (let [heroName, hero] of Object.entries(heroes)) {

        console.log(`${heroName}`);
        console.log(`  HP: ${hero.hitPoints}`);
        console.log(`  MP: ${hero.manaPoints}`);
    }

}
solve([
    '4',
'Adela 90 150',
'SirMullich 70 40',
'Ivor 1 111',
'Tyris 94 61',
'Heal - SirMullich - 50',
'Recharge - Adela - 100',
'CastSpell - Tyris - 1000 - Fireball',
'TakeDamage - Tyris - 99 - Fireball',
'TakeDamage - Ivor - 3 - Mosquito',
'End'
])
solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])