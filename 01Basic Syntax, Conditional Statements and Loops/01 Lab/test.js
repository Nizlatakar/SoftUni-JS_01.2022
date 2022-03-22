function reverse(arr){
    for(let i=0;i<arr.length/2;i++){
        let old = arr[i];
        let previosI= arr.length-1-i;
        arr[i]= arr[previosI] ;
       }
       console.log( arr.join(' '));
}

reverse([1 , 2, 3 ,4,5])