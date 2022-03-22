function loadingBar(num){
    
    if (num == 100){
        console.log('100% Complete!');
    }else{
        console.log(`${num}% [${fillString(num)}]`);
        console.log(`Still loading...`);
    }
    function fillString(number){
        let bar = '';
        for(i=0;i<10;i++){
            if(i+1 >num/10 ){
                bar+='.';
            }else{
                bar+= '%';
            }
        }
        return bar;
    }
}