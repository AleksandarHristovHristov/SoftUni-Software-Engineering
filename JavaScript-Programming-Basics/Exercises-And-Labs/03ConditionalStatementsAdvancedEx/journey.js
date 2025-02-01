function journey(input){
    let budget = Number(input[0]);
    const season = input[1];
    let destination = "";
    let accomodationType = "";
    let spentmoney = 0;
    if (budget <= 100) {
        destination = "Bulgaria";
        console.log(`Somewhere in ${destination}`);
       if (season === "summer") {
        accomodationType = "Camp";
        spentmoney = budget * 0.3;
        console.log(`${accomodationType} - ${spentmoney.toFixed(2)}`);   
       }
       else {
        accomodationType = "Hotel";
        spentmoney = budget * 0.7;
        console.log(`${accomodationType} - ${spentmoney.toFixed(2)}`);
       } 
    } else if (budget <= 1000) {
        destination = "Balkans";
        console.log(`Somewhere in ${destination}`);
         if (season === "summer") {
            accomodationType = "Camp";
            spentmoney = budget * 0.4;
            console.log(`${accomodationType} - ${spentmoney.toFixed(2)}`);  
       }
       else {
        accomodationType = "Hotel";
        spentmoney = budget * 0.8;
        console.log(`${accomodationType} - ${spentmoney.toFixed(2)}`);
       }  
    }else if (budget > 1000){
        destination = "Europe";
        accomodationType = "Hotel";
        console.log(`Somewhere in ${destination}`);
        spentmoney = budget * 0.9;
        console.log(`${accomodationType} - ${spentmoney.toFixed(2)}`);

    }
}
journey(["75", "winter"]);