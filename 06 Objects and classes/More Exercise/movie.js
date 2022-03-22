function foo(param){
    let movies=[]
    
    for(let command of param){
        if(command.includes("addMovie")){
            let movie=command.split("addMovie ")[1]
            movies.push({name:movie})
        }else if(command.includes("directedBy")){
            let tokens=command.split(" directedBy ")
            for(let movie of movies){
                if (movie.name==tokens[0]){
                    movie.director=tokens[1]
                    continue
                }
            }
        }else if(command.includes("onDate")){
            let tokens=command.split(" onDate ")
            for(let movie of movies){
                if (movie.name==tokens[0]){
                    movie.date=tokens[1]
                    continue
                }
            }
        }


    }
    for(movie of movies){
        if(movie.director&&movie.date)
        console.log(JSON.stringify(movie));
    }
}