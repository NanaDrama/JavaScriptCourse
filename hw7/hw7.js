// task 1
let screen = window.open('', '', 'width=300px, height=300px')
setTimeout(() => {
    screen.resizeTo(500, 500);
}, 2000);
setTimeout(() => {
    screen.moveTo(200, 200);
}, 4000)
setTimeout(() => {
    screen.close();
}, 6000);
// task 2
function changeCSS() {
    document.querySelector('p').style.color = 'orange';
    document.querySelector('p').style.fontWeight = '20px';
    document.querySelector('p').style.fontFamily = 'Comic Sans MS';
}
document.querySelector('button').addEventListener('click', changeCSS);
// task 3
function changeOne() {
    document.body.style.backgroundColor = 'blue'
}
document.querySelector('#change1').addEventListener('click', changeOne)
function changeTwo() {
    document.body.style.backgroundColor = 'pink'
}
document.querySelector('#change2').addEventListener('dblclick', changeTwo)

let isPressed = false;
document.querySelector('#change3').addEventListener('mousedown', () => {
    isPressed = true;
    document.body.style.backgroundColor = 'brown';
});

document.querySelector('#change3').addEventListener('mouseup', () => {
    isPressed = false;
    document.body.style.backgroundColor = 'white';
});

document.addEventListener('mouseup', () => {
    if (isPressed) {
        document.body.style.backgroundColor = 'brown';
    }
});
document.querySelector('a').addEventListener('mouseover', () => {
    document.querySelector('#div').style.backgroundColor = 'yellow';
});

document.querySelector('a').addEventListener('mouseout', () => {
    document.querySelector('#div').style.backgroundColor = 'white';
});
// task 4
let names = document.querySelector('#names')
let del = document.querySelector('#delete')
del.addEventListener('click', () => {
    const newOption = names.options[names.selectedIndex];
    names.removeChild(newOption);
});
// task 5
const livebtn = document.querySelector('#live');
const output = document.querySelector('#output')
livebtn.addEventListener('mouseover', () => {
    const newP = document.createElement("p");
    newP.innerText = "Mouse on me!";
    output.appendChild(newP);
});
livebtn.addEventListener('mouseout', () => {
    const newP = document.createElement("p");
    newP.innerText = "Mouse is not on me!";
    output.appendChild(newP);
});
livebtn.addEventListener('click', () => {
    const newP = document.createElement("p");
    newP.innerText = "I was pressed!";
    output.appendChild(newP);
})
//task 6
window.onresize = function() {
    document.getElementById('width').innerHTML = window.innerWidth;
    document.getElementById('height').innerHTML = window.innerHeight;
}
//task 7

const cities = {
    ger: ["Berlin", "Munich", "Hamburg"],
    usa: ["New York", "Los Angeles", "Chicago"],
    ukr: ["Kyiv", "Lviv", "Odesa"]
};
const countrySelect = document.getElementById("country");
const citiesSelect = document.getElementById("cities");
const selected = document.getElementById("selected");

function addCities() {
    const selectedCountry = countrySelect.value;
    citiesSelect.innerHTML = "";
    cities[selectedCountry].forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.text = city;
        citiesSelect.appendChild(option);
    });
}

countrySelect.addEventListener("change", addCities);

citiesSelect.addEventListener("change", () => {
    const selectedCity = citiesSelect.value;
    selected.innerText = `Selected country: ${countrySelect.options[countrySelect.selectedIndex].text}, Selected city: ${selectedCity}`;
});

