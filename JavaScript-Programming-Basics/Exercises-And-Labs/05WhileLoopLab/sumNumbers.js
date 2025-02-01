function sumNumbers(input){
    let index = 0;
    const startingNumber = input[index];
    index++;
    let numbers = 0;
    let sumOfNumbers = 0;

    while (sumOfNumbers < startingNumber) {
       numbers = Number(input[index]);
       index++;
       sumOfNumbers += numbers; 
    }
    console.log(sumOfNumbers);
}
sumNumbers(["100",
"10",
"20",
"30",
"40"])
