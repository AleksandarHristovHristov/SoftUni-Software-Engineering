function godzillaVsKong(input) {
//     1.	Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
const budget = Number(input[0]);
// 2.	Брой на статистите – цяло число в интервала [1 … 500]
const numberOfPeopleNeeded = Number(input[1]);
// 3.	Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]
const dressingPricePerPerson = Number(input[2]);

const decorationPrice = Number(budget * 0.1);

let dressingPrice = Number(numberOfPeopleNeeded * dressingPricePerPerson);

if (numberOfPeopleNeeded  > 150) {
    dressingPrice = dressingPrice - (dressingPrice * 0.1);
} else {
    dressingPrice = dressingPrice;
}
const totalSpendings = Number(dressingPrice + decorationPrice);
 if (budget >= totalSpendings) {
     const leftMoney = Number(budget - totalSpendings);
     console.log("Action!");
     console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`);
 } else  {
     const moneyNeeded = Number(totalSpendings - budget);
     console.log("Not enough money!");
     console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
     
 }

}