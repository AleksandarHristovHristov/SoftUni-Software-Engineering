function cinema(input){
    const premierePrice = 12;
    const normalPrice = 7.50;
    const discountPrice = 5;

    const projection = input[0];
    const rows = input[1];
    const cols = input[2];
    let finalPrice = 0;
    switch (projection) {
        case "Premiere":
            finalPrice = rows * cols * premierePrice;
            console.log(`${finalPrice.toFixed(2)} leva`);
            break;
        case "Normal":
            finalPrice = rows * cols * normalPrice;
            console.log(`${finalPrice.toFixed(2)} leva`);
            break;
        case "Discount":
            finalPrice = rows * cols * discountPrice;
            console.log(`${finalPrice.toFixed(2)} leva`);
            break;
    }
}
cinema(["Premiere",
"10",
"12"])
