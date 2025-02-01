function celsiusToFahrenheit(input) {
    const celsius = Number(input[0]);
    let fahrenheit = Number(celsius / 5);
    fahrenheit = fahrenheit * 9;
    fahrenheit += 32;
    console.log(`${fahrenheit.toFixed(2)}`)
}

celsiusToFahrenheit([0]);