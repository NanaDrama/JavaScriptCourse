//task 1
let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
    fifth: "Name №5"
};
let {first: f, third:x, fifth} = names;
console.log(f); 
console.log(x); 
console.log(fifth);

//task 2
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};
let {names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4]} = data;
console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4); 

//task 3
function mul(...arguments) {
    let result = 1;
    for (let arg of arguments){
        if (typeof arg === 'number'){
            result *= arg;
        }
    }
    return result;
}
console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));

//task 4
let server = {
    data: 0,
    convertToString: function(callback) {
    callback(() => {
    return this.data + "";
    });
    }
    };
    
    let client = {
    server: server,
    result: "",
    calc: function(data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
    },
    notification: function() {
    return (callback) => {
    this.result = callback();
    };
    }
    };
    
    client.calc(123);
    console.log(client.result);
    console.log(typeof client.result); 
//task 5
function mapBuilder(keysArray, valuesArrays) {
    const map = new Map(); 
    keysArray.forEach((key, index) => {
        map.set(key, valuesArrays[index])
    });
    return map
}
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); 
console.log(map.get(2)); 

//task 6
let arr = [];

for (let i = 0; i <= 2; i++) {
   arr[i] = (function (j) {
      return function () {
         console.log(j);
      };
   })(i);
}
arr[0]();
arr[arr.length - 1](); 
