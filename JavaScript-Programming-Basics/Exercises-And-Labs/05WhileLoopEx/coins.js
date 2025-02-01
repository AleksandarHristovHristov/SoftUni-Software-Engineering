function coins(input){
    // input = 1.23
 let change = input[0]; // 1.23
 let changeConverted = parseInt(change * 100); // 123
 let coins = 0;

 while (changeConverted > 0) {
     if (changeConverted - 200 >= 0) {
        changeConverted -= 200;
     } else if (changeConverted - 100 >= 0) {
        changeConverted -= 100; 
     }  else if (changeConverted - 50 >= 0) {
        changeConverted -= 50; 
     }  else if (changeConverted - 20 >= 0) {
        changeConverted -= 20; 
     }  else if (changeConverted - 10 >= 0) {
        changeConverted -= 10; 
     }  else if (changeConverted - 5 >= 0) {
        changeConverted -= 5; 
     }  else if (changeConverted - 2 >= 0) {
        changeConverted -= 2; 
     }  else if (changeConverted - 1 >= 0) {
        changeConverted -= 1;
        
     }
     coins++; 
 }
 console.log(coins);
}
coins(["1.23"])