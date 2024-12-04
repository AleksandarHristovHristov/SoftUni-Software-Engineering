function minNumber(input){
    let index = 0;
    let command = "";
    let minNumber = Number(input[index]);
    index++
    let currentNumber = 0;
    while (command !=="Stop") {
      command = input[index];
      index++;
      if (command === "Stop") {
          break;
      }
      currentNumber = Number(command);
        if (minNumber >= currentNumber) {
          minNumber = currentNumber;
      }
    }
    console.log(minNumber);
}
minNumber(["100",
"99",
"80",
"70",
"Stop"])
