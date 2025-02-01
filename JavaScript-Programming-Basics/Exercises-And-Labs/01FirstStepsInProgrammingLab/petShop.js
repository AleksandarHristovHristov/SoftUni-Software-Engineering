function petShop(input) {
    let numOfPacksForDogFood = Number(input[0]);
    let numOfPacksForCatFood = Number(input[1]);
    let priceForDogFood = numOfPacksForDogFood * 2.50;
    let priceForCatFood = numOfPacksForCatFood * 4;
    let result = priceForCatFood + priceForDogFood;
    console.log(`${result} lv.`);
}
 