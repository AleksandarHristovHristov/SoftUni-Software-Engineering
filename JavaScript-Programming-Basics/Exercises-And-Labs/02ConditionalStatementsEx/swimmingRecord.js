function swimmingRecord(input) {

    // 1.	Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
    const record = Number(input[0]);
    // 2.	Разстоянието в ме три – реално число в интервала [0.00 … 100000.00]
    const distanceInMeters = Number(input[1]);
    // 3.	Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.00]
    const timeToSwimOneMeterInSec = Number(input[2]);

    let slowingTime = Number(Math.floor(distanceInMeters / 15));
    const slowingTimeInSec = Number(slowingTime * 12.5);
    let secondsNeeded = Number((distanceInMeters * timeToSwimOneMeterInSec) + slowingTimeInSec);
    if (secondsNeeded >= record) {
        console.log(`No, he failed! He was ${(secondsNeeded - record).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${secondsNeeded.toFixed(2)} seconds.`);
    }
}

swimmingRecord(["10464","1500","20"]);
