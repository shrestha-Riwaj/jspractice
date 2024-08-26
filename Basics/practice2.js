num = [12,3,45,23,48];
let result;

// map
//  Write a function doubleNumbers that takes an array of numbers and returns a new array where each number
//  is doubled. Use the map method for this transformation.

console.log("Map Question: ");

const doubleNumbers = (doubleNum)=>{
    console.log(`Before doubling: ${doubleNum}`);
}
doubleNumbers(num);

const newDouble = num.map((num)=>{
    return num * 2;
})

result = newDouble;

console.log(`After doubling: ${result}`);

// Filter

// Write a function filterEvenNumbers that takes an array of numbers
// and returns a new array containing only the even numbers.
// Use the filter method to achieve this

console.log("Filter Question: ");

const filterEvenNumbers = num.filter((num)=>{
    if(num%2==0){
        return num
    }
})
console.log(`Before filtering ${num}`);
result = filterEvenNumbers;
console.log(`After filtering ${result}`);

// Reduce
// Write a function sumArray that takes an array of numbers and returns the sum of all numbers in the array. Use the reduce method for this calculation.

const sumArray = num.reduce((accumulator, value)=>{
    return accumulator+value;
},0)

console.log(`Before using reduce: ${num}`);
result = sumArray;
console.log(`After using reduce: ${result}`);


// Combing map filter and reduce

const combineThree = num.map((num=>num*2)).filter((num=>(num%2==0))).reduce((accumulator, value)=>{
    return accumulator+value
});
console.log(`Combining map, filter and reduce: ${combineThree}`);

// 4. Closure
// Question: Write a function createMultiplier that takes a number factor and returns a new function.
// This returned function should take another number and multiply it by factor.
// Demonstrate this with an example.

const createMultiplier = (factor)=>{
    const func1 = (num)=>{
        return num*factor
    }
    return func1(2)
}

console.log("Returing the func... ", createMultiplier(4));

// 5. Callback
// Question: Write a function processArray that takes an array and a callback function. It should apply the callback function to each element in the array and return a new array of results. Provide an example of using this function with a simple callback.


const processArray = (arr, callback)=>{
    console.log("Array of numbers: ", arr);
    callback(arr);
}

const multiplyArray = (num)=>{
    let store = [];
    for (let i=0; i<num.length;i++){
        
        store.push(num[i]*2);
    }
    console.log(`After callback: ${store}`);
}

processArray(num, multiplyArray)

// 6. Async/Await
// Question: Write an async function fetchData that simulates fetching data from an API. Use await to handle the promise returned by a simulated fetch function (which could be a function that returns a promise). Return the data and handle any errors that might occur.


// 7. Rest Parameter
// Question: Write a function concatenateStrings that takes a variable number of string arguments and concatenates them into a single string separated by spaces. Use the rest parameter to handle the variable number of arguments.


// 8. Spread Operator
// Question: Write a function mergeObjects that takes two objects and returns a new object that combines the properties of both. Use the spread operator to merge the objects.


// 9. Array Destructuring
// Question: Write a function getFirstAndLast that takes an array and returns an object with properties first and last, representing the first and last elements of the array, respectively. Use array destructuring to accomplish this.


// 10. Object Destructuring
// Question: Write a function extractUserInfo that takes an object with properties name, age, and email. Use object destructuring to extract these properties and return a string in the format: "Name: [name], Age: [age], Email: [email]".

