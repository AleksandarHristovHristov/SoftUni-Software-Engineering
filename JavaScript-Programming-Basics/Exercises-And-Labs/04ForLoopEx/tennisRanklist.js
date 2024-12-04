function tennisRanklist(input){
    let index = 0;
    const numberOfTournaments = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;
    let tempPoints = 0;
    let tourneyCount = 0;
    let winCounter = 0;
    for (let i = 0; i < numberOfTournaments; i++) {
        let tourneyFin = input[index];
        index++;
        switch (tourneyFin) {
            case "W":
                tempPoints += 2000;
                tourneyCount++;
                winCounter++;
                break;
            case "F":
                tempPoints += 1200;
                tourneyCount++;
                break;
            case "SF":
                tempPoints +=720;
                tourneyCount++;
                break;
        }
    }
    let finalPoints = startingPoints + tempPoints;
    let finalAvgPoints = Math.floor(tempPoints / tourneyCount);
    let finalWinP = (winCounter / tourneyCount) * 100;
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${finalAvgPoints}`);
    console.log(`${finalWinP.toFixed(2)}%`);
}

tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
