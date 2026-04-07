function mergeArrays(firstArray,secondArray){
let result = [];
for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
         if(i % 2 === 0 ){
            result[i] = Number(firstArray[i]) + Number(secondArray[i]); // Sum As a number
         } else {
             result[i] = firstArray[i] + secondArray[i]; // Sum As a string         
            }
    }
    
}
    console.log(result.join(" - "));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'] ) // 22 - 1522 - 110 - 5636 - 46 