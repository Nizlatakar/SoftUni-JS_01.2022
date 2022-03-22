function experienceGaining (input){

    let neededExpierence = Number(input.shift());
    let countOfBattle = Number(input.shift());
    let expierenceEarned = input;
    let expierence = 0;
    let difference = 0;
    isColledted = false;
    let battleCount = 0;
    
    for (let i = 0; i < input.length;i++){
        battleCount++
    
        expierence += input[i];
    
        if (battleCount % 3 === 0){
        let additionalExpierence = input[i] * 0.15;
            expierence += additionalExpierence;
        }
        if (battleCount % 5 === 0){
            let lessExpierence = input[i] - (input[i] * 0.10);
            expierence -= (input[i] - lessExpierence);
            }
    
            if (battleCount % 15 === 0){
                let addExpierence = (input[i] * 0.05);
                expierence += addExpierence
            }
    
           difference =  neededExpierence - expierence;
            if (expierence >= neededExpierence){
                break;
            }
    }
    
    
    
    if (difference < 0){
        console.log (`Player successfully collected his needed experience for ${battleCount} battles.`)
    } else {
        console.log (`Player was not able to collect the needed experience, ${difference.toFixed(2)} more needed.`)
    }
    
    }

