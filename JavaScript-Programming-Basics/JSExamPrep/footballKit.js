function footballkit(input){
    const tshirtPrice = Number(input[0]);
    const moneyNeededForWinBall = Number(input[1]);
    const shortPrice = tshirtPrice * 0.75;
    
    const socksPrice = shortPrice * 0.20;
    
    const bootsPrice = (tshirtPrice + shortPrice) * 2.00;
   

    let finalPrice = bootsPrice + socksPrice + tshirtPrice +  shortPrice;
    finalPrice = finalPrice - (finalPrice * 0.15);
    
    if (finalPrice >= moneyNeededForWinBall) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${finalPrice.toFixed(2)} lv.`)
    } else {
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${Math.abs(moneyNeededForWinBall - finalPrice).toFixed(2)} lv. more.`)
    }

}
footballkit([25
    ,100
    ])