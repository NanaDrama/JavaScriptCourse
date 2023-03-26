//task 1
 let arr = prompt("Введіть масив:");
 let result;
 let first = prompt("Введіть перше число");
 let second = prompt("Введіть друге число");
 function sumSliceArray(arr, first, second) {
     arr = arr.split(",").map(item => parseInt(item.trim()));
     if (second > arr.length || first < 0 || second < 0) {
         alert("У масиві немає такого номеру");
     } else {
         result = arr[first] + arr[second];
         return result;
     }
 }
 console.log(sumSliceArray(arr, first, second));

//task 2
function chackAge() {
    let userName = prompt("Як вас звати?");
    let userAge = prompt("Скільки вам років?");
    const stat = ["admin", "moderator", "user", "модератор", "адмін", "користувач"];
    let userStatus = prompt("Введіть ваш статус(наприклад 'адмін', 'модератор' або 'користувач'");
    if (userAge < 18 || userAge > 70) {
        throw new RangeError("Range Error!");
    } else if (!userName || !userAge || !userStatus) {
        throw new Error("The field is empty! Please enter everything");
    } else if (!stat.includes(userStatus)) {
        throw new EvalError("Eval Error!");
    } else if (typeof userAge !== "number") {
        throw new EvalError("Age is not a number!")
    }
}
chackAge();
// task 3
let widthA = parseFloat(prompt("Введіть ширину"));
let heightB = parseFloat(prompt("Введіть висоту"));
function calcRectangleArea(widthA, heightB) {
    if (typeof widthA !== 'number' || typeof heightB !== 'number') {
        throw new TypeError('Це не числа');
    }
    return widthA * heightB;
}

try {
    console.log(calcRectangleArea(widthA, heightB));
} catch (e) {
    console.log(e);
}
//task 4 
class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = "MonthException";
    }
}
let month = parseFloat(prompt("put month num"));
function showMonthName(month) {
    if (typeof month !== 'number' || month < 1 || month > 12) {
        throw new MonthException("Incorrect month number")
    }

    try {
        console.log(showMonthName(month));
    } catch (exeption) {
        console.log(exeption.name, exeption.message);
    }
}
//task 5 
function showUser(id) {
    if (id < 0) {
        throw new Error("Id має бути додатнім!")
    }
    return { id }
}
function showUsers(ids) {
    return ids.map((element) => {
        try {
            return showUser(element)
        } catch (exeption) {
            console.log(exeption.name, exeption.message, element);
        }
    }).filter((elem) => {
        return elem;
    });
}
console.log(showUsers([7, -12, 44, 22]))
