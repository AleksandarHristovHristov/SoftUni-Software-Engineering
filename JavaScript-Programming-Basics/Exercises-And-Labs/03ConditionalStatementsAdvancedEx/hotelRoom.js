function hotelRoom(input){
    const month = input[0];
    const overnights = Number(input[1]);
    let studioPrice = 0;
    let flatPrice = 0;
    let finalstudioPrice = 0;
    let finalFlatPrice = 0;

    if (month === "May" || month === "October") {
        studioPrice = 50;
        flatPrice = 65;
        finalstudioPrice = studioPrice * overnights;
        finalFlatPrice = flatPrice * overnights;
        if (overnights > 14) {
        finalstudioPrice = finalstudioPrice - (finalstudioPrice * 0.3);
        finalFlatPrice = finalFlatPrice - (finalFlatPrice * 0.1);
        console.log(`Apartment: ${finalFlatPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${finalstudioPrice.toFixed(2)} lv.`);    
        }
        else if (overnights > 7) {
        finalstudioPrice = finalstudioPrice - (finalstudioPrice * 0.05);
        console.log(`Apartment: ${finalFlatPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${finalstudioPrice.toFixed(2)} lv.`);  
        }
        else {
        console.log(`Apartment: ${finalFlatPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${finalstudioPrice.toFixed(2)} lv.`); 
        }
        
    } else if (month === "June" || month === "September"){
        studioPrice = 75.20;
        flatPrice = 68.70;
        finalstudioPrice = studioPrice * overnights;
        finalFlatPrice = flatPrice * overnights;
        if (overnights > 14) {
        finalstudioPrice = finalstudioPrice - (finalstudioPrice * 0.2);    
        finalFlatPrice = finalFlatPrice - (finalFlatPrice * 0.1);
        console.log(`Apartment: ${finalFlatPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${finalstudioPrice.toFixed(2)} lv.`);    
        }
        else {
        console.log(`Apartment: ${finalFlatPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${finalstudioPrice.toFixed(2)} lv.`); 
        }
    }
     else if (month === "July" || month === "August") {
        studioPrice = 76;
        flatPrice = 77;
        finalFlatPrice = flatPrice * overnights;
        finalstudioPrice = studioPrice * overnights;
        if(overnights > 14) {
        finalFlatPrice = finalFlatPrice - (finalFlatPrice * 0.1);
        console.log(`Apartment: ${finalFlatPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${finalstudioPrice.toFixed(2)} lv.`);    
        }
        else {
        console.log(`Apartment: ${finalFlatPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${finalstudioPrice.toFixed(2)} lv.`);     
        }
     }
}

hotelRoom(["May",
"15"])
