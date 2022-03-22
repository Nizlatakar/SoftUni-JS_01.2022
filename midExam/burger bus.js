function softuni(input) {
  let citys=input.shift()
  let totalmoneymade=0;
  let counter=0;
  for(let index=0;index<citys;index++){
        counter++;
        let currtown=input.splice(index[0],3)
        let income=currtown[1];
        let expense=currtown[2];
        let profits=0;
        if(counter%3==0&& counter%5!=0){
            expense = expense*1.5;
        }
        if(counter%5==0){
          income = income - income/10
        }
            profits+=income-expense
          totalmoneymade+=income-expense
        console.log(`In ${currtown[0]} Burger Bus earned ${profits.toFixed(2)} leva.`)
  }
  console.log(`Burger Bus total profit: ${totalmoneymade.toFixed(2)} leva.`)

}