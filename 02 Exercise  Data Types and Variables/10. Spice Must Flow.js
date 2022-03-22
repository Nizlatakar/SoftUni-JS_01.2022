function Dune(startYeild) {
    let extractedSpice=0;
    let dayCount=0;
     
    while (startYeild>=100){
        dayCount++;
        extractedSpice +=startYeild-26;
        startYeild -=10;

    }
console.log(dayCount);
if (dayCount != 0){
    console.log(extractedSpice-26);

}else{
    console.log(extractedSpice);

}
    

}

Dune(111)
Dune(450)