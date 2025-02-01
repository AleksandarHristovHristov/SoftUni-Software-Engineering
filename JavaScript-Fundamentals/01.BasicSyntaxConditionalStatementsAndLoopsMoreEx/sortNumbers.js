function sortNumbers(firstNum,secondNum,thirdNum){

 if (firstNum > secondNum && firstNum > thirdNum && secondNum > thirdNum) {
     console.log(firstNum);
     console.log(secondNum);
     console.log(thirdNum);
 }
  else if(firstNum > secondNum && firstNum > thirdNum && thirdNum > secondNum){
     console.log(firstNum);
     console.log(thirdNum);
     console.log(secondNum);
  }
  else if(secondNum > firstNum && secondNum > thirdNum && firstNum > thirdNum){
     console.log(secondNum);
     console.log(firstNum);
     console.log(thirdNum);
  }
  else if(secondNum > firstNum && secondNum > thirdNum && thirdNum > firstNum){
     console.log(secondNum);
     console.log(thirdNum);
     console.log(firstNum);
  }
  else if(thirdNum > firstNum && thirdNum > secondNum && firstNum > secondNum){
    console.log(thirdNum);
    console.log(firstNum);
    console.log(secondNum);
  }
  else if(thirdNum > firstNum && thirdNum > secondNum && secondNum > firstNum){
    console.log(thirdNum);
    console.log(secondNum);
    console.log(firstNum);
  }
  else if(firstNum === secondNum && thirdNum > firstNum){
    console.log(thirdNum);
    console.log(firstNum);
    console.log(secondNum);

  }
  else if(firstNum === secondNum && thirdNum < firstNum){
      console.log(firstNum);
      console.log(secondNum);
      console.log(thirdNum);
  }
  else if(secondNum === thirdNum && firstNum > secondNum) {
      console.log(firstNum);
      console.log(secondNum);
      console.log(thirdNum);
  }
  else if(secondNum === thirdNum && firstNum < secondNum){
      console.log(secondNum);
      console.log(thirdNum);
      console.log(firstNum);
  }
  else if(firstNum === thirdNum && secondNum > firstNum){
      console.log(secondNum);
      console.log(firstNum);
      console.log(thirdNum);
  }
  else if(firstNum === thirdNum && secondNum < firstNum){
      console.log(firstNum);
      console.log(thirdNum);
      console.log(secondNum);
  }
}
sortNumbers(0,0,2)