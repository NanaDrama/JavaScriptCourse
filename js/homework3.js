/* task 1 */
function compact(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i+=1) {
      if (result.includes(arr[i])) {
        continue;
      }else{
          result.push(arr[i]);
      }
    }
    return result;
  }
  
  const arr = [5, 3, 4, 5, 6, 7, 3];
  const arr2 = compact(arr);
  console.log(arr2); 
/* task 2 */
 let createArray = [2, 9];
 let array = [];
 for( i = createArray[0]; i<= createArray[1]; i += 1){
     array.push(i);
 }
  console.log(array);
/* task 3 */
 let a = prompt('put a');
 let b = prompt('put b');
 let c = [];
 if(a >= b){
     alert('a must be smaller than b')
 }else{
     a = Number(a);
     b = Number(b);
     for(let i = a; i <= b; i++) {
        const count = i - a + 1;
        for(let j = 0; j < count; j++) {
          c.push(i);
        }
      }
 console.log(c);
 }
/* task 4 */
 function randArray(k){
 let randomArray = [];
     for(let i = 0; i<k; i++){
         randomArray.push(Math.floor(Math.random()*(501 - 1)));
 }
 return randomArray;
 }
 let k = prompt('put k');
 let newRandArray = randArray(k);
 console.log(newRandArray);
/* task 5 */
function funcName(arr) {
    let flatArr = arr.flat();
    let numArray = [];
    let stringArray = [];
    for (let i = 0; i < arr.length; i += 1) {
        let item = flatArr[i];
        if (typeof item === "number") {
            numArray.push(item);
        } else {
            stringArray.push(item);
        }
    }
    let result = [];
    result.push(numArray);
    result.push(stringArray);
    return result;
}
let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
console.log(funcName(arr));
/* task 6 */
let first = Number(prompt("Введіть число a"));
let second = Number(prompt("Введіть число b"));
let op = prompt("Введіть операцію(1=-;2=*;3=/; інше +");
let res5 = calc(first, second, op);

function calc(first, second, op) {
    let result;
    if (op == 1) {
        result = first - second;
    } else if (op == 2) {
        result = first * second;
    } else if (op == 3) {
        result = Math.floor((first / second) * 1000) / 1000;
    } else {
        result = first + second;
    }
    return result;
}

console.log(res5);

/* task 7 */

function findUnique() {
    let int = prompt("Введіть масив");
    let array = int.split(",").map(item => parseInt(item.trim()));
    const count = {};

    for (let i = 0; i < array.length; i+=1) {
        let number = array[i];
        if (count[number] === undefined) {
            count[number] = 1;
        } else {
            count[number]++;
        }
    }
        for (let key in count) {
            if (count[key] > 1) {
                return false;
            }
        }

        return true;
    }

console.log(findUnique());
