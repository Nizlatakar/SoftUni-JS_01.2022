function hunting (input) {

    let days = Number(input[0]);
    let countOfPlayers = Number(input[1]);
    let energy = Number(input[2]);
    let waterPerDay = Number(input[3]);
    let foodPerDay = Number(input[4]);

    let totalWater = days * countOfPlayers * waterPerDay;
    let totalFood = days * countOfPlayers * foodPerDay;

    let daysCounter = 1;

    for (let i = 5; i < days + 5; i++, daysCounter++) {

        let lostEnergy = Number(input[i]);
        
        energy-=lostEnergy;

        if (energy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            break;
        }

        if (daysCounter % 3 === 0) {
            
            let foodDaily = totalFood / countOfPlayers;
            totalFood -= foodDaily;
            energy += energy * 0.1;
            

        } 
        if (daysCounter % 2 === 0) {

            energy += energy * 0.05;
            let dailyWater = totalWater * 0.3;
            totalWater -= dailyWater;

        }
       
    }
    if (energy > 0) {
    console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    }
}