function fancyBarcodes(input) {
    let pattern = /(@#+)([A-Z][A-Za-z0-9]{5,})(@#+)/gm
    let digitPattern = /\d/g;
    let productGroup = '00'
    let searchedDigits = []
    let n = Number(input.shift())
    for (let index = 0; index < n; index++) {
        let barcode = pattern.exec(input)
        if (barcode != null) {
            for (const line of barcode[0]) {
                let numbers = line.match(digitPattern)
               
                if (numbers !== null) {
                    productGroup = numbers.join('')
                    console.log(productGroup);
                    
                   
                }
            }
            console.log();
        } else {
            console.log("Invalid barcode");
        }
    }console.log();
}

fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])