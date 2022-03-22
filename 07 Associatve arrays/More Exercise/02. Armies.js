function armies(input){
    let armies = {};
    for (const line of input) {
        let currentLine = line.split(" , ");
        let leader = currentLine[0];
        let legion = currentLine[1];
        let peopleCount = Number(currentLine[2]);

        if (!armies.hasOwnProperty(leader)) {
            armies[leader] = {};
        }

        if (!armies[leader].hasOwnProperty(legion)) {
            armies[leader][legion] = peopleCount;
        }
        if (armies[leader][legion] === armies[leader][legion+1]) {
            armies[leader][peopleCount] +=peopleCount;
        }
    }
    let keys = Object.keys(leader);

    keys.sort((a, b) => a.localeCompare(b));

    for (const item of keys) {
        let sortedLeaders = Object.entries(armies[item]);
        sortedLeaders.sort((a, b) => a[1] - b[1]);


        
        console.log(`${leader}:${peopleCount} 
        >>> ${sortedLeaders.join("/n")} - ${peopleCount}`);
    }
}

armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 
'Rick Burr: Juard, 50000', 'Findlay arrives', 
'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350',
 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000',
  'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])
armies(['Rick Burr arrives', 'Findlay arrives', 
'Rick Burr: Juard, 1500', 'Wexamp arrives',
 'Findlay: Wexamp, 34540', 'Wexamp + 340',
  'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])