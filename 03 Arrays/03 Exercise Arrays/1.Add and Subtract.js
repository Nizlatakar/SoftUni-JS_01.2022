function addAndSubstract(array) {
    let myArr = array;
    let sumOfOriginalArray = 0;
    let modifiedArraySum = 0;
    for (let index = 0; index < array.length; index++) {
        sumOfOriginalArray += myArr[index];
        if (myArr[index] % 2 === 0) {
            myArr[index] += index;
        } else {
            myArr[index] -= index;
        }
        modifiedArraySum += myArr[index];
    }
    console.log(myArr);
    console.log(sumOfOriginalArray);
    console.log(modifiedArraySum);
}
addAndSubstract([5, 15, 23, 56, 35]);
addAndSubstract([-5, 11, 3, 0, 2]);
