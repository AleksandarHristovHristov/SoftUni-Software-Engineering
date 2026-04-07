function magicSum(array,number){
let validPairs = '';
let arrayOfValidPairs = [];

for (let j = 0; j < array.length; j++) {
    for (let i = j + 1; i < array.length; i++) {
        if (array[i] + array[j] === number) {
            validPairs = `${array[j]} ${array[i]}`;
            arrayOfValidPairs.push(validPairs);
        } 
    }   
}
console.log(arrayOfValidPairs.join('\n'));
}

magicSum([1, 7, 6, 2, 19, 23],8)