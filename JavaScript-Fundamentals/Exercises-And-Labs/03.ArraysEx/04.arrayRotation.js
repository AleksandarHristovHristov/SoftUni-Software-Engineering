function arrayRotation(numbers,numberOfRotations){

   while (numberOfRotations > 0) {
    let elementToMove = numbers.shift();
    numbers.push(elementToMove);   
    numberOfRotations--;
   }
   console.log(numbers.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2 ) // 32 61 21 51 47 
arrayRotation([32, 21, 61, 1], 4 ) // 32 21 61 1 
arrayRotation([2, 4, 15,13],5 ) // 4 15 31 2 