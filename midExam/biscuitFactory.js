function biscuits(input) {
    let biscuitsPerDay = Number(input[0]);
    let workers = Number(input[1]);
    let itemsCompetition = Number(input[2]);
  
    let sumBiscuits = 0;
  
    for (let index = 1; index <= 30; index++) {
      let currentDayBiscuit = biscuitsPerDay * workers;
      if (index % 3 === 0) {
        currentDayBiscuit = Math.floor(currentDayBiscuit * 0.75);
      }
  
      sumBiscuits += currentDayBiscuit;
    }
  
    console.log(`You have produced ${sumBiscuits} biscuits for the past month.`);
  
    let difference = sumBiscuits - itemsCompetition;
    let percentage = (difference / itemsCompetition) * 100;
  
    if (difference > 0) {
      console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    } else {
      console.log(`You produce ${Math.abs(percentage).toFixed(2)} percent less biscuits.`);
    }
  }

  
  biscuits(["78", "8", "16000"]);
  console.log("---");
  biscuits(["65", "12", "26000"]);
  console.log("---");
  biscuits(["163", "16", "67020"]);