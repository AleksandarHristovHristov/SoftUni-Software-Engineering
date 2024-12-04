function sumSeconds(input) {
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);
    let totalTime = Number(firstTime + secondTime + thirdTime);
    let minutes = Number(Math.floor(totalTime / 60));
    let seconds = Number(totalTime % 60);
    console.log(minutes);
    console.log(seconds)
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }
    else {
        console.log(`${minutes}:${seconds}`);
    }

}

sumSeconds(["35","45","44"])
