function Glad(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let totalExpence = 0;
    for (let currentFight = 1; currentFight <= lostFights; currentFight++) {
        if (currentFight % 2 === 0) {
            totalExpence += helmetPrice;
        }
        if (currentFight % 3 === 0) {
            totalExpence += swordPrice;
        }
        if (currentFight % 6 === 0) {
            totalExpence += shieldPrice;
        }
        if (currentFight % 12 === 0) {
            totalExpence += armourPrice;
        }
    }
    console.log(`Gladiator expenses: ${totalExpence.toFixed(2)} aureus`)
}

Glad(7, 2, 3, 4, 5)
Glad(23,
    12.50,
    21.50,
    40,
    200)