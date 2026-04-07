function reverseAnArrayOfNumbers(number,arrOfNumbers){
    let reversedArr = [];
    for (let index = 0; index < number; index++) {
        reversedArr.unshift(arrOfNumbers[index]);
        
    }
    console.log(reversedArr.join(' '));
    
}
reverseAnArrayOfNumbers(4, [10, 20, 30, 40, 50]);