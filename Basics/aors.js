// array object rest spread

let a = [3, 5];
// let b = [1,2,3];
let b = [1,];
let [num1, num2] = a;
let [num3, num4] = b;
console.log(num1);
console.log(num3, num4);

let arr = ["hello", 10, "football"];
const [aq,bw]= arr;
const [q,w,...args] = arr;
console.log(aq, bw);