function reverse(n,arr) {
    let slice = [];
    for (let index = 0; index < n; index++) {
        slice.push(arr[index]);
         
    }
    let result = " ";
    for (let index = slice.length -1; index >= 0; index--) {
        result +=slice[index];
        result +=" ";
        
    }
    console.log(result);
}

reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);
reverse(2, [66, 43, 75, 89, 47]);