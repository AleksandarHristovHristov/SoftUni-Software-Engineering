function multiplicationTable(input){
    const n = Number(input[0]);
    for (let i = 1; i <= 10; i++) {
        result = i * n;
        console.log(`${i} * ${n} = ${result}`);
        
    }
}
multiplicationTable("5")