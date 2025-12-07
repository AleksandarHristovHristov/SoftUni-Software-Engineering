function nextDay(year,month,day){

let date = new Date(year,month - 1,day + 1);
let result = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
return result;

}
nextDay(2016, 9, 30);