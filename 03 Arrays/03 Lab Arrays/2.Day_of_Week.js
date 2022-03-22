function weekday(dayAsNumber){
    let day = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let index = dayAsNumber -1;
    if (index >= 0 && index < 7){
        console.log(day[index]);
    }else{
        console.log("Invalid day!");
    }
}
weekday(1);
weekday(3);
weekday(7);
weekday(11);