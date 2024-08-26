// map reduce filter

// map

// const fruits = ["apple", "mango", "guava"];

// const newFruit = fruits.map((val)=>{
//     return val.toUpperCase();
// })

// console.log(newFruit);

// const users = [
//     {id:1, username: "Blank"},
//     {id:2, username: "Alice"},
//     {id:3, username: "Anna"},
//     {id:4, username: "Gray"},
// ];

// const userlist = users.map((user)=>user.id);
// console.log(userlist);

// forEach

// const result = [];
// users.forEach((user)=>{
//     result.push(user.username);
// });
// console.log(result);


// filter

// const employee = [
//     {id:1, user:"Anna", profile:"Developer"},
//     {id:2, user:"Alice", profile:"Animator"},
//     {id:3, user:"Gray", profile:"Animator"},
//     {id:4, user:"Mark", profile:"Marketing"},
//     {id:5, user:"Roman", profile:"Marketing"},
// ];

// const employeeRole = employee.filter((emp)=>{
//     console.log("Animator");
    
//     return emp.profile === "Animator";
    
// })

// console.log("Animator: " , employeeRole);

// reduce

// const score = [10,20,45,7];

// const total = (score)=>{
//     let sum =0;
//     for (let i=0; i<score.length; i++){
//         sum = sum+ score[i];
//     }
//     return sum;
// }

// console.log("Total Score: ", total(score));

// const totalScore = score.reduce((accumulator, value)=>{
//     return accumulator+value;
// })

// console.log("Total Score is: ", totalScore);

// combine

const employee = [
    {id:1, user:"Anna", profile:"Developer", rating1: 10, rating2: 10},
    {id:2, user:"Alice", profile:"Animator", rating1: 10, rating2: 10},
    {id:3, user:"Gray", profile:"Animator", rating1: 7, rating2: 9},
    {id:4, user:"Mark", profile:"Marketing", rating1: 8, rating2: 7},
    {id:5, user:"Roman", profile:"Marketing", rating1: 9, rating2: 8},
];

const animator = employee.filter((emp)=>{
    return emp.profile==="Animator";
})
console.log(animator);

const totalRating = animator.map((total)=>{
    return total.rating1+total.rating2;
})

console.log(totalRating);

const animatorTotal = totalRating.reduce((accumulator, value)=>{
    return accumulator+value
},0);

console.log(animatorTotal);