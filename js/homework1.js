/* tast 2 */
console.log('Kostrykova');

/* task 3 */
const apple = 4;
let tomato = 10;
console.log('apple: ', apple, 'tomato: ', tomato);
tomato = apple;
console.log('apple: ', apple, 'tomato: ', tomato);

/* task 4 */
let fruits = {
    title: 'pineapple',
    kg: 5,
    availability: false,
    boxNum: null,
    shop: undefined,
}
console.log(fruits);

/* task 5 */
isAdult = confirm("Якщо ви повнолітні натисніть ОК");
console.log(isAdult);

/* task 6 */
let name = 'Anastasiia';
let surname = 'Kostrykova';
let group = undefined;
let yearOfBirth = 2005;
let visitingCourse = true;
let city = null;
console.log('yearOfBirth: ', yearOfBirth, '; visitingCourse: ', visitingCourse, '; name: ', name, '; surname: ', surname, '; city:', city, '; group:', group);

/* task 7 */
let login = prompt('Enter your login please');
let mail = prompt('Your login is ' + login + '. Enter your e-mail');
let password = prompt('Your login is ' + login + '. Your e-mail is ' + mail + '. Enter your password');

/* task 8 */
let secInHour = 60 * 60;
let secInDay = 60 * 60 * 24;
let secInMonth = 60 * 60 * 24 * 30;
console.log(secInHour + ' seconds in hour')
console.log(secInDay + ' seconds in day')
console.log('±' + secInMonth + ' seconds in month')
