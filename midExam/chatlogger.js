function task3 (input) {

    let myArr = [];

    for (i = 0; i < input.length; i++) {
       let commands = input[i].split(" ");
        let command = commands[0];
        let message = commands[1];
        let ifExistsIndex = myArr.indexOf(message);
        
        
        if (command === "Chat") {
            myArr.push(message)

        } else if (command === "Delete") {
            if (ifExistsIndex >= 0) {
                myArr.splice(ifExistsIndex, 1);
            }

        } else if (command === "Edit") {
            if (ifExistsIndex >= 0) {
                myArr.splice(ifExistsIndex, 1);
                myArr.splice(ifExistsIndex, 0, commands[2]);
                
            }

        } else if (command === "Pin") {
            if (ifExistsIndex >= 0) {
                let pinned = myArr.splice(ifExistsIndex, 1).toString();
                myArr.push(pinned);
            }

        } else if (command === "Spam") {
            for (let i = 1; i < commands.length; i++) {
                myArr.push(commands[i])
            }
            


        } else if (command === "end") {
            break;
        }     
    }

   console.log(myArr.join("\n"))
    


}
task3(["Chat Hello",
    "Chat darling",
    "Edit darling Darling",
    "Spam how are you",
    "Delete Darling",
    "end"
    ]);
//task3();
task3((["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"])
);