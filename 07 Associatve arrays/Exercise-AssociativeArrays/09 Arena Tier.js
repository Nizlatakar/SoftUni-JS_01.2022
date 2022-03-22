function arenaTier(input){

    let list = {};
    let skillList = {}
    
    
    for (let el of input){
        let [gladiator, technique, skills] = el.split(' -> ')
        if (el.includes('Ave')){
            break;
        }else if (el.includes('vs')){
            let [gladiator1, gladiator2] = el.split(' vs ')

            if (list.hasOwnProperty(gladiator1) && list.hasOwnProperty(gladiator2)){
                for (let el in list[gladiator1]){
                    if (list[gladiator2].hasOwnProperty(el)){
                        if (list[gladiator2][el] < list[gladiator1][el]){
                            delete list[gladiator2]
                            break;
                        }else if (list[gladiator2][el] > list[gladiator1][el]){
                            delete list[gladiator1]
                            break;
                        }
                    }
                    
                }
                continue;
            }else {
                continue;
            }
        }

        if (!list.hasOwnProperty(gladiator)){
            list[gladiator] = {}
            list[gladiator][technique] = Number(skills)
        }else {
            if (list[gladiator].hasOwnProperty(technique)){
                if (list[gladiator][technique] < technique){
                    list[gladiator][technique] = technique
                }
            }else {
                list[gladiator][technique] = Number(skills)
            }
        }

    }


    // Finding sum
    let sum = 0;
    for (let el in list){
        for (let char in list[el]){
            sum += list[el][char]
        }
        skillList[el] = sum
        sum = 0;
    }
    let sortedSkillList = Object.entries(skillList).sort((b,a) => a[1] - b[1] || b[0].localeCompare(a[0]))
   
    
    for (let el in list){
        list[el] = Object.entries(list[el]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    }
    

    for (let [name, skills] of sortedSkillList){
        console.log(`${name}: ${skills} skill`)
        for (let el of list[name]){
            if (el.length <= 2){
                console.log(`- ${el[0]} <!> ${el[1]}`)
            }
            
        }

    }

    
}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]
    
    )