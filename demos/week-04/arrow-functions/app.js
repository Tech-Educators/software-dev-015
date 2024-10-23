// regular function
function greet(username){
    console.log(`Hello ${username}!`)
}

// Arrow Function
const greet = (username) => {
    console.log(`Hello!${username}`)
}

//Regular Anonymous function
function (){
    console.log("Hello!")
}

//Arrow Function
()=>{
    console.log("Hello!")
}

button.addEventListner("click", function(){
    let count = 0;
    count += 1;
});

button.addEventListner("click", ()=> {
    let count = 0;
    count += 1;
});