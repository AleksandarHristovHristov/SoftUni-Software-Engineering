function cone(radius,height){
let volume = (Math.PI * radius * radius * height) / 3;
let slantHeight = Math.sqrt(radius * radius + height * height);
let lateralSurfaceArea = Math.PI * radius * slantHeight;
let baseSurfaceArea = Math.PI * radius * radius;
let totalSurfaceArea = lateralSurfaceArea + baseSurfaceArea;

console.log(`volume = ${volume.toFixed(4)}`);
console.log(`area = ${totalSurfaceArea.toFixed(4)}`);

}
cone(3,5)