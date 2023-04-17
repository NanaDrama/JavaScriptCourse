//task 1
function upperCase(str) {
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
        return "String's starts with uppercase character";
    } else {
        return "String's not starts with uppercase character";
    }
}
function checkFirstLetter() {
    let input = document.getElementById("input").value;
    let result = document.getElementById("result");
    result.innerHTML = upperCase(input);
}
document.querySelector('#checkbtn1').addEventListener('click', checkFirstLetter)
// task 2
function checkEmail() {
    let email = document.getElementById("email").value;
    let res = document.getElementById("res");
    if (email.endsWith("@gmail.com")) {
        res.innerHTML = "Well";
    } else {
        res.innerHTML = "PUT YOUR EMAIL!!!";
    }
}
document.querySelector('#checkbtn2').addEventListener('click', checkEmail)
// task 3
function returnChanges() {
    let change = document.querySelector('#change').value;
    let words = change.split(" ");
    let changeresult = document.querySelector('#changeresult');
    changeresult.innerHTML = words[1] + ", " + words[0];
}

document.querySelector('#changebtn').addEventListener('click', returnChanges);
// task 4
function validateCard(card) {
    const validate = /\d{4}(\s|-)\d{4}(\s|-)\d{4}(\s|-)\d{4}/
    return validate.test(card);
}
console.log(validateCard('9999 9998 9999 9999'));

//task 5
function mail(email) {
    const mail = /^[a-zA-Z0-9]+[-_]?\w+@[a-zA-Z]+\.[a-zA-Z]+/;

    if (mail.test(email)) {
        console.log("Email is correct!");
    } else {
        console.log("Email is not correct!")
    }

    return mail.test(email);
}
console.log(mail('my_mail@gmail.com'));
console.log(mail('#my_mail@gmail.com'));
console.log(mail('-@gmail.com'))
console.log(mail('my_ma--il@gmail.com'));
// task 6
function checkLogin(login) {
    if (login.length < 2 || login.length > 10) {
        return false;
    }
    if (!isNaN(login[0])) {
        return false;
    }
    var regex = /[+-]?\d+(\.\d+)?/g;
    var matches = login.match(regex);
    console.log(matches);
    return true;
}
console.log(checkLogin('ee1.1ret3'))
console.log(checkLogin('ee1*1ret3'))