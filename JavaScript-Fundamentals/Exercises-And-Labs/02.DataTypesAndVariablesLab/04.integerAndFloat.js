function integerAndFloat(numA,numB,numC) {
 let sum = numA + numB + numC;
 let sumString = String(sum);
 let isFloat = false;
 for (let i = 0; i < sumString.length; i++) {
     if (sumString[i] === ".") {
      isFloat = true;
     }
 }
 if (isFloat) {
     console.log(`${sum} - Float`);
 } else {
     console.log(`${sum} - Integer`);
 }
}
integerAndFloat(9, 100, 1.1 )