function sumOfTwoNumbers(input){
    let index = 0;
    const startRange = Number(input[index]);
    index++;
    const endRange = Number(input[index]);
    index++;
    const magicNumber = Number(input[index]);
    let sum = 0;
    let counter = 0;
    let combinationCounter = 0;
    let isFound = false;
    for (let  i = startRange ; i <= endRange; i++) {
       for (let k =startRange; k <= endRange; k++) {
           sum = i + k;
           combinationCounter++;
           if (sum === magicNumber) {
            counter++;
            console.log(`Combination N:${combinationCounter} (${i} + ${k} = ${magicNumber})`);
            isFound = true;
            break;
           }
       }
       if(isFound){
           break;
       }
    }
    if (counter === 0) {
        console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`); 
    }
}
sumOfTwoNumbers(["88",
"888",
"1000"])










