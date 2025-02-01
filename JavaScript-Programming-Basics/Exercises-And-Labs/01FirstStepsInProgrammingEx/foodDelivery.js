function foodDelivery(input){
    const chickenMenuPrice = Number(10.35);
    const fishMenuPrice = Number(12.40);
    const veganMenuPrice = Number(8.15);
    const deliveryPrice = Number(2.50);

    const chickenMenuNumber = Number(input[0]);
    const fishMenuNumber = Number(input[1]);
    const veganMenuNumber = Number(input[2]);

    const summaryBill = Number((chickenMenuNumber * chickenMenuPrice) + 
    (fishMenuNumber * fishMenuPrice) + 
    (veganMenuNumber * veganMenuPrice));
    const desertPrice = summaryBill * 0.20;
    const finalPrice = summaryBill + desertPrice + deliveryPrice;
    console.log(finalPrice);
}

foodDelivery(["2 ","4 ","3 "]);