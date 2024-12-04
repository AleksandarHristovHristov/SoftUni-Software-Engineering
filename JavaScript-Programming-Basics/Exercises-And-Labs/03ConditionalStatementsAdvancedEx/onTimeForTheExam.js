function onTimeForTheExam(input){
  const hoursOfExam = Number(input[0]);
  const minutessOfExam = Number(input[1]);
  const hoursOfArriving = Number(input[2]);
  const minutesOfArriving = Number(input[3]);
  
  let totalMinutesOfExam = (hoursOfExam * 60) + minutessOfExam;
  let totalMinutesOfArriving = (hoursOfArriving * 60) + minutesOfArriving;
  let differenceInTime = Math.abs(totalMinutesOfExam - totalMinutesOfArriving);
  let hoursDiff = Math.floor(differenceInTime / 60);
  let minDiff = differenceInTime % 60;

  if (minDiff === 0 || minDiff < 10 && hoursDiff > 0) {
      minDiff = `0${minDiff}`;
  }
  if (totalMinutesOfExam === totalMinutesOfArriving) {
      console.log("On Time");
  } else if (totalMinutesOfArriving > totalMinutesOfExam && differenceInTime < 60) {
      console.log("Late");
      console.log(`${minDiff} minutes after the start`);    
  } else if(totalMinutesOfArriving > totalMinutesOfExam && differenceInTime >= 60)  {
      console.log("Late");
      console.log(`${hoursDiff}:${minDiff} hours after the start`);
  }else if ( differenceInTime <= 30){
      console.log("On Time");
      console.log(`${minDiff} minutes before the start`);
  } else if (differenceInTime > 30 && differenceInTime < 60) {
      console.log("Early");
      console.log(`${minDiff} minutes before the start`);
  } else  {
      console.log("Early");
      console.log(`${hoursDiff}:${minDiff} hours before the start`);  
  } 
  
}
onTimeForTheExam(["16",
"00",
"15",
"00"])


