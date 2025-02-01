function pcstore(input){
//     •	На първи ред: цената в долари за процесора – реално число в интервала [200.00 … 3000.00]
// •	На втори ред: цената в долари за видео карта – реално число в интервала [100.00 … 1500.00]
// •	На трети ред: цената в долари за една RAM памет – реално число в интервала [80.00 ... 500.00]
// •	На четвърти: ред брой RAM памети – цяло число в интервала [1 ... 4]
// •   На пети ред: процент отстъпка – реално число в интервала [0.01 … 0.1]
let cpuPrice = Number(input[0]);
let videoMemoryPrice = Number(input[1]);
let ramMemoryPrice = Number(input[2]);
const  ramMemoryQuantity = Number(input[3]);
const discount = Number(input[4]);
const dollarRate = 1.57;
cpuPrice = cpuPrice * dollarRate;
cpuPrice = cpuPrice - (cpuPrice * discount);
videoMemoryPrice = Number(videoMemoryPrice * dollarRate);
videoMemoryPrice = Number(videoMemoryPrice - (videoMemoryPrice * discount));
ramMemoryPrice = ramMemoryPrice * dollarRate;
ramMemoryPrice = Number(ramMemoryPrice * ramMemoryQuantity);
let finalPrice = ramMemoryPrice + videoMemoryPrice + cpuPrice;
console.log(`Money needed - ${finalPrice.toFixed(2)} leva.`);

}
pcstore([500
    ,200
    ,80
    ,2
    ,0.05    
    ])