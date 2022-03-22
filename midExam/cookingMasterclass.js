function cookingMasterclass(array) {

    let buget =Number(array[0])
    let students =Number(array[1])
    let priceFlour =Number(array[2])
    let priceOneEgg =Number(array[3])
    let apron =Number(array[4])
    let needEggsForOne = priceOneEgg * 10   //90/100
    
    let r=Number(Math.ceil(students*1.2))
    
    let apronPrice =apron*r
    let eggsForAll=needEggsForOne*students
   
   
    let diskount=0
    for(let i=1; i<=students; i++){
    if (i %5===0) {
        diskount++
    } 
    }
    let flour=(priceFlour*students)-(priceFlour*diskount)
    
    let all=apronPrice+eggsForAll+flour
    
    if (buget >= all) {
        console.log(`Items purchased for ${all.toFixed(2)}$.`);
    } else {
      //  let diff =Math.abs(all - buget)
      let diff=Math.abs(buget-all)
        console.log(`${diff.toFixed(2)}$ more needed.`);
    }
}