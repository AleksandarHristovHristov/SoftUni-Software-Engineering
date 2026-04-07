function reverseInPlace(arrayOfStrings){

    for (let i = 0; i < arrayOfStrings.length / 2; i++) {
        let rightElement = arrayOfStrings[i];
        let leftElement = arrayOfStrings.length - 1 - i;
        arrayOfStrings[i] = arrayOfStrings[leftElement];
        arrayOfStrings[leftElement] = rightElement;
        
    }
    
    console.log(arrayOfStrings.join(' '));
    
    
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']); // e d c b a
reverseInPlace['abc', 'def', 'hig','klm', 'nop'] 