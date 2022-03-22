function match(text) {
    let regeX = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;
  
    let matches=[];
    let validMatch

    while ((validMatch=regeX.exec(text)) !== null) {
        matches.push(validMatch[0] )
    }
    for (const name of matches) {

           
         }
         console.log(matches.join(", "));
    
}
match("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")