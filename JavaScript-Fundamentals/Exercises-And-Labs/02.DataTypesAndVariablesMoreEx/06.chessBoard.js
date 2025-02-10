function chessBoard(num){
let result = '<div class="chessboard">\n';
for (let i = 0; i < num; i++) {
    result += '  <div>\n';
    for (let k = 0; k < num; k++) {
        if(i % 2 === 1){
            if (k % 2 === 0) {
                result += '    <span class="white"></span>\n';   
               } else {
                result += '    <span class="black"></span>\n';    
               }    
        }
         else if (k % 2 === 0) {
            result += '    <span class="black"></span>\n';   
           } else {
            result += '    <span class="white"></span>\n';    
           }    
        
    }
    result += '  </div>\n'
}
result +='</div>';
console.log(result);
}
chessBoard(3);