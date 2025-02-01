function fishTank(input){
    const length = Number(input[0]);
    const width = Number(input[1]);
    const height = Number(input[2]);
    const percentage = Number(input[3] /100);
    const volumeInSantimeters  = Number(length * width * height);
    const volumeInSantimetersWithWaterPump = Number(volumeInSantimeters -  (volumeInSantimeters * percentage));
    const waterNeededToFill = Number(volumeInSantimetersWithWaterPump  / 1000);
    console.log(waterNeededToFill); 
}
fishTank(["85 ","75 ","47 ","17 "]);