console.log("Starting Async and Await");

// const weatherDisplay = async ()=>{
//     let weather1 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("20 Deg");
//         }, 2000);
//     });
    

//     let weather2 = new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("32 Deg");
//         }, 4000);
//     })

//     console.log("Fetching Weather One......... ");
//     let w1 =await weather1;
//     console.log("Fetched Weather One: " + w1);
//     console.log("Fetching Weather Two......... ");
//     let w2 =await weather2;
//     console.log("Fetched Weather Two: " + w2);
//     return [w1, w2];
// }

// console.log("Today's Weather is: ");

// const greeting = async()=>{
//     setTimeout(()=>{
//         console.log("Good Morning!!!");
//     },3000);
    
// }

// let display = weatherDisplay();
// console.log(display);
// display.then((value)=>{
//     console.log(value);
// })

// greeting();

// const multipleFunc = async ()=>{
//     const weatherDisplay = async ()=>{
//         let weather1 = new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 resolve("20 Deg");
//             }, 2000);
//         });


    
//         let weather2 = new Promise ((resolve, reject)=>{
//             setTimeout(()=>{
//                 resolve("32 Deg");
//             }, 4000);
//         })
    
//         console.log("Fetching Weather One......... ");
//         let w1 =await weather1;
//         console.log("Fetched Weather One: " + w1);
//         console.log("Fetching Weather Two......... ");
//         let w2 =await weather2;
//         console.log("Fetched Weather Two: " + w2);
//         return [w1, w2];
//     }
    
//     console.log("Today's Weather is: ");
    
//     const greeting = async()=>{
//         setTimeout(()=>{
//             console.log("Good Morning!!!");
//         },3000);
        
//     }
    
//     let display = await weatherDisplay();
//     console.log(display);
    // display.then((value)=>{
    //     return value;
    // })
    
//    let greet = await greeting();
//    console.log(greet);
    
// }

// let result = multipleFunc();
// console.log(result);


// console.log("Match timing: ");


// const matchTime = async ()=>{
//     let match1 = new Promise ((resolve, reject)=>{

//         setTimeout(()=>{
//             resolve("Match starts at 4:00 Pm");
//         }, 2000);
//     });
    
//     let match2 = new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//             resolve("Match starts at 7:45 Pm");
//         }, 4000);
//     })
    
//     console.log("Searching match one time...........");
//     let m1 =await match1;
//     console.log(match1);
//     console.log("Searching match two time...........");
//     let m2 =await match2;
//     console.log(match2);
//     return [m1, m2];
// }

// console.log("Today's match starts at: ");
// let display1 = matchTime();
// display1.then((val)=>{
//     return val;
// })
// console.log(matchTime);


const matchDetail =async ()=>{
    let firstMatch = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("First Match between Barcelona and Real Madrid");
        },2000)
    })

    let secondMatch = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Second Match between ManCity and ManU");
        },4000)
    });

    console.log("Which team has the first match: ");
    let m1 =await firstMatch;
    console.log("Match Detail: " + m1);
    console.log("Which team has the second match: ");
    let m2 =await secondMatch;
    console.log("Match Detail: " + m2);
    return [m1, m2]
}

const greeting = ()=>{
    console.log("Welcome to the stadium.");
}

let showMatch = matchDetail();
greeting();