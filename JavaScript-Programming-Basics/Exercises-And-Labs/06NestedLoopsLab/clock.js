function clock(){
    let minutes  = 0;
    for (let hours = 0; hours < 24; hours++) {
       // console.log(hours);
        for (minutes = 0; minutes < 60; minutes++) {
            console.log(`${hours}:${minutes}`)
        }
    }
}
clock();