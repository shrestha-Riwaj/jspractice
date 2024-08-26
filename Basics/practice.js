const createPerson = (firstname, lastname, birthYear)=>{
    let age = 2024- Number(birthYear);
   const obj = {
        firstname:firstname,
        lastname: lastname,
        birthYear:birthYear
    }
    console.log(`Age: ${age}`);
    console.log(obj);
    console.log(`
    Welcome to the ABC Mr. ${firstname} ${lastname}. Your are quite young for someone who is ${age}`);
}

createPerson("Blank", "Zero", 1990);


const inc = ()=>{
    count =0;
    const counter= ()=>{
        count+=1;
        return count
    }
    return counter;
}

const counter = inc();
console.log(counter());
console.log(counter());