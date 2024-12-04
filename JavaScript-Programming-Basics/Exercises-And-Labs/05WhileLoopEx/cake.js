function cake(input){
    //[("10","2","2","4","6","STOP"])

    let index = 0;
    let cakeWidth = Number(input[index]);
    index++;
    let cakeLength = Number(input[index]);
    index++;
    let totalPieces = cakeLength * cakeWidth;
    let command = input[index];
    index++;

    while(command !== "STOP")
    {
        let piecesTaken = Number(command);
        totalPieces -= piecesTaken;
        if (totalPieces < 0) {
            console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "STOP" && totalPieces > 0) {
        console.log(`${totalPieces} pieces are left.`)
    } 

}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

