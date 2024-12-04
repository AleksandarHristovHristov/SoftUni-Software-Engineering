function triangleArea(input) {
    const height = Number(input[0]);
    const side = Number(input[1]);
    const area  = Number((side * height) / 2);
    console.log(`${area.toFixed(2)}`);
}

triangleArea(["20","30"])