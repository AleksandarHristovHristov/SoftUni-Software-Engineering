function sumOfOddNumbers(n){
    let sum = 0;
       for (let i = 1; i <= n; i++) {
           if (i % 2 === 1){
               console.log(i);
               sum+=i;
           }
           else {
            n++;
           }        
   }
   console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(3);