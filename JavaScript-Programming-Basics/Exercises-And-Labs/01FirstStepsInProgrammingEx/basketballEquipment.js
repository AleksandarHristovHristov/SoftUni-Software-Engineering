function basketballEquiptment(input) {
    const annualTaxForTraining = Number(input[0]);
    const priceForShoes = Number(annualTaxForTraining - (annualTaxForTraining*0.4));
    const priceForTracksuit = Number(priceForShoes - (priceForShoes* 0.20));
    const priceForBall = Number(priceForTracksuit * 0.25);
    const priceForAccesories = Number(priceForBall * 0.20);
    const totalPrice = annualTaxForTraining + priceForShoes + priceForBall + priceForTracksuit + priceForAccesories;
    console.log(totalPrice);

}

basketballEquiptment(["365"]);