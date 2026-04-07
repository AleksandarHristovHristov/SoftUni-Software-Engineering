function maxNumber(numbers){
let result = [];

for (let i = 0; i < numbers.length; i++) {
    let curNum = numbers[i];
    let isTop = true;
    for (let j = i + 1; j < numbers.length; j++) {
        let rightNum = numbers[j];
        
         if (curNum <= rightNum) {
            isTop = false;
             break;
         }
    }
        if (isTop) {
            result.push(curNum);
     }   
}
console.log(result.join(' '));
}

maxNumber([1, 4, 3, 2] ); // 4 3 2