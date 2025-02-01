function requiredBooks(input) {
    const pages = Number(input[0]);
    const pagesPerHour = Number(input[1]);
    const neededDaysToReadTheBook = Number(input[2]);
    const neededHourstoReadTheBook = Number(pages / pagesPerHour);
    const neededHoursPerDay = Number(neededHourstoReadTheBook / neededDaysToReadTheBook)
    console.log(neededHoursPerDay);
}

requiredBooks(["212 ","20 ","2 "]);