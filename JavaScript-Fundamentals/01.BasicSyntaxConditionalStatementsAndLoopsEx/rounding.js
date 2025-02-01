function rounding(num,precision){
    if (precision > 15){
        precision = 15;
    }
    console.log((parseFloat(num.toFixed(precision))));
    
}

rounding(10.54125315535131,3);
rounding(3.1415926535897932384626433832795,2);