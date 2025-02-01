function housePainting(input) {
let x = Number(input[0]);
let y = Number(input[1]);
let h = Number(input[2]);
let entranceDoorArea = Number(1.2 * 2.0);
let fronDoorArea = Number((x * x) - entranceDoorArea);
let backDoorArea = Number(x * x);
let windowArea = Number(1.5 * 1.5);
let sidesWallArea = Number(((x * y) - windowArea) * 2);
let totalAreaForGreenPainting = Number(fronDoorArea + backDoorArea + sidesWallArea );
let greenPaintNeeded = Number(totalAreaForGreenPainting / 3.4);
let roofRectangleArea = Number((x * y) * 2);
let roofTriangleArea = Number(((x * h) / 2 ) * 2);
let totalAreaForRedPainting = Number(roofRectangleArea + roofTriangleArea );
let redPaintNeeded = Number(totalAreaForRedPainting / 4.3);
console.log(`${greenPaintNeeded.toFixed(2)}`);
console.log(`${redPaintNeeded.toFixed(2)}`);

}
housePainting([6,10,5.2]);