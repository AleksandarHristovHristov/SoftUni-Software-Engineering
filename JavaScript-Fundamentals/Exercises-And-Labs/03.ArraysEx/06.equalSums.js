function equalSums(numbers){
let foundIndex = 'no';    
 
for (let i = 0; i < numbers.length; i++) {
    let leftSum = 0;
    let rightSum = 0;   
   for (let l = 0; l < i; l++) {
       leftSum += numbers[l];
   }
   for (let r = i + 1; r < numbers.length; r++) {
       rightSum += numbers[r];
       
   }
   if (rightSum === leftSum) {
        foundIndex = i;
   }
    
}
console.log(foundIndex);
}
equalSums([1,2,3,3])