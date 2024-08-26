// dynamic - meaning can change the variable type in runtime
// static - meaning we have to define the datatype for our variable before initializing it

// variable

// let userName = "Blank";
// console.log(`Username is: ${userName}`);
// console.log( "Type of username is: " + typeof userName);
// scope

// var = can redefined as well as reinitialized
// var a = 12;
// console.log("Value of a: "+ a);
// a=13;
// console.log("Value of a: "+ a);
// {
//     var a = 13;
//     console.log("Value of a: "+ a);
// }
// console.log("Value of a: "+ a);

// let = cant redefined but can reinitialized

// let b = 11;
// console.log("Value of b: "+ b);
// b=14;
// console.log("Value of b: "+ b);
// {
//     let b=9;
//     console.log("Value of b: "+ b);
// }
// console.log("Value of b: "+ b);

// const = can't redefined or reinitializec

// const c = 17;
// console.log("Value of c: "+ c);
// c=19;
// console.log("Value of c: "+ c);
// {
//     const c = 20;
//     console.log("Value of c: "+ c);
// }
// console.log("Value of c: "+ c);

// types

// Primitive

let q = null;
let w = 90;
let e = "name";
let r = Symbol("symbol");
let t = BigInt(345);
let y = undefined;
let u;

console.log(`Value of q is: ${q} and type is ${typeof q}`);
console.log(`Value of w is: ${w} and type is ${typeof w}`);
console.log(`Value of e is: ${e} and type is ${typeof e}`);
// console.log(`Value of r is: ${r} and type is ${typeof r}`);
console.log(`Value of t is: ${t} and type is ${typeof t}`);
console.log(`Value of y is: ${y} and type is ${typeof y}`);
console.log(`Value of u is: ${u} and type is ${typeof u}`);

// Non-primitives - Objects

const items = {
    one: "Username",
    two: "email",
    three: false,
    four: undefined
}

console.log(items);
console.log("Symbol:  ...." , r);
console.log(`Type of r is ${typeof r}`);