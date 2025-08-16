
//! functions 

//1) function declartion (named function)

// f1();
function f1() {
    console.log("i am f1");
}



// 2) function expression

// f2(); // error 
const f2 = function () {
    console.log("i am f2");
}

// f2();






//? 3) Arrow function


let fff = () => {
    console.log("i am f3");
}

fff();

const f4 = (user) => {
    return "hello " + user;
}

// console.log(f4("abhi"));





// function sayHi(fun) {
//     fun("abhishek");
// }

// sayHi((username) => {
//     console.log("hiii "+username);
// }) 





// default parameter 

// function f5 (username="unknown") {
//     console.log("Hello "+username);
// }

// f5();
// f5("navin");





//? anonymus function

// function f7(f) {
//     f();
// }

// f7(function () {
//     console.log("i am anonymus function");
// })







//? IIFE : imidiately invoked function expression

// jab function ko ek baar bs call karna ha uske baad use nhi karna tab bina naam ka function bnana chahiye

// (function (){
//     console.log("i am iife function");
// })();




//? arquements objects

// aap iska use krke bhi arguement ko access kr sakte ha 

// function f8() {
//     console.log(arguments['0'],arguments['1']);
// }

// f8(10,20);





// function ki sabhi argument ko print karna 

// function f9() {

//     for(let i in arguments)
//     {
//         console.log(arguments[i]);
//     }
// }

// f9(11,22,33,44,55);






//? constructor function

function Person (name,age) {

    // console.log(this); // function context present kr raha ha 
    this.name=name;
    this.age=age;
}

Person("amit",11)
let object1 = new Person("abhishek",12);
console.log(object1);





//? Generator function

function* counter(){
    yield 1; // yield keyword hr baar rokta ha function ko
    yield 7;
    yield 3;
}

const g = counter();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

// jab aap ek function bna lenge aur next next krke value generate krte jaiye

