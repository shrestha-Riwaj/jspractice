// let promise = new Promise((resolve, reject)=>{
//     console.log("New Start");
//     resolve(50);
// })

// console.log("First Start");
// setTimeout(()=>{
//     console.log("Second Start");
// },2000);
// console.log("Third Start");

// console.log("Start Promise");
// let p = new Promise((resolve, reject)=>{
// setTimeout(()=>{
//     // console.log("Promise resolved");
    
//     resolve(true);
   
// }, 3000)
// });

// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
        
//         // console.log("Promise rejected");
//         reject(new Error("Promise rejected"));
//     }, 3000)
//     });

// console.log(p);

// p.then((value)=>{
//     console.log(value);
// });

// p1.catch((error)=>{
//     console.log("Error occured");
// })

// p1.then((value)=>{
//     console.log(value);
// },
// (error)=>{
//     console.log(error);
// })

// Promise chaining

let p1 = new Promise((resolve, reject)=>{
    console.log("Start Promise");
    setTimeout(()=>{
        console.log("Resolved");
        resolve(25);
    }, 2000);
});

p1.then((value)=>{
    console.log(value);
    let p2 = new Promise((resolve, reject)=>{
        // console.log("Another promise inside then");
        // resolve(12);
        setTimeout(()=>{
            resolve("done1!!");
        },2000);
    },
    );
    return p2;
}).then((value)=>{
    console.log("Last resolved");
    return 2
}).then((value)=>{
    console.log("final resolved!!!");
    console.log(value)
})