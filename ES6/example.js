// rock paper scissors

// const computer_choice = "scissor";
// const user_choice = "rock";

// win condition for computer
// let first = "rock";
// let second = "paper";
// let third = "scissor"

// lose condition for user
// let fourth = "scissor";
// let fifth = "rock";
// let sixth= "paper";

// if(computer_choice == first && user_choice==fourth){
// console.log("Computer win");
// }
// else{
//     console.log("User win");
// }

console.log("Starting Game: ")

const game = (user_choice, computer_choice, callback)=>{
    
    console.log("You picked: " + user_choice);
    console.log("Computer picked: " + computer_choice);
    number_of_turn  = 3;
    if (true){
        callback(user_choice, computer_choice);
    }
    
    
}

const winCondition = (user_choice, computer_choice,)=>{
    let chance = true;
    for(let i = 0; i<number_of_turn; i++){
        setTimeout(()=>{
            if((user_choice == "paper" && computer_choice == "scissor") || (user_choice == "paper" && computer_choice =="rock")||(user_choice == "scissor" && computer_choice == "paper")){
                console.log("Congratulation You win");
                chance = false;
                console.log("a");
            }
            else{
                console.log("You Lost! Better Luck Next Time ✌️");
                
            }
        }, 2000)
       
        
        
    }
    
    
}

game("rock", "scissor", winCondition);