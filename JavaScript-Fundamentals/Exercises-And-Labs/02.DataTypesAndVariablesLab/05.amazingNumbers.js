function amazingNumbers(num){
    num = num.toString();
    let sum = 0;
    let isAmazing = false;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);

    }

    sum = sum.toString();
    for (let i = 0; i < sum.length; i++) {
        let currentNum = sum[i];
        if (currentNum === '9') {
            isAmazing = true;
        }      
    }

    if (isAmazing) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }

}
amazingNumbers(999)