function sumOfNumbers(input){
    const n = input[0];
    let symbols = 0;
    let result = 0;
    for (let i = 0; i < n.length ; i++) {
       
        symbols = Number(n[i]);
        result += symbols;
    }
    console.log(`The sum of the digits is:${result}`);
}
sumOfNumbers(["1234"])