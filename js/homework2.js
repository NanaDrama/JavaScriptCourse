/* task 1 */
let a;
let b;
let c;
if( a < b & b < c){
    console.log('Вираз правильний');
}else{
    console.log('Вираз неправильний')
}

/* task 2 */
let x = 1;
let y = 2;
let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);
let res2 = Boolean(String(x)) + String(y);
console.log(res2);
console.log(typeof res2); 
let res3 = Boolean(x + y);
console.log(res3);
console.log(typeof res3);
let res4 = Number('x') + Number('y');
console.log(res4);
console.log(typeof res4); 

/* task 3 */
let isAdult = prompt('Якщо ви повнолітні натисніть ОК');
if( isAdult >= 18){
    alert('Ви досягли повноліття')
}else{
    alert('Ви ще занадтол молоді')
}

/* task 4 */
/* task 5 */
let ta = prompt('Введіть довжину сторони a');
let tb = prompt('Введіть довжину сторони b');
let tc = prompt('Введіть довжину сторони c');
let p = (ta + tb + tc) / 2;
let s = Math.sqrt(p * (p - ta) * (p - tb) * (p - tc));
console.log('Площа трикутника: ' + s);
if(ta ** 2 == tc ** 2 + tb ** 2 || tc ** 2 == ta ** 2 + tb ** 2 || tb ** 2 == ta ** 2 + tc ** 2){
    console.log('Трикутник прямокутний');
}else{
    console.log('Трикутник не прямокутний')
}
/* task 6 */
