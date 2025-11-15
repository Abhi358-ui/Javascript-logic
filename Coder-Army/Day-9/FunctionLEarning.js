
//! How to make function

//? function ki hm isliye bnate ha kyuki ek hi code baar baar na likhna pade
//? ek hi reusable block of code bna le aur usko jab jarurat pade call kr le 




//? function structure

// function greeting() {
//   console.log("Hello coder army");
// }

// // calling the function
// greeting();





//? reuseable function

// function addTwoNum(a,b) { // parameter
//   const sum = a + b;
//   console.log(sum);
// }

// addTwoNum(23,4); // arqument 
// addTwoNum(9,4);

// console.log(addTwoNum); // store the function decalration 





//? Return type function 

// function sum(a, b) {
//   const temp = a + b;
//   return temp;
// }

// console.log(sum(2,4));
// console.log(sum(3,5,3)); // no error if pass the extra arqument in the js function





//! default value of the function
//? agr hm value pass kr dete h to wo assign ho jata ha otherwise default value 0 assign ho jata ha 

// function sum(a, b, c=0, d=0) {
//   const temp = a + b + c + d;
//   return temp;
// }

// console.log(sum(2,4));
// console.log(sum(3,5,2));
// console.log(sum(4,2,11,1));






//! flexiable function with multiple parameter 

// function sum(...num) { // rest operator
//   let sum = 0;
//   for (let e of num) {
//     sum += e;
//   }
//   console.log(sum);
// }

// sum(23,4,12,4,2,523);



//? difference between rest operator and spread operator 

// const arr = [12,4,7,4,5,8];
// const arr2 = [23,6,85,34];

// // rest operator use kiya jata ha value ko catch karne ke liye 
// const [first,second,...other] = arr;
// console.log(first, second, other);

// // spread operator use kiya jata ha array aur object ko kholne ke liye
// const temp = [...arr,...arr2];
// console.log(temp);







//? funtion as a expression 
//? it does not support hoisting 

// const addTwoNum = function(a,b) {
//   return a+b;
// }
// console.log(addTwoNum(23,3));





//? hoisting

// add(23,4);
// function add(a,b) {
//   console.log(a+b);
// }






//! Arrow function 

// const add = (a,b) => {
//   return a+b;
// }

// const add2 = (n1,n2) => n1+n2;

// console.log(add2(23,4));
// console.log(add(9,4));


//? if there is one arqument then no use of the bracket
// const sqare = num => num*num;
// console.log(sqare(3));





//? if arrow function return the object 

// const obj = () => {name:"abhishek",age:23} // error 

// const obj = () => ({name:"abhishek",age:23});
// console.log(obj());




//? IIFE : Imediately invoked function 

// (function() {
//   console.log("hello from the iife");
// })();




//? function is used to create object


function Person(name, age) {
  this.name = name;
  this.age = age;
}