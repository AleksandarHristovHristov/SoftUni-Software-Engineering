function readText(input){
let index = 0;
let command = input[0];
while (command !=="Stop") {
   command = input[index];
   index++;
   if(command === "Stop"){
       break;
   }
   console.log(command);  
}
}
readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
