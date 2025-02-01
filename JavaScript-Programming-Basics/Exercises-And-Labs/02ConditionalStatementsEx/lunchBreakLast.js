function lunchBreakLast(input){

    //     1.	Име на сериал – текст
    const seriesName = input[0];
    // 2.	Продължителност на епизод  – цяло число в диапазона [10… 90]
    const seriesDuration = Number(input[1]);
    // 3.	Продължителност на почивката  – цяло число в диапазона [10… 120]
    const breakDuration = Number(input[2]);
    
    let timeForLunch = Number((breakDuration * 0.125));
    //console.log(timeForLunch);
    let timeForRest = Number((breakDuration * 0.25));
    // console.log(timeForRest);
    
    let timeLeftForSeries = Number(breakDuration - (timeForLunch + timeForRest));
    let timeLeft = Number(Math.abs(timeLeftForSeries - seriesDuration));
     if (timeLeftForSeries >= seriesDuration ) { 
         console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft)} minutes free time.`);
     } else {
         let timeNeeded = Number(seriesDuration - timeLeftForSeries);
         console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeeded)} more minutes.`);
     }
    
    }
    lunchBreakLast(["Teen Wolf","48","60"]);