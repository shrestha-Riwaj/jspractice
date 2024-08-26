// 1. Map Filter Reduce

// let numbers = [1,5,12,7];

// const tranformArray = numbers.map((num)=>{
//     return num*2;
// }).filter((num)=>{
//     return num > 10;
// }).reduce((accumulator, value)=>{
//     return accumulator+value
// }, 0);


// let result = tranformArray;
// console.log(result);


// 2. Closures and Higher-Order Functions

// const createCounter = (start, step, callback) =>{
//     const getCurrent = ()=>{
//         return `Current Value is ${callback(start)}`;
//     }
//     const increment = ()=>{
//         return `Value after increment is: ${callback(start,step)}`;
//     }
//     const obj = {
// get:getCurrent(),
// inc:increment()
//     }
//     return callback(obj.get, obj.inc);
// }

// const getCurrent = (num) =>{

//     let startValue = num;
//     return startValue;
// }

// const obj1 = (get, inc)=>{
//     let obj={
//         get:get,
//         inc:inc,
//     }
//     return obj
// }
// const increment = (start, step,)=>{
//     let increase = start+step;
//     return increase;
// }

// let counter = createCounter(20,3,obj1);
// console.log(counter.get);
// console.log(counter.inc);

// correct soln 

// const createCounter = (start, step) =>{
//     let currentValue = start;

//     const getCurrent = ()=> currentValue;

//     const increment = ()=>{
//         currentValue += step;
//         return currentValue;
//     };

//     return {
//         get:getCurrent,
//         inc:increment,
//     }
// }

// let counter = createCounter(2,3);
// console.log(counter.get());
// console.log(counter.inc());
// console.log(counter.inc());
// console.log(counter.get());

// 3. Async/ Await

const userdata = {
    name: "Blank",
    email: "b@gmail.com",
}

const fetchUserData = async ()=> {
    try{
        let p = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let success = true;
                if(success){
                    resolve(userdata.name)
                }
                else{
                    reject("Error")
                }
            }, 2000);
        });
        return p;
    }catch(error){
        console.error(error);
    }
} ;

fetchUserData().then((data)=>{
    if(data){
        console.log(`Fetched user data: ${data}`);
    }
})