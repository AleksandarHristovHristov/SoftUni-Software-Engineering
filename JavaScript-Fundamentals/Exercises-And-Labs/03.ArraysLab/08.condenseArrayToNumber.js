function condenseArrayToNumber(numbers){
    let tempArr = [];
 while (numbers.length > 1) {
     for (let i = 0; i < numbers.length ; i++) {
         tempArr[i] = numbers[i] + numbers[i + 1];
     }
     numbers = tempArr;
     numbers.length--;
 }
console.log(numbers.join());
}

condenseArrayToNumber([5,0,4,1,2]);
condenseArrayToNumber([2,10,3]);