function solve(input) {
    let n =Number(input.shift())
    let digitsPattern = /\d/gm
    let patternMatch = /(@#+)([A-Z][A-Za-z0-9]{5,})(@#+)/gm
    let validMatch = []
    let result = []

    match = patternMatch.exec(input)
   


    while (match != null) {
        validMatch.push(match[2])
        match = patternMatch.exec(input)
        while (matchDigit != null) {
            matchDigit = digitsPattern.exec(validMatch)
            result.push(match[2])
            matchDigit = digitsPattern.exec(validMatch)
            console.log(matchDigit);
        }
    }
    
   
}
solve(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
solve((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
)
