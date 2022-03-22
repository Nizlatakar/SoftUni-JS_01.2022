function match(text) {
    let regeX = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  
    let matches=[];
    let validMatch

    while ((validMatch=regeX.exec(text)) !== null) {
        matches.push(validMatch[0] )
    }
    for (const name of matches) {

           
         }
         console.log(matches.join(" "));
    
}
match("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")