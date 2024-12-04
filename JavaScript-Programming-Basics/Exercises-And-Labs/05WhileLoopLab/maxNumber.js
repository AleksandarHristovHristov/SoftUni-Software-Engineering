function maxNumber(input){
    let index = 0;
    let command = "";
    let maxNumber = Number(input[index]);
    index++
    let currentNumber = 0;
    while (command !=="Stop") {
      command = input[index];
      index++;
      if (command === "Stop") {
          break;
      }
      currentNumber = Number(command);
        if (currentNumber > maxNumber) {
          maxNumber = currentNumber;
      }
    }
    console.log(maxNumber);
}

maxNumber(["-10","20","-30","Stop"])
