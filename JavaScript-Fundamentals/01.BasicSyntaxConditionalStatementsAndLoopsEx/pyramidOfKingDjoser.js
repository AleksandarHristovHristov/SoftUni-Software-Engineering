function pyramidOfKingDjoser(base,increment){
    let stepArea = 0;
    let stoneRequired = 0;
    let marbleRequired = 0;
    let lapisLazuliRequired = 0;
    let goldRequired = 0;
    let pyramidHeight = 0;
    let stepsCounter = 0;

while(base >= 1) {
    if (base === 1 || base === 2) {
        goldRequired = (base * base) * increment;
        stepsCounter++;
        break;
    }
    stepsCounter++;
    if (stepsCounter % 5 === 0) {
        lapisLazuliRequired += ((4 * base) - 4) * increment;
    }
    else{
        marbleRequired +=((4 * base) - 4)*increment;
    }
    
    base -= 2;
    stoneRequired += (base * base) * increment;
    

}
    pyramidHeight = stepsCounter * increment;
    console.log(`Stone required: ${Math.ceil(stoneRequired)}`);
    console.log(`Marble required: ${Math.ceil(marbleRequired)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliRequired)}`);
    console.log(`Gold required: ${Math.ceil(goldRequired)}`);
    console.log(`Final pyramid height: ${Math.trunc(pyramidHeight)}`);

}
pyramidOfKingDjoser(11,1);