function perimeterAndAreaOfCircle(input) {
    let radius = Number(input[0]);
    let area = Number(Math.PI * (radius * radius));
    let perimeter = Number(2 * (Math.PI) * radius);
    console.log(`${area.toFixed(2)}`);
    console.log(`${perimeter.toFixed(2)}`);
}

perimeterAndAreaOfCircle([3]);