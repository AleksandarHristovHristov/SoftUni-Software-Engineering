function maxSequence(numbers) {
    let maxSequence = [];
    for (let i = 0; i < numbers.length; i++) {
        let currentSequence = [];

        for (let j = i; j < numbers.length; j++) {
                if (numbers[i] === numbers[j]) {
                    currentSequence.push(numbers[j]);
                }
                else {
                    break;
                }           
            
        }
        if (currentSequence.length > maxSequence.length) {
            maxSequence = currentSequence.slice(0);
        }
        
    }
    console.log(maxSequence.join(' '));

}

maxSequence([1,1,2,2,3,3]);