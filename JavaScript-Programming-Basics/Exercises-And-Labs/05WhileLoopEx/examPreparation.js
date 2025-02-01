function examPreparation(input){
    let index = 0;
    const unsatisfiedScores = Number(input[index]);
    index++;
    let command = "";
    let lastTask = "";
    let unsatisfiedScoresCounter = 0;
    let currentScore = 0;
    let taskCounter = 0;
    let totalScore = 0;
    let avgScore = 0;
while (command !== "Enough" ) {
    lastTask = input[index];
    taskCounter++;
    index++;
    currentScore = Number(input[index]);

    if (currentScore <=4) {
        unsatisfiedScoresCounter++;
    }
    if(unsatisfiedScoresCounter >= unsatisfiedScores){
        console.log(`You need a break, ${unsatisfiedScores} poor grades.`);
        break;
    } 
    index++;
    command = input[index];
    totalScore += currentScore;
    
}
if (command === "Enough") {
avgScore = totalScore / taskCounter;
console.log(`Average score: ${avgScore.toFixed(2)}`);
console.log(`Number of problems: ${taskCounter}`);
console.log(`Last problem: ${lastTask}`);
}
}
examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])



