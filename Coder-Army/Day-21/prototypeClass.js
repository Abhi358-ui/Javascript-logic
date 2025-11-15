
//! Prototype and classes

// const obj = {
//   name:"Abhishek",
//   age:20,
//   greet: function() {
//     console.log("Hello jii");
//   }
// };

// console.log(obj.name);
// obj.greet();

//? we are not creating the hasOwnProperty method but it is not present
// console.log(obj.hasOwnProperty("namea"));
// console.log(obj.toString());



//? aise hi array me ham kuch bhi function add nhi karte ha but wo available rahta ha 

// const array = [12,3,45];
// console.log(array.length);



//? create the proto between two object

const obj = {
  name:"Abhishek",
  age:20,
  greet: function() {
    console.log("Hello jii");
  }
};

const obj2 = {
  account:30
}

//? ye link create hua ha obj aur obj2 ke sath yahi ha prototype create karna 

//? koi bhi object Object.prototype se link rahta ha aur wo sara method usi se lata ha 

obj2.__proto__ = obj;

console.log(obj2.name);