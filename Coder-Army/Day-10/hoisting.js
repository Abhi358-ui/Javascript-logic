
//? javascript me code run hota ha to pahle Execution context banta ha 
//? ye 2 phase me hota ha 

//? 1. Memory allocation --> jitne bhi variable ha unko memory assign ho jata ha

//? 2. Execution phase --> second phas me usme ek by ek run hota ha 

//? hr function ke liye ek alg execution context banta ha aur function run hone ke baad memory se khatam ho jata ha 


// function add(n1,n2) { // it store in the heap because function is a object 
//     var sum = n1 + n2;
//     return sum;
// }

// console.log(add.length); // property of the function
// console.log(add.name); // property of the function
// console.log(add(2,3)); // calling the function





//? Execution phase first phase me bs memory assign ho jata ha to sbme undefined chal jata ha isliye hoistin me pahle undefined batata ha 

// console.log(a); // undefined
// var a = 10;
// var b = 20;
// console.log(a); // 10







//! Let const 

// let aur const me pahle memory assign hota ha aur wo temporal dead zone me chal jata ha aur ye uninitialized rahta ha tab tk ise koi access nhi kr sakta ha jab tak isme koi value assign n ho 

//? 1. Memory allocation
//? 2. a = <uninitialized> temporal dead zone>
//? 3. b = <uninitialized> temporal dead zone>
//? 4. Execution context 

// console.log(a);
// let a = 10;

// console.log(b);
// const b = 56;






// let a = 10;
// const b = 23;


// const addNumber = function(n1,n2) {
//     const sum = n1 + n2;
//     return sum;
// }

// const result = addNumber(a,b);
// console.log(result);

//? const aur let memory assign hone ke baad temporal dead zone me chal jata ha yahi reason ha ki function expression execute nhi hote declartion se pahle aur ye batata ha it is not a funtion