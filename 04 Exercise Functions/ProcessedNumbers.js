function printProcessedNumbers(numOne, numTwo, operator) {
    let sign = operator;
    sign = sign.replace("multiply", "*");
    sign = sign.replace("add", "+");
    sign = sign.replace("divide", "/");
    sign = sign.replace("subtract", "-");
    console.log(eval(numOne + sign + numTwo));
}
printProcessedNumbers(5, 6, 'subtract')