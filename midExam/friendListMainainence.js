function friendListMaintenance(input) {
    let friends = input.shift().split(", ");


    let commands = input.shift();
    let black = 0;
    let lose = 0;

    function blackList(name) {
        const isNameIncluded = friends.includes(name);

        if (!isNameIncluded) console.log(`${name} was not found.`);
        if (isNameIncluded) {
            console.log(`${name} was blacklisted.`);
            friends.splice(friends.indexOf(name), 1, "Blacklisted");
            black++;
        }

        return black;
    }

    function error(index) {
        const num = Number(index);
        const name = friends[num];
        const isAllowed = name !== "Blacklisted" && name !== "Lost";

        if (isAllowed) {
            console.log(`${friends[num]} was lost due to an error.`);
            friends.splice(num, 1, "Lost");
            lose++;
        }
        return lose;
    }

    function change(index, newName) {
        const num = Number(index);
        const name = friends[num];

        if (name !== undefined) {
            friends.splice(index, 1, newName);
            console.log(`${name} changed his username to ${newName}. `);
        }
    }

    while (commands !== "Report") {
        let command = commands.split(" ");

        switch (command[0]) {
            case "Blacklist":
                blackList(command[1]);
                break;
            case "Error":
                error(+command[1]);
                break;

            case "Change":
                change(+command[1], command[2]);
                break;
        }

        commands = input.shift();
    }

    console.log(`Blacklisted names: ${black} `);
    console.log(`Lost names: ${lose} `);
    console.log(friends.join(" "));
}


friendListMaintenance(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"])
friendListMaintenance(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"])
