function graduation(input){
    let index = 0;
    const studentName = input[index];
    index++;
    let startingScore = Number(input[index]);
    index++;
    let failCounter = 0;
    let gradeCounter = 0;
    let grade = Number(startingScore);
    let avgGrade = 0;
    let isGraduated = false;
    let yearsCounter = 0;
    while (failCounter < 1) {
        yearsCounter++;
        if (startingScore >= 4) {
            gradeCounter++;
        }
        else {
            failCounter++;
            console.log(`${studentName} has been excluded at ${yearsCounter} grade`);
            break;
            }
        if (gradeCounter >= 12) {
                isGraduated = true;
                break;
        }
            startingScore = Number(input[index]);
            grade += startingScore;
            index++;
               
        }
        if(isGraduated){
        avgGrade = grade / 12;
        console.log(`${studentName} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}


graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])


