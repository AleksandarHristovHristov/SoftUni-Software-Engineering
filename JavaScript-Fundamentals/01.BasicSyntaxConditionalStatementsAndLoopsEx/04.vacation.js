function vacation(numOfGroup,typeOfGroup,dayOfWeek){
    let price = 0;
    if (typeOfGroup === 'Students') {
        if (dayOfWeek === 'Friday') {
            price = numOfGroup * 8.45;
        } else if(dayOfWeek === 'Saturday'){
            price = numOfGroup * 9.80;
        }else if(dayOfWeek === 'Sunday'){
            price = numOfGroup * 10.46;
        }
        if(numOfGroup >= 30){
            price = price - (price * 0.15);
        }
        console.log(`Total price: ${price.toFixed(2)}`);
    } else if(typeOfGroup === 'Business'){
        if (dayOfWeek === 'Friday') {
            price = numOfGroup * 10.90;
        } else if(dayOfWeek === 'Saturday'){
            price = numOfGroup * 15.60;
        }else if(dayOfWeek === 'Sunday'){
            price = numOfGroup * 16;
        }
        if(numOfGroup >= 100){
            if (dayOfWeek === 'Friday') {
                price = price - (10 * 10.90);
            } else if (dayOfWeek === 'Saturday') {
                price = price - (10 * 15.60);
            } else if(dayOfWeek === 'Sunday'){
                price = price - (10 * 16);
            }
        }
        console.log(`Total price: ${price.toFixed(2)}`);
        
    } else if(typeOfGroup === 'Regular'){
        if (dayOfWeek === 'Friday') {
            price = numOfGroup * 15;
        } else if(dayOfWeek === 'Saturday'){
            price = numOfGroup * 20;
        }else if(dayOfWeek === 'Sunday'){
            price = numOfGroup * 22.50;
        }
        if (numOfGroup >= 10 && numOfGroup <= 20) {
            price = price - (price * 0.05);
        }
        console.log(`Total price: ${price.toFixed(2)}`);
    }

}
vacation(40, 

    "Regular", 
    
    "Saturday")