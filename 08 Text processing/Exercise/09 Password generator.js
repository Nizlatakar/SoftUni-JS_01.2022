function passwordGenerator(arr) {
    let concatenated = (arr[0] + arr[1]).split('');
    let word = arr[2].toUpperCase();
    let vowels = ['a','e','u','i','o'];
    let index = 0;
    for (let i = 0; i < concatenated.length; i++) {
        if (vowels.includes(concatenated[i])) {
            concatenated[i] = word[index]; 
            index++;
        }
        if (index == word.length) {
            index = 0;
        }
    }
    console.log(`Your generated password is ${concatenated.reverse('').join('')}`);
}