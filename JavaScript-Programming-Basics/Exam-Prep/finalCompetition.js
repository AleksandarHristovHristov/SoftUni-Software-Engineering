function finalCompetition(input){
//     1.	Брой танцьори – цяло число в интервала [1 … 10]
// 2.	Брой точки – реално число в интервала [1.00 … 10000.00]
// 3.	Сезон –  текст със следните възможности - "summer" или "winter"
// 4.	Място – текст със следните възможности - "Bulgaria" или "Abroad"

 const numOfDancers = Number(input[0]);
 const points = Number(input[1]);
 const season = input[2];
 const place = input[3];
 let moneyNeeded = 0;
 let moneyCharity = 0;
 let moneyForDancers = 0;   
 if (place === "Bulgaria") {
    moneyNeeded = numOfDancers * points;
    if (season === "winter") {
        moneyNeeded = moneyNeeded - (moneyNeeded * 0.08);

    } else {
       moneyNeeded = moneyNeeded - (moneyNeeded * 0.05); 
    } 
 }
 else {
        moneyNeeded = numOfDancers * points;
      moneyNeeded = moneyNeeded + (moneyNeeded * 0.5);
     if (season === "winter") {
        moneyNeeded = moneyNeeded - (moneyNeeded * 0.15);
     } else {
        moneyNeeded = moneyNeeded - (moneyNeeded * 0.1); 
     }  
 }
 moneyCharity =  (moneyNeeded *  0.75);
 
 moneyForDancers = moneyNeeded - moneyCharity;
 moneyForDancers = moneyForDancers / numOfDancers;
 console.log(`Charity - ${moneyCharity.toFixed(2)}`);
 console.log(`Money per dancer - ${moneyForDancers.toFixed(2)}`);
}

finalCompetition([1
    ,89.5
    ,"summer"
    ,"Abroad"
    ])