function distanceBetweenPoints(x1,y1,x2,y2){
 let distance = 0;
 distance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2-y1) * (y2-y1));
 return distance;
}
distanceBetweenPoints(2,4,5,0)