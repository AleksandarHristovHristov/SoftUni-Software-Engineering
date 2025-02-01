function fishingBoat(input){
const budget = Number(input[0]);
const season = input[1];
const quantityOfFishermans = Number(input[2]);
let finalPrice = 0;
  switch (season) {
      case "Spring":
          finalPrice = 3000;
          if(quantityOfFishermans <= 6) {
            finalPrice = finalPrice - (finalPrice * 0.10);
          } else if (quantityOfFishermans > 6 && quantityOfFishermans <= 11) {
            finalPrice = finalPrice - (finalPrice * 0.15);
          } else if(quantityOfFishermans > 11){
            finalPrice = finalPrice - (finalPrice * 0.25);
          }
          if (quantityOfFishermans % 2 === 0) {
            finalPrice = finalPrice -(finalPrice * 0.05); 
         }
          break;
      case "Winter":
        finalPrice = 2600;
        if(quantityOfFishermans <= 6) {
          finalPrice = finalPrice - (finalPrice * 0.10);
        } else if (quantityOfFishermans > 6 && quantityOfFishermans <= 11) {
          finalPrice = finalPrice - (finalPrice * 0.15);
        } else if(quantityOfFishermans > 11){
          finalPrice = finalPrice - (finalPrice * 0.25);
        }
        if (quantityOfFishermans % 2 === 0) {
            finalPrice = finalPrice -(finalPrice * 0.05); 
         }
      break;
      case "Autumn": 
        finalPrice = 4200;
        if(quantityOfFishermans <= 6) {
        finalPrice = finalPrice - (finalPrice * 0.10);
      } else if (quantityOfFishermans > 6 && quantityOfFishermans <= 11) {
        finalPrice = finalPrice - (finalPrice * 0.15);
      } else if(quantityOfFishermans > 11){
        finalPrice = finalPrice - (finalPrice * 0.25);
      }
      break;
      case "Summer":
        finalPrice = 4200;
        if(quantityOfFishermans <= 6) {
          finalPrice = finalPrice - (finalPrice * 0.10);
        } else if (quantityOfFishermans > 6 && quantityOfFishermans <= 11) {
          finalPrice = finalPrice - (finalPrice * 0.15);
        } else if(quantityOfFishermans > 11){
          finalPrice = finalPrice - (finalPrice * 0.25);
        }
        if (quantityOfFishermans % 2 === 0) {
           finalPrice = finalPrice - (finalPrice * 0.05); 
        }
      break;    
      default:
          break;
  } 
  let leftMoney = 0;
  let requiredMoney = 0; 
  if (finalPrice <= budget) {
      leftMoney = Number(budget - finalPrice);
      console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`)
  } else {
      requiredMoney = Math.abs(budget - finalPrice);
      console.log(`Not enough money! You need ${requiredMoney.toFixed(2)} leva.`);   
  }
}