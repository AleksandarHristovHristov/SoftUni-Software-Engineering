function personalTitles(input){
const age = Number(input[0]);
const maleOrFemale = input[1];

if (age >= 16) {
    if (maleOrFemale === "m") {
        console.log("Mr.");
    } else {
        console.log("Ms.");
    }
} else {
    if (maleOrFemale === "m") {
        console.log("Master");
    } else {
        console.log("Miss");
    } 
}
}