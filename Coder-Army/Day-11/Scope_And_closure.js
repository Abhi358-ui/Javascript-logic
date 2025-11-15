//! Scope and closure

//? Global scope
//? Block scope
//? Function scope

//? niche ye dono variable global scope me ha inko koi bhi access kr sakta ha

// let a = 10;
// const b = 10;

// console.log(a,b); // accessed




//? it can be accessed in the block
// if(true) {
//   console.log(a,b);
// }



//? it can be accessed in the function
// function greet() {
//   console.log(a,b);
// }
// greet();

//? function ke andar jo variable bnata ha use functional scope kahte ha

// function hello() {
//   let a = 10;
// }

// console.log(a); // error

//? block ke andar jo variable banta ha use block scope variable kahte ha

// if (true) {
//   let a = 12;
// }

// console.log(a);



//? var are only support the function scope and it does not support the block scope

// if(true) {
//   var a = 12;
// }
// console.log(a); // accessed


// function add() {
//   var d = 23;
// }
// console.log(d); //error

//? function me jab hm koi variable bnate ha to pahle wo apne scope me khojta ha aur uske baad apne outer scope me aur waha nhi mile to uske bhi outer scope me aur waha bhi nhi mila to error

// let global = 12;

// function one() {
//   console.log(global);

//   function two() {
//     console.log(global);

//     function three() {
//       let global = 123;
//       console.log(global);
//     }
//     three()
//   }
//   two();
// }

// one();



//? jab ek function apne outer scope ke variable ko yaad karke rakhta ha jabki wo function ka execution complete ho chuka ha tab bhi to ise hi closure kahte ha

//? yaha jab dekhta ha increment function outer function ke variable ko use kr raha ha to use wo heap me store kr deta ha taki usko aage use kiya ja sake

// function incrementCounter() {
//   let count = 0;
//   function increment() { // yaad rakha ha count ko
//     count++;
//     return count;
//   }

//   return increment;
// }

// const counter = incrementCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());










//? jaise ek account ha to agr koi developer agr balance ko string na bna de

//? yaha developer ko balance ka pura access ha jisse wo kuch accedental changes kr sakta ha 

// const user = {
//   balance: 500,
//   deposit: function (amout) {
//     if (typeof amout === "number" && amout > 0) {
//       this.balance += amount;
//       return this.balance;
//     }
//   },
//   withdraw: function (amount) {
//     if (typeof amount === "number" && amount <= this.balance) {
//       this.balance -= amount;
//       return this.balance;
//     }
//   },
//   getBalance: function () {
//     return this.balance;
//   },
// };

// user.withdraw('uu');
// console.log(user.getBalance());




//? make the balance variable private here is the closure is the implemented

// function createAccount() {

//   let balance= 500;

//   const user = {
//   deposit: function (amount) {
//     if (typeof amount === "number" && amount > 0) {
//       balance += amount;
//       return balance;
//     }
//   },
//   withdraw: function (amount) {
//     if (typeof amount === "number" && amount <= balance) {
//       balance -= amount;
//       return balance;
//     }
//   },
//   getBalance: function () {
//     return balance;
//   },
// };

// return user;

// }


// const user1 = createAccount();
// const user2 = createAccount();

// user2.deposit(1200);

// console.log(user2.getBalance());








//? Higher order function

//? jab ek function ke andar ek function hota ha to parent function ko hm Higher order function kahte ha 

function double(value) {

  return function(v) { // inner function yaad rakha ha value ise hi closure kahte ha 
    console.log(value++ * v);
  }
}

const output = double(2);
output(2); // 4
output(2); // 6