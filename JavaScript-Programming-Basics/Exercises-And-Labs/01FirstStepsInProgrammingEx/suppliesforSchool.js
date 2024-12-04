function suppliesForSchool(input) {
    const penPrice = Number(5.80);
    const markerPrice = Number(7.20);
    const detergentPrice = Number(1.20);

    const penPacks = Number(input[0]);
    const markerPacks = Number(input[1]);
    const litresDetergent = Number(input[2]);
    const discount = Number(input[3]);

    const markersPrice = markerPrice * markerPacks;
    const pensPrice = penPrice * penPacks;
    const degetergentsPrice = detergentPrice * litresDetergent;
    const priceWithouthDiscount = markersPrice + pensPrice + degetergentsPrice;
    const priceDiscount = discount / 100;
    const priceWithDiscount = priceWithouthDiscount * priceDiscount;
    const finalPrice = priceWithouthDiscount - priceWithDiscount;
    console.log(finalPrice);

}

suppliesForSchool(["2 ","3 ","4 ","25 "]);
