function round(num,decim){
    num=Number(num);
    decim=Number(decim);
    if  (decim>15){
        decim=15;
    } 
    num=num.toFixed(decim);
    console.log(parseFloat(num));
    

}

round(3.1415926535897932384626433832795,2)
round(10.5,3)