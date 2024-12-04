function computerFirm(input){
    let index = 0;
    const numOfComputers = Number(input[index]);
    index++;
    let counter = 0;
    let rating = 0;
    let sales = 0;
    let ratingSum = 0;
    let avgRating = 0;
    let salesSum = 0;
    while (counter < numOfComputers) {
      let num = Number(input[index]);
      index++;
      rating = num % 10;
      //console.log(rating);
      ratingSum += rating;
      sales = Math.floor(num / 10);
      //console.log(sales);
      switch (rating) {
        case 2:
              break;
        case 3:
              sales = sales * 0.5;
             // console.log(sales)
              salesSum += sales;
             break;
        case 4:
            sales = sales * 0.7;
            salesSum += sales; 
            break;
        case 5:
            sales = sales * 0.85;
            salesSum += sales;
             break;
        case 6:
            sales = sales;
            salesSum += sales;
                break;     
          default:
              break;
      }
      //console.log(salesSum);
    
      counter++;
        
    }
    console.log(salesSum.toFixed(2));
    avgRating = ratingSum / numOfComputers;
    
   console.log((avgRating).toFixed(2));
}


computerFirm([5
    ,122
    ,156
    ,202
    ,214
    ,185  
    ])