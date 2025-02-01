function fishland(input) {
 let priceMackerel = Number(input[0]);
 let priceToy = Number(input[1]);
 let bonitoWeight = Number(input[2]);
 let scadWeight = Number(input[3]);
 let shellWeight = Number(input[4]);
 const shellPrice = Number(7.50);
 let bonitoPrice = Number(priceMackerel + (priceMackerel * 0.6));
 let scadPrice = Number(priceToy + (priceToy * 0.8));
 let totalPrice = Number((bonitoPrice * bonitoWeight) + (scadPrice * scadWeight) + (shellPrice * shellWeight));
 console.log(`${totalPrice.toFixed(2)}`);
}

fishland([6.90,4.20,1.5,2.5,1])