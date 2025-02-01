function operationBetweenNumbers(input){
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let operationType = input[2];
    let result = 0;
    if (operationType === "+") {
        result = firstNum + secondNum;
        if (result % 2 === 0) {
        console.log(`${firstNum} ${operationType} ${secondNum} = ${result} - even`);    
        }
        else {
        console.log(`${firstNum} ${operationType} ${secondNum} = ${result} - odd`);    
           
        }
    } else if(operationType === "-"){
        result = firstNum - secondNum;
        if (result % 2 === 0) {
        console.log(`${firstNum} ${operationType} ${secondNum} = ${result} - even`);    
        }
        else {
        console.log(`${firstNum} ${operationType} ${secondNum} = ${result} - odd`);    
           
        }
        
    } else if(operationType === "*"){
        result = firstNum * secondNum;
        if (result % 2 === 0) {
        console.log(`${firstNum} ${operationType} ${secondNum} = ${result} - even`);    
        }
        else {
        console.log(`${firstNum} ${operationType} ${secondNum} = ${result} - odd`);    
           
        }
    } else if(operationType === "/") {
        if (secondNum === 0) {
            console.log(`Cannot divide ${firstNum} by zero`);           
        }
        else {
        result = firstNum / secondNum;
        console.log(`${firstNum} / ${secondNum} = ${result.toFixed(2)}`);
        }

    } else if(operationType === "%"){
        if (secondNum === 0) {
            console.log(`Cannot divide ${firstNum} by zero`);           
        } else {
            result = firstNum % secondNum;
            console.log(`${firstNum} % ${secondNum} = ${result}`);
    }
        
        
    }
}
operationBetweenNumbers(["10",
"3",
"%"])


