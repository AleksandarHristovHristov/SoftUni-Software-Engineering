function summerOutfit(input) {
const degrees = Number(input[0]);
const timeOfDay = input[1];
let clothing = "";
let shoes = "";
switch (timeOfDay) {
    case "Morning":
        if (degrees >= 10 && degrees <= 18) {
            clothing = "Sweatshirt";
            shoes = "Sneakers";
            console.log(`It's ${degrees} degrees, get your ${clothing} and ${shoes}.`);
        } else if (degrees > 18 && degrees <= 24) {
            clothing = "Shirt";
            shoes = "Moccasins";
            console.log(`It's ${degrees} degrees, get your ${clothing} and ${shoes}.`);
        } else if (degrees >=25) {
            clothing = "T-Shirt";
            shoes = "Sandals";
            console.log(`It's ${degrees} degrees, get your ${clothing} and ${shoes}.`); 
        } 
        break;
    case "Afternoon":
        if (degrees >= 10 && degrees <= 18) {
            clothing = "Shirt";
            shoes = "Moccasins";
            console.log(`It's ${degrees} degrees, get your ${clothing} and ${shoes}.`);
        } else if (degrees > 18 && degrees <= 24) {
            clothing = "T-Shirt";
            shoes = "Sandals";
            console.log(`It's ${degrees} degrees, get your ${clothing} and ${shoes}.`);
        } else if (degrees >=25) {
            clothing = "Swim Suit";
            shoes = "Barefoot";
            console.log(`It's ${degrees} degrees, get your ${clothing} and ${shoes}.`); 
        } 
    break;
    case "Evening":
            clothing = "Shirt";
            shoes = "Moccasins";
            console.log(`It's ${degrees} degrees, get your ${clothing} and ${shoes}.`);
    break;

    default:
        break;
}
}