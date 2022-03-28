function solve(input,searched) {
    let conter =0
while(input.includes(searched)){
input=input.replace(searched,"@".repeat(searched.length))
 
}
console.log(input); 
}



solve("this is simpl text to show is this  for is this","is")
