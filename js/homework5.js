//task 1
class circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;

    }
    getL() {
        return 2 * Math.PI * this.r;
    }
    static staticL(r) {
        return 2 * Math.PI * r;
    }
    getObj() {
        return new Circle(this.x, this.y, this.r);
    }
    static staticCircle(x, y, r) {
        return new Circul(x, y, r)
    }
    dotInCircle(x, y) {
        const ax = x - this.x;
        const ay = y - this.y;
        const distance = Math.sqrt(ax ** 2 + ay ** 2);
        return distance = this.r;
    }
    toString() {
        return `Circle O(${this.x},${this.y}, radius = ${this.r})`;
    }
}

//task 2

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
};
console.log(propsCount(mentor));

//task 3
class person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        console.log(this.name, this.surname)
    }
}
class student {
    constructor(name, surname, year) {
        this.name = name;
        this.surname = surname;
        this.year = year;
    }
    showFullName(midleName){
        return `${this.surname} ${this.name} ${midleName} `;
    }
    showCourse(year){
        return year - this.year;
    }
}
const stud1 = new student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse(2023));

//task 4
class Marker{
    constructor(color, ink){
        this.color = color;
        this.ink = ink;
    }
    druker(string){
        let fullInk = 0.5 * string.replace(" ", "").length;
        if(fullInk > this.ink){
            string = string.substring(0, this.ink * 2);
            this.ink = 0;
        }else{
            this.ink -= fullInk;
        }
        console.log(`%c${string}`, `color: ${this.color}`)
    }
}
class RefMarker extends Marker{
    constructor(color, ink, volume){
        super(color, ink);
        this.volume = volume;
    }
    refill(){
        this.ink = this.volume;
    }
}

let flomaster = new Marker("orange", 1);
flomaster.druker("Hello World!");
let refMarker = new RefMarker("green", 5, 20);
refMarker.druker("title TITLE Title title TITLE Title title TITLE Title");
refMarker.refill();
refMarker.druker("title TITLE Title title TITLE Title title TITLE Title");

//task 5
class Worker{
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this._experience = 1.2;
    }
    showSalary(){
        return this.dayRate * this.workingDays;
    }
    
    showSalaryWithExperience(experience){
       return this.dayRate * this.workingDays * this._experience;
    }
    get experience(){
        return this._experience;
    }
    set experience(value){
        this._experience = value;
    }
}
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(`${worker1.fullName} salary: ${worker1.showSalary()}`);
console.log(`New experience: ${worker1._experience}`);
console.log(`${worker1.fullName} salary: ${worker1.showSalaryWithExperience()}`);
worker1.experience = 1.5;
console.log(`New experience: ${worker1.experience}`);
console.log(`${worker1.fullName} salary: ${worker1.showSalaryWithExperience()}`);
let worker2 = new Worker("Mary Christmas", 100, 62);
console.log(worker2.fullName);
console.log(`${worker2.fullName} salary: ${worker2.showSalary()}`);
console.log(`New experience: ${worker2._experience}`);
console.log(`${worker2.fullName} salary: ${worker2.showSalaryWithExperience()}`);
worker2.experience = 1.5;
console.log(`New experience: ${worker1.experience}`);
console.log(`${worker2.fullName} salary: ${worker2.showSalaryWithExperience()}`);
let worker3 = new Worker("Lin Nill", 40, 30);
console.log(worker3.fullName);
console.log(`${worker3.fullName} salary: ${worker3.showSalary()}`);
console.log(`New experience: ${worker3._experience}`);
console.log(`${worker3.fullName} salary: ${worker3.showSalaryWithExperience()}`);
worker3.experience = 1.5;
console.log(`New experience: ${worker1.experience}`);
console.log(`${worker3.fullName} salary: ${worker3.showSalaryWithExperience()}`);
const workers = [worker1, worker2, worker3];
workers.sort((a, b)=> {
    return b.dayRate * b.workingDays * b.experience - a.dayRate * a.workingDays * a.experience;
});
workers.forEach(worker => {
    console.log(`${worker.fullName}: ${worker.dayRate * worker.workingDays * worker.experience}`)
})

