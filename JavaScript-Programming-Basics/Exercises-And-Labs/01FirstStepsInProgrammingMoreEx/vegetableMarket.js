function vegetableMarket(input) {
    let priceVegetables = Number(input[0]);
    let priceFruits = Number(input[1]);
    let vegetablesWeight = Number(input[2]);
    let fruitsWeight = Number(input[3]);

    let priceVegetablesLev = Number(priceVegetables * vegetablesWeight);
    let priceFruitsLev = Number(priceFruits * fruitsWeight);
    let totalPriceLev = Number(priceFruitsLev + priceVegetablesLev);
    totalPriceLev = totalPriceLev  / 1.94 ;
    console.log(`${totalPriceLev.toFixed(2)}`);

}
vegetableMarket(["0.194","19.4","10","10"]);
    