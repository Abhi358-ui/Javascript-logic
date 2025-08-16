//? Primitive

// 7 types => String,Number,Boolean, null, undefined , Symbol , Bigint , 

//? jab variable ka type pura ek baar hi define hota ha 

const score =100;
const scoreValue = 100.3

const isLogedin = false;
const outSidetemp = null

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);

const bigInt = 22223254558455544589784n;



//? Reference type

//* Array , Object , Functions

const heros = ["abhi","abhi","roy"]


let obj ={
    name:"abhi",
    age:22
}


const myFun = function(){
    console.log("hello world");
}

console.log(typeof(myFun));


//***********Memory***************** */

// stack(primitive) , Heap(Non-primitive)



let myYoutubeName ="abhi"
let name = myYoutubeName
name="om"
console.log(name);
console.log(myYoutubeName);




let user={
    email:"abhi@gmail",
    upi:"abhi@upi"
}

let user2=user;
user2.email="sjsjdjjd";
console.log(user.email);
console.log(user2.email);


// stack copy deta ha jabki heap Reference deta ha

