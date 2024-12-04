function oscars(input){
    let index = 0;
    const actorName = input[index];
    index++;
    let pointsFromAcademy = Number(input[index]);
    index++;
    let numberOfJury = Number(input[index]);
    index++;
    let tempPoints = 0;
    for (let i = 0; i < numberOfJury; i++) {
        let nameOfJury = input[index];
        index++;
        let pointsFromJury = Number(input[index]);
        index++;
        tempPoints += (nameOfJury.length * pointsFromJury) / 2;
        if (tempPoints + pointsFromAcademy > 1250.5) {
            break;  
        }
        
    }
    finalPoints = pointsFromAcademy + tempPoints;
    if (finalPoints > 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${finalPoints.toFixed(1)}!`);
    } else if(finalPoints < 1250.5){
        let requiredPoints = Math.abs(1250.5 - finalPoints)
        console.log(`Sorry, ${actorName} you need ${requiredPoints.toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

