function pyramidOfKingDjoser(base,increment){
    
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
    let perimeter = 4 * base;
    if (stepsCounter % 5 === 0) {
        lapisLazuliRequired += (perimeter - 4) * increment;
    }
    else {
        marbleRequired += (perimeter - 4) * increment;
    }
    base -= 2;
    let stepArea = base * base;
    stoneRequired += stepArea * increment;
    
}
    pyramidHeight = stepsCounter * increment;
    console.log(`Stone required: ${Math.ceil(stoneRequired)}`);
    console.log(`Marble required: ${Math.ceil(marbleRequired)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliRequired)}`);
    console.log(`Gold required: ${Math.ceil(goldRequired)}`);
    console.log(`Final pyramid height: ${Math.trunc(pyramidHeight)}`);
}
pyramidOfKingDjoser(11,1);