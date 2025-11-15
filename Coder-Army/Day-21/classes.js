
//! Classes and object

//? Jab hame ek hi type ke multiple object banana ha jaise yaha obj1, obj2, obj3 ha aur iske andar ek functio jise mujhe baar baar likhna pad raha ha same code ko to isliye waise object bnane ke liye ham Class bnate ha

// let obj1 = {
//   name:"Abhishek",
//   greet: function() {
//     console.log("Hello jii " + this.name)
//   }
// }

// let obj2 = {
//   name:"Gopal",
//   greet: function() {
//     console.log("Hello jii " + this.name)
//   }
// }

// let obj3 = {
//   name:"Amit",
//   greet: function() {
//     console.log("Hello jii " + this.name)
//   }
// }



//? To ham sbse pahle apne object ka blueprint bna lete ha ki hmara object rahega kaise

class Person {

  constructor(name,age) {
    this.name = name; // it create the new properties called name
    this.age = age;
  }

  sayHii() {
    return `Hello jii ${this.name}`
  }
}



// createing the Object of the Person class

const person1 = new Person("Abhishek", 20);
const person2 = new Person("Amit", 21);

// console.log(person1); // it does not show the function sayHii because it create the Person name prototype and linked to the all person1, person2 object




//? Inherit the property from parent

// class Customer extends Person {

//   constructor(name,age,account,balance) {
//     super(name,age);
//     this.account = account
//     this.balance = balance
//   }

//   getBalance() {
//     return this.balance;
//   }
// }


// const customer1 = new Customer("Ajay", 20, 880127723, 1000);
// console.log(customer1);
// console.log(customer1.getBalance());





//? Object create method is used to create the same type methods because the newObject follow the objs Prototype

let objs = {
  name: "ajak",
  age:"20",
  greet: function() {
    console.log("Hello from the code");
  }
}

let newObject = Object.create(objs); // say create a object same like objs
newObject.account = 124212;

console.log(newObject.name);
newObject.greet();