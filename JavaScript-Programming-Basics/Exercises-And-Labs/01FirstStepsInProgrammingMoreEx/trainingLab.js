function trainingLab(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    width = Number(width * 100);
    length = Number(length * 100);
    width = Number(width - 100);
    let spaceTakenFromDeskAndDoor = 3;
    let spaceAvailableForDesk = Number(Math.floor(width / 70));
    let spaceAvailableForRows = Number(Math.floor(length / 120));
    let spaceAvailable = Number((spaceAvailableForDesk * spaceAvailableForRows) - spaceTakenFromDeskAndDoor ); 
    console.log(`${Math.floor(spaceAvailable)}`);
}
trainingLab([15,8.9]);