function calculator(firstNum,operation,secondNum){
    let result = 0;
    if (operation === "+") {
        result = firstNum + secondNum;
        console.log(`${result.toFixed(2)}`);
    } else if(operation === "-"){
        result = firstNum - secondNum;
        console.log(`${result.toFixed(2)}`);
    } else if(operation === "*"){
        result = firstNum * secondNum;
        console.log(`${result.toFixed(2)}`);
    }
     else if(operation === "/"){
        result = firstNum / secondNum;
        console.log(`${result.toFixed(2)}`);
     }
}

calculator(25.5,"-",3);