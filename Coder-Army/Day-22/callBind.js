
//! call, bind, apply

//! lexical environment ka matlab ha apnse se bahar aur apne se bahar jab tak mil nhi jata 

//? jab ham code run karte ha to wo ya to strict mode me run hota ha ya non strict mode me
//? by default non strict mode hota ha

// 'use strict'

// var a = 12;
// b = 123;
// console.log(a,b);


// function greet(name,name) { // ye bhi bug ha 
//   console.log(name,name);
// }

// greet("rohit","mohit");







//? browser me global object window hota ha jabki node environment me global object global hota ha
//? ek aisa bhi object ha jo node me global object ko point karta ha aur browser me bhi window object ko point karta ha : globalThis

// console.log(window);
// console.log(global);

// console.log(globalThis); // it work same in node or browser




//! Learn about this keyword

//? this keyword node environement me empty object {} ko point karta ha jabki browser me window object ko point karta ha 

// 'use strict'
// console.log(this);









//! Learn about function

//? instead of define inside the function we are declared in top to work with multiple object

// function greet() {
//   console.log(`hii ${this.name}`);
// }

// const user = {
//   name: "Abhi",
//   age: 23,
//   // greet: function() {
//   //   console.log(this.name); // flexiable value
//   //   // console.log(user.name); // hard code
//   // }
// }
// // user.greet() // here inside the user this point to the user object



// const obj2 = {
//   name: "ajay",
//   age:23
// }

// // obj2.greet = user.greet

// obj2.greet()





//? inside any function this keyword by default point to the global object

// function greet() {
//   console.log(`hii ${this}`);
// }

// greet()


//? inside any function in the strict mode greet function point to the nothing it is undefined

// 'use strict'

// function greets() {
//   console.log(this);
// }

// greets()












//? use the one function with multiple objects

// function greet() {
//   console.log(`hiii ${this.name}`);
// }

// function incrementAge(value,name) {
//   this.age += value;
//   this.name = name;
//   console.log(this.age);
//   console.log(this.name);
// }

// const user1 = {
//   name: "abhishek",
//   age: 23
// }

// const user2 = {
//   name: "Pankaj",
//   age: 23
// }

// greet.call(user2); // it says i call the greet and refer the this user2 object
// greet.call(user1); // it says i call the greet and refer the this user1 object

// incrementAge.call(user1, 5, "Mohan"); // first is the refer object and second is the value of the function that takes the incrementAge() 


//? same hi apply function leta ha bs ye array me arqument leta ha
// incrementAge.apply(user1, [4, "Ajay"]);


//? bind matlab ha kisi function ko kisi object se bind karke rakh dena future me use call kr sakte ha
// const incr = incrementAge.bind(user1, 2, "Jitesh");
// incr();









//! Using the class based

// class Person {

//   constructor(name,age) {
//     this.name = name;
//     this.age = age;
//   }

// }

//? when we create the object using the new keyword the object is pointed to the empty object and when we add the some property the this object is updated

//? this keyword point to the empty object

// const p1 = new Person("Ajay",21);
// console.log(p1);







//! Arrow function : this does not exist with the arrow function but wo lexical environment se leta ha to wo outer scope se leta ha aur outer scopme node me empty object hota ha aur browser me global object hota ha

//? inside the arrow function this keyword is point to the empty object inside the nodejs
//? inside the arrow function this keyword is point to the window object inside the browser
//? upper written rule are the same for the use strict and non strict mode

// 'use strict'

// console.log(this);

// const greet = () => {
//   console.log(this);
  
// }

// greet()







//! benefits of the arrow function

// 'use strict'

// const user = {
//   name: "Eng",
//   greet: function() {
//     // console.log(this);

//     const that = this;
//     function meet() {
//       console.log(this); // this refers to the global object when a normal function call itself and in the strict mode it point to the undefined

//       console.log(that); // when arrow function is not came
//     }
//     meet();
//   }
// }

// user.greet()






//! Example of the arrow function

//? ye jugadu tarika ha this ka use karke nested function me 

// const stopWatch = {
//   second: 0,
//   increment : function() {
//     const that = this;

//     setInterval(function(){
//       that.second++;
//       console.log(that.second);
//     },1000)
//   }
// }

// stopWatch.increment()



// const stopWatch = {
//   second: 0,
//   increment : function() {

//     setInterval(()=> {
//       this.second++;
//       console.log(this.second);
//     },1000)
//   }
// }

// stopWatch.increment()



//? jab hm ek object ke andar likhte ha this sidha to outside ka leta ha 

// console.log(this); // in node global object is the empty object {}
// const user = {
//   name: "abhishek",
//   greet: () => {
//     console.log(this); // point to the outside of the function objects
//   }
// }

// user.greet();





//? jab hm ek object bnate ha to wo ek context hota ha na ki scope hota ha 

// const exampleObject = {
//   // it is the context not the object
// }






//? this keyword ka behave jab hm ise dom manipulation me use karte ha

// const element = document.getElementById('first');

// element.addEventListener('click', function(){
//   console.log(this); // refer to the current element

// })

// 'use strict'

// element.addEventListener('click', ()=> {
//   console.log(this); // it has no any this so it takes the lexical scope and take from the global scope and point to the window object
// })




