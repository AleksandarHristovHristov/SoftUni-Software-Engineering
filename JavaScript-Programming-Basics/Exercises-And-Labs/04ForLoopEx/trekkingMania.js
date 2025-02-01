function trekkingMania(input){
 let index = 0;
 let numberOfGroups = Number(input[index]);
 let totalClimbingPeople = 0;
 let totalPeopleForMusala = 0;
 let totalPeopleForMonblan = 0;
 let totalPeopleForKilimangaro = 0;
 let totalPeopleForKTwo = 0;
 let totalPeopleForEverest = 0;
 for (let i = 0; i < numberOfGroups; i++) {
    let groupSize = Number(input[index + 1]);
    index++;
    
     if (groupSize <= 5 ) {
        totalPeopleForMusala += groupSize;
     } else if (groupSize > 5 && groupSize <= 12) {
        totalPeopleForMonblan += groupSize; 
     } else if (groupSize > 12 && groupSize <= 25) {
        totalPeopleForKilimangaro += groupSize; 
     } else if (groupSize > 25 && groupSize <= 40) {
        totalPeopleForKTwo += groupSize;
     } else if (groupSize > 40) {
        totalPeopleForEverest +=groupSize; 
     }
     totalClimbingPeople += groupSize;
 }
 console.log(`${((totalPeopleForMusala / totalClimbingPeople) * 100).toFixed(2)}%`);
 console.log(`${((totalPeopleForMonblan / totalClimbingPeople) * 100).toFixed(2)}%`);
 console.log(`${((totalPeopleForKilimangaro / totalClimbingPeople) * 100).toFixed(2)}%`);
 console.log(`${((totalPeopleForKTwo / totalClimbingPeople) * 100).toFixed(2)}%`);
 console.log(`${((totalPeopleForEverest / totalClimbingPeople) * 100).toFixed(2)}%`);
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
