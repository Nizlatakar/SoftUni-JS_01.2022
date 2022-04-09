function follewers(input){

    
    let result = {};
    
    
    for (let index = 0; index < input.length; index++) {
        let tokens = input.shift().split(": ")
        let user = tokens[0]
        // piece
        let likes = tokens[1]
        // composer
        let actions = tokens[2]
        // key
        result[user] = {
            likes,
            actions
        } 
    }
    
    while (input[0] !== "Log out") {
        let line = input.shift()
        let tokens = line.split(": ")
        let command = tokens[0]
    
        if(command === "New follower"){
            let userNew = tokens[1]
            let likesNew = tokens[2]
            let actionsNew = tokens[3]
    
            if(result.hasOwnProperty(userNew) === false){
                result[userNew] = {}
                result[userNew].likes = likesNew
                result[userNew].actions = actionsNew
                console.log(`${userNew} by ${likesNew} in ${actionsNew} added to the collection!`)
            }else{
                console.log(`${userNew} is already in the collection!`)
            }
            
    
        }
        if(command === "Like"){
            let userNew = tokens[1]
            let likesNew = tokens[2]
            let actionsNew = tokens[3]
    
            if(result.hasOwnProperty(userNew) === false){
                result[userNew] = {}
                result[userNew].likes = likesNew
                result[userNew].actions = actionsNew
                console.log(`${userNew} by ${likesNew} in ${actionsNew} added to the collection!`)
            }else{
                console.log(`${userNew} is already in the collection!`)
            }
            
    
        }
        
        else if(command === "Blocked"){
            let userNew = tokens[1]
            if(result.hasOwnProperty(userNew) === false){
                console.log(`Invalid operation! ${userNew} does not exist in the collection.`)
            }else{
                delete result[userNew]
                console.log(`Successfully removed ${userNew}!`)
            }
    
        }
    
        if(command === "Comment"){
            let userNew = tokens[1]
            let likesNew = tokens[2]
            let actionsNew = tokens[3]
    
            if(result.hasOwnProperty(userNew) === false){
                result[userNew] = {}
                result[userNew].likes = likesNew
                result[userNew].key = actionsNew
                console.log(`${userNew} by ${likesNew} in ${actionsNew} added to the collection!`)
            }else{
                console.log(`${userNew} is already in the collection!`)
            }
            
    
        }
    }
    
    let entries = Object.entries(result)
    
    for (let [name, properties] of entries) {
        console.log(`${name} -> Composer: ${properties.likes}, Key: ${properties.actions}`)
        
    }
    
    }
    follewers ((["Like: Katy: 3",
    "Comment: Katy",
    "New follower: Bob",
    "Blocked: Bob",
    "New follower: Amy",
    "Like: Amy: 4",
    "Log out"]))