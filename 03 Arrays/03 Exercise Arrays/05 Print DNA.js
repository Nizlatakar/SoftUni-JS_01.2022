function solve(num) {
    const sequence = 'ATCGTTAGGG';
    let charIndex = 0;
    for (let i = 0; i < num; i++) {
        let res = ``;
        if (i % 4 == 0) {
            console.log(`**${currentCharToPlace()}${currentCharToPlace()}**`);
        } else if ((i + 1) % 2 == 0) {
            console.log(`*${currentCharToPlace()}--${currentCharToPlace()}*`);
        } else if (i % 2 == 0) {
            console.log(`${currentCharToPlace()}----${currentCharToPlace()}`);
        }

    }

    function currentCharToPlace() {
        if (charIndex > sequence.length - 1) {
            charIndex = 0;
            return sequence[charIndex++];
        } else {
            return sequence[charIndex++];
        }  
    }
}