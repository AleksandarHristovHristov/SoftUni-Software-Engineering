function evenAndOddSubraction(numbers){

let evenSum = 0;
let oddSum = 0;

for (let num  of numbers) {
    if (num % 2 === 0) {
        evenSum += num;
    } else {
        oddSum += num; 
    }
}
let difference = evenSum - oddSum;
console.log(difference);
}

evenAndOddSubraction([1,2,3,4,5,6]);