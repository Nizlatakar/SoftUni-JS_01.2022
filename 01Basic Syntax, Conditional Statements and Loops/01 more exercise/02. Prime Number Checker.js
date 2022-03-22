function numbCheck(num) {

    let check = true;

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i == 0) {
            check = false;
            break;
        }
    }
    if (check) {
        console.log(true);
    } else {
        console.log(false);
    }
}
numbCheck(7);
numbCheck(8);
numbCheck(81);
numbCheck(6);