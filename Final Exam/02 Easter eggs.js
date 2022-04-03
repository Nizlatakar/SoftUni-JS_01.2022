function solve(input){
    let pattern =/([@#]+)([a-z]{3,})([@#])+[\W]*\/+(\d+)\/+/gm
    let string=input.shift()
    let items=[]
    let totalCal=0
    let regex=pattern.exec(string)
    
    while (regex) {
        items.push({ item: regex[2], day: regex[4] });
        totalCal += Number(regex[4])
        regex = pattern.exec(string);
    }
    
    for (let i = 0; i < items.length; i++) {
        console.log(`You found ${items[i].day} ${items[i].item} eggs!`);
    }
  }



solve(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/'])
