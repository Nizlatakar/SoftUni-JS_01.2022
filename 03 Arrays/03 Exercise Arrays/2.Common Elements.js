function commonElements(array1, array2) {
    for (let index = 0; index < array1.length; index++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[index] === array2[j]){
                console.log(array1[index]);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);