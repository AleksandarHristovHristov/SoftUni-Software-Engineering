function combinations(input){
    const n = Number(input[0]);
    let sum = 0;
    let counter = 0;

    for (let firstNum = 0; firstNum <= n; firstNum++) {
       for (let secondNum = 0; secondNum <= n; secondNum++) {
        for (let thirdNum = 0; thirdNum <= n; thirdNum++) {
            sum = firstNum + secondNum + thirdNum;
            if (sum === n) {
               counter++; 
            }
        }    
       }
    }
    console.log(counter);
}
combinations(["25"]);