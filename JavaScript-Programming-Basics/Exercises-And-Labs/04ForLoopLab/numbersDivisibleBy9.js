function numbersDivisibleBy9(input){
    const startRange = Number(input[0]);
    const endRange = Number(input[1]);
    let sum = 0;
    for (let i = startRange; i < endRange; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
    for (let i = startRange; i < endRange; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }
}
numbersDivisibleBy9(["100","200"])