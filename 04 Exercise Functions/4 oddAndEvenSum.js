function oddAndEvenSum(number) {
    let numbersAsText = number.toString();
    function totalOddSum(numAsString) {
        let oddSum = 0;
        for (let index = 0; index < numAsString.length; index++) {
            let curNum = Number(numAsString[index]);
            if (curNum % 2 !== 0) {
                oddSum += curNum;
            }
        }
        return oddSum;
    }
    function totalEvanSum(numAsString) {
        let evanSum = 0;
        for (let index = 0; index < numAsString.length; index++) {
            let curNum = Number(numAsString[index]);
            if (curNum % 2 === 0) {
                evanSum += curNum;
            }
        }
        return evanSum;
    }
    console.log(`Odd sum = ${totalOddSum(numbersAsText)}, Even sum = ${totalEvanSum(numbersAsText)}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);