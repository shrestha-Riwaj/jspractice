 
 const display = document.getElementById("display");

 const appendToDisplay=(input)=>{
    display.value += input;
 }

 const calculate = ()=>{
    try{
        display.value = eval(display.value)
    }catch(error){
        display.value = "Error";
    }
 }

 const clearDisplay = ()=>{
    display.value="";
 }