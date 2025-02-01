function cleverLilly(input){
    const lillysAge = Number(input[0]);
    const washingMashinePrice = Number(input[1]);
    const toyPrice  = Number(input[2]);
    let tempMoney = 10;
    let money = 0;
    let toyCounter = 0;
    for (let i = 1; i <= lillysAge; i++) {
       
        if (i % 2 === 0) {
          money += tempMoney;
          tempMoney += 10; 
          money -= 1;
        } else {
            toyCounter++;
        }
        
    }
    money += toyCounter * toyPrice;
    let leftMoney = 0;
    let requiredMoney = 0;
    if (money >= washingMashinePrice) {
        leftMoney = money - washingMashinePrice
        console.log(`Yes! ${leftMoney.toFixed(2)}`);
    } else {
        requiredMoney = Math.abs(washingMashinePrice - money);
        console.log(`No! ${requiredMoney.toFixed(2)}`);
    }

}
cleverLilly(["10",
"170.00",
"6"])
