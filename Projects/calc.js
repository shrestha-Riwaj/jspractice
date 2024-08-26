const display = document.getElementById("input-box");

const appendToScreen = (input)=>{
    display.value += input;
}

const calculate = ()=>{
    try{
        display.value = eval(display.value)
    }catch(error){
        display.value = "Invalid operation";
        alert("Please use the complete operations");
    }
}

const clearDisplay = () =>{
    display.value=""
}

const previous = ()=>{
    
}