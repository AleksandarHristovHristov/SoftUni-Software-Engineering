function vowelsSum(input){
 const text = input[0];
 let result = 0;
 for (let i = 0; i < text.length; i++) {
     let letter = text[i];
    if (letter === "o") {
        result += 4;
    } else if(letter === "a") {
        result += 1;
    } else if (letter === "e") {
        result += 2;
    } else if (letter === "i") {
        result +=3;
    } else if (letter === "u"){
        result +=5;
    } 
 }
 console.log(result);
}
vowelsSum(["hello"])