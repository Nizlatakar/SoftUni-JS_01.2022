// function day (inputYear,inputMonth,inputDay){
// let year = Number(inputYear);
// let month = Number(inputMonth)-1;
// let day = Number(inputDay);


// let date = new Date(year,month,day)
// let nextDate=new Date(date);
// nextDate.setDate(date.getDate()+1);
// let outputYear = nextDate.getFullYear();
// let outputMonth = nextDate.getMonth()+1;
// let outputDay = nextDate.getDate();
// console.log(`${outputYear}-${outputMonth}-${outputMonth}`)

function day (year,month,day){

let nextDate = new Date(year,month-1,day+1);
let newYear=nextDate.getFullYear();
let newMonth = nextDate.getMonth()+1;
let newDay = nextDate.getDate();

console.log(`${newYear}-${newMonth}-${newDay}`)

}

day(2016,9,30)
day(2020,3,24)