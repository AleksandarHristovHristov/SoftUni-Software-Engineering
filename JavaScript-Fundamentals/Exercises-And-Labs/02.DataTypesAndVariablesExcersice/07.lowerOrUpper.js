function lowerOrUpper(char){
    let charCode = char.charCodeAt(0);
    console.log(charCode);
    if (charCode >= 97 && charCode <= 122) {
        console.log('lower-case');
    }else if(charCode >= 65 && charCode <= 122){
        console.log('upper-case');
        
    }
}
lowerOrUpper('a');