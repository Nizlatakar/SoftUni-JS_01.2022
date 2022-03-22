function blackFlag(arr) {

    let odd = 0;
    let even = 0;
    for (let index = 0; index < arr.length; index++) {
        if (index % 2 === 0) {
            even += index;
        }
    for (let index = 0; index < arr.length; index++) {
        if (index % 2 ===1)
            odd += index;
    }

    }
    console.log(odd);
    console.log(even);
    console.log(odd);


}

blackFlag([1, 2, 3, 4, 5, 6,]);

