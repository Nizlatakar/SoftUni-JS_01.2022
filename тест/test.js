function sum(arr1, rotations) {
    
    for (let index = 0; index < rotations.length; index++) {
    let newArr=arr1.shift()
      arr1.push(newArr)
    }

    console.log(arr1.join(' '));
}

sum([51, 47, 32, 61, 21], 2);
