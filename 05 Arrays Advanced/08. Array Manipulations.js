function arrayManipulate(input) {
    let numbers = input.shift().split(" ").map(Number);

    for (let i = 0; i < input.length; i++) {
        let [commmand, firstNum, secondNum] = input[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);


        switch (commmand) {
            case "Add":
                add(firstNum);
                break;
            case "Remove":
                remove(firstNum);
                break;
            case "RemoveAt":
                removeAt(firstNum);
                break;
            case "Insert":
                insert(firstNum,secondNum);
                break;

        }
        function add(el) { numbers.push(el); }
        function remove(num) { numbers = numbers.filter(el => el !== num); }
        function removeAt(index) { numbers.splice(index, 1); }
        function insert(num, index) { numbers.splice(index, 0, num); }
    }


    console.log(numbers.join(" "));



}


arrayManipulate(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])
arrayManipulate(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'])



