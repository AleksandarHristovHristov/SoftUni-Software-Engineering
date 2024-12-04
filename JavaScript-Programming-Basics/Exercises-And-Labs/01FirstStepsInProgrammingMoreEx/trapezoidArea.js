function trapezoidArea(input){
    const bOne = Number(input[0]);
    const bTwo = Number(input[1]);
    const height = Number(input[2]);

    const area = Number(((bOne+ bTwo)*height)/2);
    console.log(`${area.toFixed(2)}`);

}

trapezoidArea(["8","13","7"])