function theatrePromotions(typeOfDay,age){
     let ticketPrice = 0;

     if (age >= 0 && age <= 18) {
         if (typeOfDay === 'Weekday') {
           ticketPrice = 12;
           console.log(`${ticketPrice}$`);  
         } else if (typeOfDay === 'Weekend') {
            ticketPrice = 15;
            console.log(`${ticketPrice}$`);  
         }
         else if (typeOfDay === 'Holiday') {
            ticketPrice = 5;
            console.log(`${ticketPrice}$`);
         }
     } else if(age > 18 && age <= 64){
        if (typeOfDay === 'Weekday') {
            ticketPrice = 18;
            console.log(`${ticketPrice}$`);  
          } else if (typeOfDay === 'Weekend') {
            ticketPrice = 20; 
            console.log(`${ticketPrice}$`); 
          }
          else if (typeOfDay === 'Holiday') {
            ticketPrice = 12;
            console.log(`${ticketPrice}$`);
          }
     }
     else if(age > 64 && age <= 122){
        if (typeOfDay === 'Weekday') {
            ticketPrice = 12;
            console.log(`${ticketPrice}$`);  
          } else if (typeOfDay === 'Weekend') {
             ticketPrice = 15;
             console.log(`${ticketPrice}$`);  
          }
          else if (typeOfDay === 'Holiday') {
             ticketPrice = 10;
             console.log(`${ticketPrice}$`);
          }
     }
     else {
         console.log('Error!');
     }
     
}
theatrePromotions('Weekday', 42 );