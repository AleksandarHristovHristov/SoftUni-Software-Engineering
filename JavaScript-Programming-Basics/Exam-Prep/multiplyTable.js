function multiplyTable(input){
    const  n = Number(input[0]);
    const firstDigit = n % 10;
    const secondDigit = Math.floor((n / 10) % 10);
    const thirdDigit = Math.floor((n / 100) % 10);

    for (let i = 1; i <= firstDigit; i++) {
       for (let j = 1; j <= secondDigit; j++) {
        for (let k = 1; k <= thirdDigit; k++) {
            console.log(`${i} * ${j} * ${k} = ${i * j * k};`);
        }   
       }
    }
}
multiplyTable(["324"]);