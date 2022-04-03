function worldTour(input) {
    let text = input.shift();
    for (let line of input) {
        let command = line.split(':');
        if (command[0] === 'Add Stop') {

            if (Number(command[1]) <= text.length-1 && Number(command[1] >= 0)) {
                let firstPart = text.slice(0, command[1])
                let secondPart = text.slice(command[1],)
                text = firstPart + command[2] + secondPart
            } console.log(text);

        } else if (command[0] === 'Remove Stop') {
            if (command[2] <= text.length-1 && command[1] <= text.length-1
                 && command[1] >= 0 && command[2] >= 0) {
                let firstPart = text.slice(0, command[1])
                let secondPart = text.slice(Number(command[2]) + 1,)
                // Hawai::RomeCyprys-Greece
                text = firstPart + secondPart
            }
            console.log(text);

        } else if (command[0] === 'Switch') {
           
                if (text.includes(command[1])) {
                    text = text.replace(command[1], command[2])
                    console.log(text);
                }else{
                    console.log(text);
                }
            
       

        }else if (command[0] === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${text}`);
        }
    }
}
// worldTour(["Hawai::Cyprys-Greece",
//     "Add Stop:7:Rome",
//     "Remove Stop:11:16",
//     "Switch:Hawai:Bulgaria",
//     "Travel"])
worldTour([
    'Albania:Bulgaria:Cyprus:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel',
    ''
])