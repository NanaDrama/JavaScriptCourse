// task 1
let list = document.getElementById("list");
const elem1 = list.firstElementChild.textContent;
const elem2 = list.lastElementChild.textContent;
const elem3 = list.children[1].textContent;
const elem4 = list.children[3].textContent;
const elem5 = list.children[2].textContent;
console.log(elem1, elem2, elem3, elem4, elem5);
// task 2
document.querySelector("h1").style.backgroundColor = "springgreen";
document.querySelector("p").style.fontWeight = "bold";
document.querySelector("#myDiv").children[1].style.color = "red";
document.querySelector("#myDiv").children[2].style.textDecoration = "underline";
document.querySelector("#myDiv").children[3].style.fontStyle = "italic";
const myList = document.querySelector("#myList");
myList.style.display = "flex";
myList.style.listStyle = "none";
document.querySelector("span").style.color = "transparent";
// task 3

const main = document.createElement("main");
main.setAttribute("class", "mainClass check item");
const div = document.createElement("div");
div.setAttribute("id", "myId");
const p = document.createElement("p");
const text = document.createTextNode("First paragraph");
p.appendChild(text);
div.appendChild(p);
main.appendChild(div);
document.documentElement.appendChild(document.body.appendChild(main));
// task 4 look next js file