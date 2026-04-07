function ladybugs(arr){
    let fieldSize = arr.shift();
    let bugIndexes = arr.shift().split(' ').map(Number);
    let field = [];

    for (let index = 0; index < fieldSize; index++) {
        if (bugIndexes.includes(index)) {
            field[index] = 1;
        } else {
            field[index] = 0;
        }
    }
    
  for (let index = 0; index < arr.length; index++) {
    let [startIndx , direction , flyLength] = arr[index].split(' ');
        startIndx = Number(startIndx);
        flyLength = Number(flyLength);
        if (!field[startIndx]) {
            continue;
        }

        field[startIndx] = 0;

        if (direction === 'left') {
            let newIdx = startIndx - flyLength;
            if (newIdx >= 0) {
                while (field[newIdx] === 1) {
                    newIdx -= flyLength;
                }
            }

            if (newIdx >= 0) {
                field[newIdx] = 1;
            }
        }
        else {
            let newIdx = startIndx + flyLength;
            if (newIdx < field.length) {
                while (field[newIdx] === 1) {
                    newIdx += flyLength;
                }
            }
            if (newIdx < field.length) {
                field[newIdx] = 1;
            }
        }    
  }
    console.log(field.join(' '));
}

ladybugs([ 3, '0 1',
    '0 right 1',
    '2 right 1' ])

// ladybugs([ 5, '3', '3 left 2','1 left -1'])