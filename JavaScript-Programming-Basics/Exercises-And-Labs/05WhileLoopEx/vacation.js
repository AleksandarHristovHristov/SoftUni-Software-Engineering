function vacation(input){
    // (["2000","1000","spend","1200","save","2000"])
 let index = 2;
 let vacationPrice = Number(input[0]);
 let currentMoney = Number(input[1]);
 let daysCounter = 0;
 let command = "";
 let money = 0;
 let daysSpentCounter = 0;

 while(currentMoney < vacationPrice){
     daysCounter++;
     command = input[index];
     index++;
     money = Number(input[index]);
     index++;
     switch (command) {
         case "spend":
             daysSpentCounter++;
             currentMoney -= money;
             if (currentMoney < 0) {
                 currentMoney = 0;
             }
             break;
         case "save":
             currentMoney += money;
             daysSpentCounter = 0;
             break;
     }
     if (daysSpentCounter === 5) {
         console.log("You can't save the money.");
         console.log(`${daysCounter}`);
         break;
     }

 }
  if (currentMoney >= vacationPrice) {
      console.log(`You saved the money for ${daysCounter} days.`);
      
  }
}
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
