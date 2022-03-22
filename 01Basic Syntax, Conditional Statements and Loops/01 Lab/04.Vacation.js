function vacation(peopleCount,groupType,day){
    let studentsFridayprice = 8.45 ;
    let businessFridayprice = 10.9 ;
    let regularFridayprice = 15 ;
    let studentsSaturdayprice = 9.8 ;
    let businessSaturdayprice = 15.6 ;
    let regularSaturdayprice = 20 ;
    let studentsSundayprice = 10.46 ;
    let businessSundayprice = 16 ;
    let regularSundayprice = 22.5 ;

    let studentsDiscountPercentage = 15 ;
    let businessDiscountPeopleCount = 10 ;
    let regularDiscountPercentage = 5 ;

    let TotalPrice=0;

    if  (groupType ==='Students' && day ==='Friday'){
        TotalPrice+=peopleCount*studentsFridayprice;
    } else if  (groupType ==='Students' && day ==='Saturday'){
        TotalPrice+=peopleCount*studentsSaturdayprice;
    } else if  (groupType ==='Students' && day ==='Sunday'){
        TotalPrice+=peopleCount*studentsSundayprice;
    } else if  (groupType ==='Regular' && day ==='Friday'){
        TotalPrice+=peopleCount*regularFridayprice;
    } else if  (groupType ==='Regular' && day ==='Saturday'){
        TotalPrice+=peopleCount*regularSaturdayprice;
    } else if  (groupType ==='Regular' && day ==='Sunday'){
        TotalPrice+=peopleCount*regularSundayprice;
    } else if  (groupType ==='Business' && day ==='Friday'){
        TotalPrice+=peopleCount*businessFridayprice;
    } else if  (groupType ==='Business' && day ==='Saturday'){
        TotalPrice+=peopleCount*businessSaturdayprice;
    } else if  (groupType ==='Business' && day ==='Sunday'){
        TotalPrice+=peopleCount*businessSundayprice;
    }
    if  (groupType ==='Students' && peopleCount >= 30){
        TotalPrice-= (studentsDiscountPercentage/100) * TotalPrice;
    } else if  (groupType ==='Regular' && peopleCount >= 10 && peopleCount <= 20){
        TotalPrice-= (regularDiscountPercentage/100) * TotalPrice;
    }else if  (groupType ==='Business' && peopleCount >= 100 ){
        TotalPrice-= (businessDiscountPeopleCount/100) * TotalPrice;
    }
    
    console.log(`Total price: ${TotalPrice.toFixed(2)} `)

}

vacation(30,    "Students",    "Sunday")
vacation(40,    "Regular",    "Saturday")
