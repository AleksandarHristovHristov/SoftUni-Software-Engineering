function toyShop(input){

    // •	Пъзел - 2.60 лв.
    const puzzlePrice = 2.6;
    // •	Говореща кукла - 3 лв.
    const talkingDollPrice = 3;
    // •	Плюшено мече - 4.10 лв.
    const teddyBearPrice = 4.1;
    // •	Миньон - 8.20 лв.
    const minionPrice = 8.2;
    // •	Камионче - 2 лв.
    const truckPrice = 2;

//     1.	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
    const holidayPrice = Number(input[0]);
// 2.	Брой пъзели - цяло число в интервала [0… 1000]
    const puzzlesCount = Number(input[1]);
// 3.	Брой говорещи кукли - цяло число в интервала [0 … 1000]
    const talkingDollsCount = Number(input[2]);
// 4.	Брой плюшени мечета - цяло число в интервала [0 … 1000]
    const teddyBearsCount = Number(input[3]);
// 5.	Брой миньони - цяло число в интервала [0 … 1000]
    const minionsCount = Number(input[4]);
// 6.	Брой камиончета - цяло число в интервала [0 … 1000]
    const trucksCount = Number(input[5]);
    const toysCount = Number(puzzlesCount + talkingDollsCount + teddyBearsCount + minionsCount + trucksCount);
    let totalPriceWithoutDiscount = Number((puzzlePrice * puzzlesCount) + (talkingDollPrice*talkingDollsCount)
     + (teddyBearPrice * teddyBearsCount) + (minionPrice * minionsCount) + (truckPrice * trucksCount));
    let rentPrice = 0;
    let budget = 0;
     if (toysCount >= 50) {
         let totalPriceWithDiscount = Number(totalPriceWithoutDiscount - (totalPriceWithoutDiscount * 0.25));
         rentPrice = totalPriceWithDiscount * 0.1;
         budget = totalPriceWithDiscount - rentPrice;
     } else {
         totalPriceWithDiscount = totalPriceWithoutDiscount;
         rentPrice = totalPriceWithDiscount * 0.1;
         budget = totalPriceWithDiscount - rentPrice;
     }

    if (budget >= holidayPrice) {
        console.log(`Yes! ${(budget - holidayPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(holidayPrice - budget).toFixed(2)} lv needed.`);
    }
}