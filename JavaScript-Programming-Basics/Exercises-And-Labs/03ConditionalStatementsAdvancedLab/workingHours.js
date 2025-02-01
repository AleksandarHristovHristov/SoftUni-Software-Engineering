function workingHours(input){
    const time = Number(input[0]);
    const dayOfWeek = input[1];
    if (time >= 10 && time <=18) {
        if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" 
        || dayOfWeek === "Friday" || dayOfWeek === "Saturday" ) {
          console.log("open");  
        } else if(dayOfWeek === "Sunday"){
            console.log("closed");
        } 
    } else {
        console.log("closed");  
    }
}
workingHours(["11",
"Sunday"])
