function skiTrip(input) {
    const roomForOnePersonPrice = 18.00;
    const apartmentPrice = 25.00;
    const presidentApartmentPrice = 35.00;

    const daysOfStaying = Number(input[0]);
    const accomodationType = input[1];
    const feedback = input[2];
    const nightsOfStaying = daysOfStaying - 1;
    let finalRoomForOnePersonPrice = roomForOnePersonPrice * nightsOfStaying;
    let finalApartmentPrice = apartmentPrice * nightsOfStaying;
    let finalPresidentApartmentPrice = presidentApartmentPrice * nightsOfStaying;

    if (daysOfStaying < 10) {
        switch (accomodationType) {
            case "room for one person":
                if (feedback === "positive") {
                    finalRoomForOnePersonPrice = finalRoomForOnePersonPrice + (finalRoomForOnePersonPrice * 0.25);
                    console.log(`${finalRoomForOnePersonPrice.toFixed(2)}`);
                } else {
                    finalApartmentPrice = finalRoomForOnePersonPrice - (finalRoomForOnePersonPrice * 0.1);
                    console.log(`${finalRoomForOnePersonPrice.toFixed(2)}`);
                }  
                break;
            case "apartment":
                finalApartmentPrice = finalApartmentPrice - (finalApartmentPrice * 0.3);
                if (feedback === "positive") {
                    finalApartmentPrice = finalApartmentPrice + ( finalApartmentPrice * 0.25);
                    console.log(`${finalApartmentPrice.toFixed(2)}`);
                } else {
                    finalApartmentPrice = finalApartmentPrice - ( finalApartmentPrice * 0.1);
                    console.log(`${finalApartmentPrice.toFixed(2)}`);
                }
                break;
            case "president apartment":
                finalPresidentApartmentPrice = finalPresidentApartmentPrice - (finalPresidentApartmentPrice * 0.1);
                if (feedback === "positive") {
                    finalPresidentApartmentPrice = finalPresidentApartmentPrice + (finalPresidentApartmentPrice * 0.25);
                    console.log(`${finalPresidentApartmentPrice.toFixed(2)}`);
                } else {
                    finalPresidentApartmentPrice = finalPresidentApartmentPrice - (finalPresidentApartmentPrice * 0.1);
                    console.log(`${finalPresidentApartmentPrice.toFixed(2)}`);
                }  
                break;
        }
    } else if (daysOfStaying >= 10 && daysOfStaying <= 15) {
        switch (accomodationType) {
            case "room for one person":
                if (feedback === "positive") {
                    finalRoomForOnePersonPrice = finalRoomForOnePersonPrice + (finalRoomForOnePersonPrice * 0.25);
                    console.log(`${finalRoomForOnePersonPrice.toFixed(2)}`);
                } else {
                    finalApartmentPrice = finalRoomForOnePersonPrice - (finalRoomForOnePersonPrice * 0.1);
                    console.log(`${finalRoomForOnePersonPrice.toFixed(2)}`);
                }  
                break;
            case "apartment":
                finalApartmentPrice = finalApartmentPrice - (finalApartmentPrice * 0.35);
                if (feedback === "positive") {
                    finalApartmentPrice = finalApartmentPrice + ( finalApartmentPrice * 0.25);
                    console.log(`${finalApartmentPrice.toFixed(2)}`);
                } else {
                    finalApartmentPrice = finalApartmentPrice - ( finalApartmentPrice * 0.1);
                    console.log(`${finalApartmentPrice.toFixed(2)}`);
                }
                break;
            case "president apartment":
                finalPresidentApartmentPrice = finalPresidentApartmentPrice - (finalPresidentApartmentPrice * 0.15);
                if (feedback === "positive") {
                    finalPresidentApartmentPrice = finalPresidentApartmentPrice + (finalPresidentApartmentPrice * 0.25);
                    console.log(`${finalPresidentApartmentPrice.toFixed(2)}`);
                } else {
                    finalPresidentApartmentPrice = finalPresidentApartmentPrice - (finalPresidentApartmentPrice * 0.1);
                    console.log(`${finalPresidentApartmentPrice.toFixed(2)}`);
                }  
                break;
        }
    } else if (daysOfStaying > 15){

        switch (accomodationType) {
            case "room for one person":
            if (feedback === "positive") {
                finalRoomForOnePersonPrice = finalRoomForOnePersonPrice + (finalRoomForOnePersonPrice * 0.25);
                    console.log(`${finalRoomForOnePersonPrice.toFixed(2)}`);
            } else {
                    finalApartmentPrice = finalRoomForOnePersonPrice - (finalRoomForOnePersonPrice * 0.1);
                    console.log(`${finalRoomForOnePersonPrice.toFixed(2)}`);
            } 
            break;
        case "apartment":
            finalApartmentPrice = finalApartmentPrice - (finalApartmentPrice * 0.5);
            if (feedback === "positive") {
                finalApartmentPrice = finalApartmentPrice + ( finalApartmentPrice * 0.25);
                console.log(`${finalApartmentPrice.toFixed(2)}`);
            } else {
                finalApartmentPrice = finalApartmentPrice - ( finalApartmentPrice * 0.1);
                console.log(`${finalApartmentPrice.toFixed(2)}`);
            }
            break;
        case "president apartment":
            finalPresidentApartmentPrice = finalPresidentApartmentPrice - (finalPresidentApartmentPrice * 0.2);
            if (feedback === "positive") {
                finalPresidentApartmentPrice = finalPresidentApartmentPrice + (finalPresidentApartmentPrice * 0.25);
                console.log(`${finalPresidentApartmentPrice.toFixed(2)}`);
            } else {
                finalPresidentApartmentPrice = finalPresidentApartmentPrice - (finalPresidentApartmentPrice * 0.1);
                console.log(`${finalPresidentApartmentPrice.toFixed(2)}`);
            }    
            break;
        }
    }
}

skiTrip(["14",
"apartment",
"positive"])

