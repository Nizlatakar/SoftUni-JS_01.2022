function oddNumbers(arr){
   let filtered = arr.filter((x,i)=> i%2 ==1);
   let doubled  = filtered.map(x => x*2);
   let result = doubled.reverse();
   console.log(result.join(' '));

}
function oddNumbers(arr){
console.log(
    arr
    .filter((x,i)=> i%2 ==1)
    .map(x => x*2).reverse()
    .join(' '));
}
arrayInput => arrayInput
    .filter((x,i)=> i%2 ==1)
    .map(x => x*2).reverse()
    .join(' ')