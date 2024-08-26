// this

// const employee = {
//     fname: "Blank",
//     lname: "Zero",
//     getFullName: function(){
//         console.log(this);
//         console.log(`${this.fname} ${this.lname}`);
//     }
// }

// employee.getFullName();
// let detailList = employee.getFullName;
// detailList();

// call, apply
//  - gets executed then and there

// const employee = {
//     fname: "Blank",
//     lname: "Zero",
//     getFullName: function(city, country){
//         // console.log(this);
//         console.log(`${this.fname} ${this.lname} is from ${city}, ${country}`);
//     }
// }

// const customer = {
//     fname: "Alice",
//     lname: "White",
// }

// passing argument is different in call and apply.

// employee.getFullName.call(customer, "Kathmandu", "Nepal");
// employee.getFullName.apply(customer, ["Lalitpur", "Nepal"]);


const getFullName = function(city, country){
    console.log(`${this.fname} ${this.lname} is from ${city}, ${country}`);
}

const employee = {
        fname: "Blank",
        lname: "Zero",
    }

const customer = {
        fname: "Alice",
        lname: "White",
    }


// getFullName.apply(customer, ["Lalitpur", "Nepal"]);
// getFullName.call(employee, "kathmandu", "Nepal");

// bind
    // - creates a method which we will need to call to run

// data = getFullName.bind(customer);
// data("Somewhere", "Ocean")

let getDetail = document.getElementById("orange");
getDetail.addEventListener("click",
getFullName.bind(customer,"Kathmandu", "Nepal"));
getDetail.addEventListener("click",
getFullName.bind(employee,"Kathmandu", "Nepal"));