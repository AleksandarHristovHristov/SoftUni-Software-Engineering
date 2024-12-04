function shopping(input){

//     1.	Бюджетът на Петър - реално число в интервала [0.0…100000.0]
const budget = Number(input[0]);
// 2.	Броят видеокарти - цяло число в интервала [0…100]
const videoMemoryCount = Number(input[1]);
// 3.	Броят процесори - цяло число в интервала [0…100]
const cpuCount = Number(input[2]);
// 4.	Броят рам памет - цяло число в интервала [0…100]
const ramMemoryCount = Number(input[3]);
const videoMemoryPrice = Number(250);
let videoMemoryTotalPrice = Number(videoMemoryCount * videoMemoryPrice);
const cpuPrice = Number(videoMemoryTotalPrice * 0.35);
const ramMemoryPrice =  Number(videoMemoryTotalPrice * 0.1);
let totalPrice = Number(videoMemoryTotalPrice + (cpuCount * cpuPrice) + (ramMemoryCount * ramMemoryPrice));
if(videoMemoryCount > cpuCount){
    totalPrice = totalPrice - (totalPrice * 0.15);
}
if (budget >= totalPrice) {
    console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
} else {
    console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`)
}
}
shopping(["900","2","1","3"]);