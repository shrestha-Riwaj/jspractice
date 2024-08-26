// Synchronous Programming

// const prompt = require('prompt-sync')();

// let name = prompt("What is your name?: ");
// let age = prompt("What is your age?: ");
// let color = prompt("What is your fav color?: ");

// let sentence = console.log(`${name} is ${age} years and fav color is ${color}`);


// Asynchronous Programming

console.log("Start");
setTimeout(function(){
console.log("Runing after 3 seconds");
}, 3000);
console.log("End");

let promise = new Promise(function(resolve, reject){
    console.log("This is promise");
    resolve(24);
});

console.log(promise);