function  sequence2kPlus1(input) {
    let index = 0;
    const n = Number(input[index]);
    let counter = 1;
    while (n >= counter) {
    console.log(counter);
    counter = (2 * counter ) + 1 ;  
    }
}
sequence2kPlus1("8")