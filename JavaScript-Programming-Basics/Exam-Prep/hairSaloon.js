function hairSaloon(input){
    let index = 0;
    const targetMoney = Number(input[index]);
    index++;
    let command = "";
    let moneyEarned = 0;
    let serviceType = "";
    let moneyNeeded = 0;

    while(command !== "closed"){
      command = input[index];
      index++;
      serviceType = input[index];
      index++;
     if (command === "haircut") {
         if (serviceType === "mens") {
             moneyEarned += 15;    
         } else if(serviceType === "ladies") {
            moneyEarned += 20;
         } else if(serviceType === "kids"){
            moneyEarned += 10; 
         }
     } else if(command === "color"){
         if (serviceType === "touch up") {
            moneyEarned += 20; 
         } else if(serviceType === "full color") {
            moneyEarned += 30; 
         }

     }
      if (moneyEarned >= targetMoney) {
          break;
      } 
      
    }
    if (moneyEarned >= targetMoney) {
        console.log(`You have reached your target for the day!`);
        console.log(`Earned money: ${moneyEarned}lv.`);

    } else {
        moneyNeeded = Math.abs(targetMoney - moneyEarned);
        console.log(`Target not reached! You need ${moneyNeeded}lv. more.`);
        console.log(`Earned money: ${moneyEarned}lv.`);
    }
}

hairSaloon(["300"
    ,"haircut"
    ,"ladies"
    ,"haircut"
    ,"kids"
    ,"color"
    ,"touch up"
    ,"closed"
    ]);