function bonusScore(input) {
const number = Number(input[0]);
let bonus = 0;
if (number > 1000) {
    bonus = number * 0.1;
}
else if (number > 100) {
    bonus = number * 0.2;
}
else if (number <= 100){
    bonus = 5;
}
if (number % 2 === 0) {
    bonus +=1;
}
else if(number % 10 === 5){
    bonus +=2;
}
console.log(bonus);
console.log(bonus + number);
}
bonusScore(["20"]);