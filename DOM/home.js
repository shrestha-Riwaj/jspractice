// const text = document.getElementById("para-text");
// console.log(`Displaying our html content: ${text.innerHTML}`);

// text.innerHTML = "New Hello !!!"
// console.log(`Changing our HTML content: ${text.innerHTML}`);
// console.log(document.getElementsByClassName("new-text"));
// console.log(document.getElementsByTagName("h1"));

// // const container = document.getElementById("container");
// // const para = container.getElementsByClassName("1");
// // console.log(container);
// // console.log(para[1].innerHTML);
// // console.log(`All paragraph with same classname: ${para.innerHTML}`);

// const classname1= document.getElementsByClassName("one");
// console.log(`Displaying class name: ${classname1.innerHTML}`);

// // doesn't work?????? need to pass index
// // // classname1.innerHTML= "hello";
// // console.log(container.getElementsByClassName("one"));
// // document.getElementsByTagName("p").innerHTML = "adas"

// const select = document.querySelectorAll("p");
// console.log(select);
// console.log(select.length);

// // html obejct property
// // const form_value = document.forms["formid"];
// // let input = "";
// // for(let i=0; i<form_value.length; i++){
// //     input += form_value.elements[i].value + "<br>";
// // }

// document.getElementById("demo").innerHTML = input;

// // changing value of an attribute
// let img1 = document.getElementById("myimg");
// img1.src = "images/laptop2.png";

// // dynamic content

// let demo1 = document.getElementById("demo1");
// demo1.innerHTML = "Date: " + Date();
// document.write(`Hello: ${Date()}`)

// // form validate
// // const formValidate = ()=>{
// //     let form_value = document.forms["formid"]["fname"].value;
// //     if(form_value===""){
// //         alert("enter a value");
// //         return false;
// //     }
// // }

// // function validateForm() {
// //     let x = document.forms["myForm"]["fname"].value;
// //     if (x == "") {
// //       alert("Name must be filled out");
// //       return false;
// //     }
// //   }


let bulb = document.querySelector("#bulb");
bulb.style.backgroundColor = "red";
bulb.style.width = "150px";
bulb.style.height = "150px";
bulb.style.margin = "15px";

let btn = document.querySelector("button");
btn.style.margin = "20px";
// btn.addEventListener("click", function(){
//     bulb.style.backgroundColor = "blue";
// });
btn.addEventListener("click", switcha);

const switchOn = ()=>{
    bulb.style.backgroundColor = "blue";
}
var switchClick = 0;
function switcha(){

    
    if(switchClick == 0){
        bulb.style.backgroundColor = "blue";
        switchClick = 1;
    }

    else{
        bulb.style.backgroundColor = "orange";
        switchClick = 0;
    }
    
    
}