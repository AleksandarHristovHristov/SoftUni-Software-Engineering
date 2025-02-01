function moving(input){
    // (["10", "10","2","20","20","20","20","122"])

 let index = 0;
 let width = Number(input[index]);
 index++;
 let length = Number(input[index]);
 index++;
 let height = Number(input[index]);
 let boxsize = 1;
 let totalSpace = Number(width * length * height);
 index++;
 let command = input[index];
 index++;

 while (command !== "Done") {
     let boxes = Number(command);
     totalSpace -= boxes;      
     if (totalSpace < 0) {
         console.log(`No more free space! You need ${Math.abs(totalSpace)} Cubic meters more.`);
         break;
     }   
     command = input[index];
     index++;
 }
 if (command === "Done" && totalSpace > 0) {
     console.log(`${totalSpace} Cubic meters left.`);
 } 
}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

