function areaOfFigures(input){
let figureType = input[0];

if (figureType === "square") {
    let side = Number(input[1]);
    let area = Number(side * side);
    console.log(`${area.toFixed(3)}`);
} else if(figureType === "rectangle") {
    let length = Number(input[1]);
    let width = Number(input[2]);
    let area = Number(length * width);
    console.log(`${area.toFixed(3)}`);
} else if(figureType === "circle"){
    let radius = Number(input[1]);
    let area = Number(Math.PI * (radius * radius));
    console.log(`${area.toFixed(3)}`);
} else if(figureType === "triangle"){
    let side = Number(input[1]);
    let height = Number(input[2]);
    let area = Number((side * height) / 2);
    console.log(`${area.toFixed(3)}`);
}
}
areaOfFigures(["square","5"]);