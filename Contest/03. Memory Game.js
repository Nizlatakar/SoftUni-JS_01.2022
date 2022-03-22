function memoryGame(arr) {
    let sequenseArray = arr[0].split(' ');
    let curStep = [];
    let steps = 0;
    let losegame = true;
    let sequenseArrayCopie = sequenseArray.slice();
    let curValue = '';


    for (let index = 1; index < arr.length; index++) {
        if (arr[index] == "end") {
            break;
        }
        steps++;
        curStep = arr[index].split(' ').map(Number);
        if(isNaN(curStep[0]) || isNaN(curStep[1]) ){
            console.log(`Invalid input! Adding additional elements to the board`);
            sequenseArrayCopie.splice(sequenseArrayCopie.length / 2, 0, `-${steps}a`);
            sequenseArrayCopie.splice(sequenseArrayCopie.length / 2, 0, `-${steps}a`);
        }else if (curStep[0] == curStep[1] || (curStep[0] < 0 || curStep[0] >= sequenseArrayCopie.length) || (curStep[1] < 0 || curStep[1] >= sequenseArrayCopie.length)) {
            console.log(`Invalid input! Adding additional elements to the board`);
            sequenseArrayCopie.splice(sequenseArrayCopie.length / 2, 0, `-${steps}a`);
            sequenseArrayCopie.splice(sequenseArrayCopie.length / 2, 0, `-${steps}a`);

        } else if (sequenseArrayCopie[curStep[0]] == sequenseArrayCopie[curStep[1]]) {
            console.log(`Congrats! You have found matching elements - ${sequenseArrayCopie[curStep[0]]}!`);
            if (curStep[0] > curStep[1]) {
                sequenseArrayCopie.splice(curStep[0], 1);
                sequenseArrayCopie.splice(curStep[1], 1);
            } else {
                sequenseArrayCopie.splice(curStep[1], 1);
                sequenseArrayCopie.splice(curStep[0], 1);
            }

            if (sequenseArrayCopie.length == 0) {
                console.log(`You have won in ${steps} turns!`);
                losegame = false;
                break;
            }
        } else {
            console.log(`Try again!`);
        }

    }
    if (losegame) {
        console.log(`Sorry you lose :(`);
        console.log(sequenseArrayCopie.join(' '));
    }

}