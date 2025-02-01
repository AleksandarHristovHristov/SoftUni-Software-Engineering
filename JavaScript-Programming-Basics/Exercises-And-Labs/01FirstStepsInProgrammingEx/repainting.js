function repainting(input) {
    const safeNylonPrice = Number(1.50);
    const paintPricePerLiter = Number(14.50);
    const paintMixPricePerLiter = Number(5.00);
    const priceForBags = Number(0.40);

    const neededSafeNylon = Number(input[0]);
    const neededPaintInLiters = Number(input[1]);
    const neededPaintMixInLiters = Number(input[2]);
    const hoursNeededToFinishPainting = Number(input[3]);
   
    const neededSafeNylonFinal = Number(neededSafeNylon + 2);
    const neededPaintInLitersFinal = Number(neededPaintInLiters + (neededPaintInLiters * 0.10));
    
    const priceNeededForMaterials = Number(priceForBags + (neededSafeNylonFinal * safeNylonPrice) + 
    (neededPaintInLitersFinal * paintPricePerLiter) + 
    (neededPaintMixInLiters *paintMixPricePerLiter))
    const priceForWork = Number(hoursNeededToFinishPainting * (priceNeededForMaterials * 0.30));
    const finalPrice = priceNeededForMaterials + priceForWork;
    console.log(finalPrice);

}

repainting(["10 ","11 ","4 ","8 "]);
