
//? function 

// console.log("Hello1");
// console.log("Hello2");
// f1() // pahle bhi call kr sakte ha 
// console.log("Hello3");


// function f1() {
//     console.log("function Hello");
// }

// f1() // function call ho raha h 
// f1()

// console.log("hello4");



//? hm function 4 tarike se bna sakte ha

// 1. Takes nothing return nothing
// 2. Takes nothing return something
// 3. Takes Something return nothing
// 4. Takes something return something

// function Pri(args) { // formal arquement
//     console.log("Hello", args);
// }
// Pri("Abhishek")
// Pri("Abhi") // actual arquement


// //? Example 2

// function Sum(a,b)
// {
//     return a+b;
// }

// let ans = Sum(12,22)
// console.log(ans);





//? Callback function

// f2(function() {
//     console.log("Hello");
// })

// function f2(fun)
// {
//     console.log("i am in f2");
//     fun()
// }




//? Web api

console.log("hello 1");

setTimeout(function () { // browser isko call karta hi nhi ha jab 3 second ho jata ha tab call hota ha

    console.log("function 1");

}, 0);

console.log("After settimeout");

setTimeout(function(){
    console.log("function 2");
},2000);

console.log("After function 2");

setTimeout(function(){
    console.log("Function 3");
},1000);

