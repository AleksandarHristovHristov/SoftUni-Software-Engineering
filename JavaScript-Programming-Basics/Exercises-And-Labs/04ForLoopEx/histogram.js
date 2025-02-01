function histogram(input){
    const n = Number(input[0]);
    let pFiveCounter = 0;
    let pFourCounter = 0;
    let pThreeCounter = 0;
    let pTwoCounter = 0;
    let pOneCounter = 0;
    let pOneResult = 0;
    let pTwoResult = 0;
    let pThreeResult = 0;
    let pFourResult = 0;
    let pFiveResult = 0;
    for (let i = 0; i < n; i++) {
        let numbers = Number(input[i+1]);
        if (numbers >= 800) {
            pFiveCounter++;
            
        } else if (numbers > 599 && numbers < 800) {
            pFourCounter++;
        } else if (numbers > 399 && numbers < 600) {
            pThreeCounter++;
        } else if (numbers >= 200 && numbers < 400){
            pTwoCounter++;
        } else if(numbers < 200) {
            pOneCounter++;
        }
        
    }
     pFiveResult = (pFiveCounter / n ) * 100;
     pFourResult = (pFourCounter / n) * 100;
     pThreeResult = (pThreeCounter / n) * 100;
     pTwoResult = (pTwoCounter / n) * 100;
     pOneResult = (pOneCounter / n) * 100;
    console.log(`${pOneResult.toFixed(2)}%`);
    console.log(`${pTwoResult.toFixed(2)}%`);
    console.log(`${pThreeResult.toFixed(2)}%`);
    console.log(`${pFourResult.toFixed(2)}%`);       
    console.log(`${pFiveResult.toFixed(2)}%`);
}
histogram(["3",
"1",
"2",
"999"])
