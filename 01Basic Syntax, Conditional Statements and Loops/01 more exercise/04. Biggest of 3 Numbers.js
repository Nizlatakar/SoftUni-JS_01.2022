function numberCheck(a, b, c) {
    if (a > b) {
        if (a > c) {
            console.log(a);
        } else {
            console.log(c);
        }
    }

    else {
        if (b > c) {
            console.log(b);
        } else {
            console.log(c);
        }
    }
}

numberCheck(-2,    7,    3);
numberCheck(130,    5,    99);
numberCheck(43,    43.2,    43.1);
numberCheck(2,    2,    2);