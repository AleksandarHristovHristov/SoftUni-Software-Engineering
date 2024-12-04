function building(input){
let index = 0;
const numberOfFloors = Number(input[index]);
index++;
const numberOfRooms = Number(input[index]);
index++;

for (let floor = numberOfFloors; floor > 0 ; floor--){
    let res = "";
 for (let room = 0; room < numberOfRooms; room++) {
    if (floor === numberOfFloors) {
        res += `L${floor}${room} `;
    } else if (floor % 2 === 0) {
        res += `O${floor}${room} `;
    } else{
        res += `A${floor}${room} `;       
    }
   
 }
   console.log(res);
}
}
building(["6","4"]);