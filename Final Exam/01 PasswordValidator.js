function passwordValidator(input) {
    let text = input.shift();

    for (let line of input) {
        let command = line.split(' ');
        if (command[0] === 'Make') {
            if (command[1] === 'Upper') {
                let firstPart = text.slice(0, command[2])
                let secondPart = text.slice(command[2],)
                for (const iterator of secondPart) {
                    secondPart=       secondPart.toUpperCase()
                }
                
                text = firstPart + secondPart
                console.log(text);
            } else if (command[0] === 'Lower') {
                let firstPart = text.slice(0, command[2])
                let secondPart = text.slice(command[2],).toLowerCase()
                for (const iterator of text) {
                     secondPart = secondPart.toLowerCase()
                }
               
                text = firstPart + secondPart
                console.log(text);
            }
        }
        else
         if (command[0] === 'Insert') {
            if (command[1] >=0 && command[1] <=text.length) {
                let firstPart = text.slice(0, command[1])
                let secondPart = text.slice(command[1],)
                text = firstPart +command[2] +secondPart
                console.log(text);
        }
            }
        if (command[0] === "Replace") {
            let ascii = command[1].charCodeAt() + Number(command[2]);
            let toReplace = String.fromCharCode(ascii);
            for (let occurance of text) {
                text = text.replace(command[1], toReplace);
            }
            console.log(text);
        }

        else if (command[0] === 'Validation') {


            if (text.lastIndexOf() < 8) {
                console.log("Password must consist at least one uppercase letter!");
            } else if (!text.charCodeAt() >= 48 && !text.charCodeAt() <= 57
                && !text.charCodeAt() >= 65 && !text.charCodeAt() <= 90
                && !text.charCodeAt() >= 97 && !text.charCodeAt() <= 122
                && !text.charCodeAt() >= 95 && !text.charCodeAt() <= 95) {
                console.log("Password must consist only of letters, digits and _!");
            } else if (!text.charCodeAt() >= 97 && !text.charCodeAt() <= 122) {
                console.log("Password must consist at least one uppercase letter!");
            } else if (!text.charCodeAt() >= 95 && !text.charCodeAt() <= 95) {
                console.log("Password must consist at least one lowercase letter!");
            } else if (!text.charCodeAt() >= 48 && !text.charCodeAt() <= 57) {
                console.log("Password must consist at least one digit!");
            }




        }

     
            
        
    }console.log(text);
}

// passwordValidator(['invalidpassword*',
//     'Insert 2 p',
//     'Replace i -50',
//     'Replace * 10',
//     'Make Upper 2',
//     'Validation',
//     'Complete'])
passwordValidator(['123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete'])