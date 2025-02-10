function spiceMustFlow(startedYield){
    let workDaysCounter = 0;
    let totalAmount = 0;

    while(startedYield >= 100){
        workDaysCounter++;
        totalAmount += startedYield - 26;
       
        startedYield -= 10;
    }
    console.log(workDaysCounter);

    if (workDaysCounter !== 0) {
        console.log(totalAmount-26);
    }
    else {
        console.log(totalAmount);
    }
}
spiceMustFlow(111)