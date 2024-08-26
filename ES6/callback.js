console.log("Starting Callback!!!");

// normal callback
const greet = (user, callback)=>{
    console.log("Hello " + user);
    callback(user);
}

const welcome = (val)=>{
    console.log("Welcome " + val);
}

greet("Blank", welcome);

// callback with async

const task = (num1, num2, callback)=>{
    setTimeout(()=>{
        console.log(`Number we are adding are: ${num1} and ${num2}`);
    callback(num1,num2);
    }, 2000);
}

const addTwo = (a, b)=>{
    console.log(`Additioon between ${a} and ${b} is: ${a+b}`);
}

task(2,3, addTwo)
console.log("Callback with async example: ");


const fetchUserData = (userId, callback)=>{

    setTimeout(()=>{
        const users = {
            1: {id:1, userName: "Tom"},
            2: {id:2, userName: "Jerry"},
        }
        const user = users[userId];
        if(user){
            callback(null, user.userName)
            
        }
        else{

            callback("Error Found" , null)
        }
        
    }, 5000)

}

const handleUserData = (error, user)=>{
    if(error){
        console.log("Error: " + error);
    }
    else{
        console.log("User found: " + user);
    }
}

fetchUserData(1, handleUserData);