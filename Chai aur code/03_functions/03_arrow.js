
const user={
    username:"abh",
    price:22,
    welcome:function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
        
    }
}

// user.welcome();

// user.username ="sam"
// user.welcome();

// console.log(this);



// this sirf object me kaam karta ha na ki function me
// function chai()
// {
//     let username ="abhi"
//     // console.log(this);
//     console.log(this.username);

    
// }

// chai();


// const chai =function(){
//     let username = "Abhi"
//     console.log(this.username);
    
// }

// const chai =() => {
//     let username = "Abhi"
//     console.log(this.username);
//     console.log(this);
    
// }

// chai()


//! Arrow function

//? jab curli lagate ha to return likhna parta ha 
// const addTwo = (num1,num2)=> {
//     return num1+num2
// }

//? jabki wo nhi lagane pr sidha kr sakte ha
// const addTwo = (num1,num2)=>  num1+num2

// const addTwo = (num1,num2)=>  (num1+num2)

const addTwo = (num1,num2)=> ({username:"abhi"})

console.log(addTwo(2,3));













