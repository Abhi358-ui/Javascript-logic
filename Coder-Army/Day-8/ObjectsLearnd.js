
//! Object in the js

//? Object aise create karte ha 
//? Object key value pair me data store karta ha 
//? behind the sence object key is stored as a string


//? it is called object literal 
//? Object literal is a way to define a object using the curly bracket

// const user = {
//   name:"abhishek",
//   age:12,
//   emailID:"abhishekshek@gmail.com",
//   amount:3000,
//   "home address": "Jaipur", // it is useful when we store multi value name 
// }


// console.log(user);
// console.log(typeof user);





//? Object ki ek key ko acess aise karte ha 

// let user = {
//   name:"abhishek",
//   'home address':"banda samastipur bihar"
// }

// console.log(user.name)
// console.log(user['name']);
// console.log(user['home address']); // it is useful when key is stored as a multi value 



//? Object me ek key add karna 

// let user = {
//   name:"abhishek",
//   age:12
// }

// user.aadhar = 2321223;
// console.log(user);



//? Object ki kisi value ko update karna 

// let user = {
//   name:"abhishek",
//   age:12,
//   aadhar:1828494483482,
// }


// user.aadhar = 48858958;
// console.log(user);




//? Kisi object ki kisi key ko delete karna 

// let user = {
//   name:"abhishek",
//   amount:1212,
// }

// delete user.amount;
// console.log(user)






//? Copy the refernce of the object

// const user = {
//   name:"abhishek",
//   age:12,
//   emailID:"abhishekshek@gmail.com",
//   amount:3000,
//   "home address": "Jaipur"
// }

// const user2 = user; // refernce Copy

// user2.name = "abhi" // changes reflect in the user object also
// console.log(user);







//? object ki key aur value and entry ko access karna 

// const user = {
//   name:"abhishek",
//   age:12,
//   emailID:"abhishekshek@gmail.com",
//   amount:3000,
// }


// console.log(Object.keys(user)); // get the key of the object 
// console.log(Object.values(user));
// console.log(Object.entries(user));





//? iterate over the loop

// const user = {
//   name:"abhishek",
//   age:12,
//   emailID:"abhishekshek@gmail.com",
//   amount:3000,
// }

//? most important 
// for (let key in user) {
//   console.log(key, ":" , user[key]);
// }


//? using the forOf loop

// for (let key of Object.keys(user)) {
//   console.log(key);
// } 








//? Destructuring of the array

// const user = {
//   name:"abhishek",
//   age:12,
//   emailID:"abhishekshek@gmail.com",
//   amount:3000,
// }



// //! using the Destructuring

// const {name, age} = user;
// console.log(name, age);


// //! using the another name

// const {name:userName, age:userAge} = user;
// console.log(userName, userAge);









//? Array Destructuring : fist 2 element is dono var me chal jayega 

// let arr2 = [12,43,54,77];

// const [first, second] = arr2;

// console.log(first, second);







//? Ham object ke andar function bhi create kar sakte ha

// const user = {
//   name:"abhishek",
//   age:12,
//   emailID:"abhishekshek@gmail.com",
//   amount:3000,
//   greeting:function() {
//     console.log(`Hello from the greeting ${this.name}`);
//     return 10;
//   }
// }

// const va = user.greeting();
// console.log(va);



// //? create a another copy of the object

// const user2 = {
//   name:"abhi",
//   age:13,
//   account:12743493484
// }
// user2.greeting = user.greeting;
// user2.greeting()







//! Nested object

// const user = {
//   name:"abhishek",
//   age:12,
//   emailID:"abhishekshek@gmail.com",
//   amount:3000,
//   address: {
//     village:"banda",
//     district:"samastipur"
//   }
// }

// console.log(user.address);
// console.log(user.a)






//? Create a independent copy of the object
//? jab hm rest operator se copy bnate ha nested object me changes reflect hote ha 

// const user = {
//   name:"abhishek",
//   age:12,
//   address: {
//     city:"banda",
//     district:"samastipur"
//   }
// }

// //? shallow copy 
// const copy_of_the_user = {...user}
// copy_of_the_user.address.city = "abh" // it can reflect the both and it cannot changes the nested the object 

// console.log(copy_of_the_user);
// console.log(user);



// //? deep copy

// const anotherUser = structuredClone(user);
// anotherUser.address.city = "Gurgaw";

// console.log(user);
// console.log(anotherUser);









//? Object key as the number and that number is actually string 
//? behind the sence array aise hi create hota ha 

// const user = {
//   name:"abhishek",
//   1:122,
//   2:4343
// }

// // console.log(user.1); // error because behind the seen the key is the string
// console.log(user['1'])





//? internarlly array aise hi banta ha 

// let arr = [23,4,5,23,33];

// {
//   0 : 23,
//   1 : 4,
//   2 : 5,
//   3 : 23,
//   4 : 33
// }





//? Javascript me hm bs string hi keys ke roop me use kr sakte ha but 2015 me ek update aaya jisme hm symbol bhi keys ki tarah usr kr sakte ha 

// const id = Symbol("id");
// const user = {
//   id:23,
//   [id]:331639
// }

// console.log(user[id])
// console.log(user['id'])