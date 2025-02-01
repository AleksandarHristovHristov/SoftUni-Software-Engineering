function numberPyramid(input){
    const targetNumber = Number(input[0]);
    let isFound = false;
    let currentNum = 0;
    let printLine = "";
    for (let rows = 1; rows <= targetNumber; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (currentNum === targetNumber) {
                isFound = true;
                break;
            }
            currentNum++;
            printLine += currentNum + " ";
        }
        console.log(printLine);
        printLine = "";
        if (isFound) {
            break;
        } 
    }

}
numberPyramid(["15"])