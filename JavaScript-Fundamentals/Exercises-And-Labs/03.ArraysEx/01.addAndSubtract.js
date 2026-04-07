function addAndSubtract(numbers){
    let newArray = [];
    let originalSum = 0;
    let newArraySum = 0;
    for (let el of numbers) {
        newArray.push(el);
        originalSum += el;
    }
    
for (let i = 0; i < newArray.length; i++) {
    
    if (newArray[i] % 2 === 0) {
        newArray[i] += i;
        
    } else {
        newArray[i] -= i;
    }
    newArraySum += newArray[i];    
}
console.log(newArray);
console.log(originalSum);
console.log(newArraySum);
}
addAndSubtract([5, 15, 23, 56, 35])
addAndSubtract([-5, 11, 3, 0, 2] )