function mergedArray(array1, array2) {
    let array3 = [];
    for (let index = 0; index < array1.length; index++) {
        if (index % 2 === 0) {
            array3.push(Number(array1[index]) + Number(array2[index]));
        } else {
            array3.push(`${array1[index]}${array2[index]}`);
        }
    }
    console.log(array3.join(" - "));
}
mergedArray(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);
mergedArray(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
)