function equalArrays(firstArr,secondArr){
let sum = 0;
let differenceCounter = 0;
for (let i = 0; i < firstArr.length; i++) {
    firstArr[i] = Number(firstArr[i]);
}
for (let i = 0; i < secondArr.length; i++) {
    secondArr[i] = Number(secondArr[i]);
}

for (let i = 0;i < firstArr.length ; i++) {
    sum += firstArr[i];
    if (firstArr[i] !== secondArr[i]) {
        console.log(`Arrays are not identical. Found difference at ${i} index`);
        differenceCounter++;
        break;
    }
   
    
}
if (differenceCounter === 0) {
    console.log(`Arrays are identical. Sum: ${sum}`);
}
}
equalArrays(['1','2','3','4','5'],

['1','2','3','4','5']);