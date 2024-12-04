function depositCalculator(input){
    let depositAmount = Number(input[0]);
    let depositDurationInMonths = Number(input[1]);
    let annualInterestRate = Number(input[2]);
    let annualProfit = Number(depositAmount * annualInterestRate)/100;
    let annualProfitForMonth = Number (annualProfit / 12.00);
    let depositAmountInTheEndOfThePeriod = Number(depositAmount + depositDurationInMonths * annualProfitForMonth);
    console.log(depositAmountInTheEndOfThePeriod);
}
depositCalculator(["200 ","3 ","5.7 "])