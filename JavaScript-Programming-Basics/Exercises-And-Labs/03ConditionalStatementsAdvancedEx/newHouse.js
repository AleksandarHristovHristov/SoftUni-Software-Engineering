function newHouse(input){
   const rosesPrice = 5;
   const dahliasPrice = 3.80;
   const tulipsPrice= 2.80;
   const narcissusPrice = 3;
   const gladiolusPrice = 2.50;
   const flowerType = input[0];
   const quantity = Number(input[1]);
   const budget = Number(input[2]);
   let finalPrice = 0;

   switch (flowerType) {
       case "Roses":
           finalPrice = quantity * rosesPrice;
           if (quantity > 80) {
           finalPrice = finalPrice - (finalPrice * 0.1);    
           }           
           break;
        case "Dahlias":
           finalPrice = quantity * dahliasPrice;
           if (quantity > 90) {
           finalPrice = finalPrice - (finalPrice * 0.15);    
           }           
           break;
        case "Tulips":
            finalPrice = quantity * tulipsPrice;
            if (quantity > 80) {
            finalPrice = finalPrice - (finalPrice * 0.15);    
            }           
            break;
        case "Narcissus":
            finalPrice = quantity * narcissusPrice;
            if (quantity < 120) {
            finalPrice = finalPrice + (finalPrice * 0.15);    
            }           
            break;
        case "Gladiolus":
            finalPrice = quantity * gladiolusPrice;
            if (quantity < 80) {
            finalPrice = finalPrice + (finalPrice * 0.2);    
            }           
            break;
               
       default:
           break;
   }
   let leftMoney = 0;
   let requiredMoney = 0;
   if (finalPrice <= budget) {
        leftMoney = Number(budget - finalPrice);
       console.log(`Hey, you have a great garden with ${quantity} ${flowerType} and ${leftMoney.toFixed(2)} leva left.`);
   } else {
       requiredMoney = Math.abs(budget - finalPrice);
       console.log(`Not enough money, you need ${requiredMoney.toFixed(2)} leva more.`)
       
   }
}