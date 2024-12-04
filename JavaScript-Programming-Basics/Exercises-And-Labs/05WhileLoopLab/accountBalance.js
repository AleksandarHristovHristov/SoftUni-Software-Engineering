function accountBalance(input) {
    let index = 0;
    let command = "";
    let accountBalance = 0;
    let currentIncrease = 0;
    while(command !=="NoMoreMoney"){
    command = input[index];
    index++;
    if (command === "NoMoreMoney") {
        break;
    }
    currentIncrease = Number(command);
    if (currentIncrease <= 0) {
        console.log("Invalid operation!");
        break;
    }    
    console.log(`Increase: ${currentIncrease.toFixed(2)}`);
    accountBalance += currentIncrease;    
    }
    console.log(`Total: ${accountBalance.toFixed(2)}`);

}
accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
