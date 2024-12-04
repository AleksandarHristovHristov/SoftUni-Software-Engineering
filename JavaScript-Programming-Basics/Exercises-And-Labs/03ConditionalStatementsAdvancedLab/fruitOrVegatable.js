function fruitOrVegatable(input) {
    let text = input[0];
   if (text === "banana" || text === "apple" || text === "kiwi" || text === "cherry" 
   || text === "lemon" || text === "grapes" ) {
       console.log("fruit");
   } else if (text === "tomato" || text === "cucumber" || text === "pepper" || text === "carrot") {
       console.log("vegetable");
   }else{
       console.log("unknown");
   }
}
fruitOrVegatable(["tomato"]);