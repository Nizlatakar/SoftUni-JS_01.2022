function Clac(numb1, operator, numb2) {
    let sum;
    switch (operator) {
        case "+":
            sum = numb1 + numb2;
            console.log(sum.toFixed(2));
            break;
        case "-":
            sum = numb1 - numb2;
            console.log(sum.toFixed(2));
            break;
        case "/":
            sum = numb1 / numb2;
            console.log(sum.toFixed(2));
            break;
        case "*":
            sum = numb1 * numb2;
            console.log(sum.toFixed(2));
            break;
    }
}

Clac(5,    '+',    10)