function hogwarts(input) {

    let spell = input.shift()
    while (input[0] !== "Abracadabra") {
        let [command, ...things] = input.shift().split(' ')
        
        if (command === 'Abjuration') {
            spell = spell.toLocaleUpperCase()
            console.log(spell);
        } else if (command === 'Necromancy') {
            spell = spell.toLocaleLowerCase()
            console.log(spell);
        } else if (command === 'Illusion') {
            let [index, letter] = things
            index = Number(index)

            if (index >= 0 && index < spell.length) {
                let left = spell.substring(0, index)
                let right = spell.substring(index + 1)
                spell = left + letter + right
                console.log(`Done!`);
            } else {
                console.log(`The spell was too weak.`);
            }
        } else if (command === 'Divination') {
            let [firstSub, secondSub] = things
            if (spell.includes(firstSub)) {
                let pattern = new RegExp(firstSub, 'g')
                spell = spell.replace(pattern, secondSub)
                console.log(spell);
            }
        } else if (command === 'Alteration') {
            let [substr] = things
            if (spell.includes(substr)) {
                let index = spell.indexOf(substr)
                let left = spell.substring(0, index)
                let right = spell.substring(index + substr.length)
                spell = left + right
                console.log(spell);
            }
        }else{
            console.log(`The spell did not work!`);
        }
    }
}