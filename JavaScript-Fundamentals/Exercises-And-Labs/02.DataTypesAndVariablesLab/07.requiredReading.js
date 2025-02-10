function requiredReading(bookPages,pagesReadingPerHour,daysForReading){
    let requiredHoursForReading = bookPages / pagesReadingPerHour;
    let hoursReadingDaily = requiredHoursForReading / daysForReading;
    console.log(hoursReadingDaily);
}

requiredReading(212, 20 , 2)