//? Javascript me variable aise bnate ha 

// let name = "Rohit";
// let age = 20;
// age = 30;  // isme reassign kr sakte ha 
// console.log(name , age);





//? c block scope hota ha ise block ke bahar access nhi kr sakte ha 

// if(true){
//     let c = 90; // block scope variable 
// }

// console.log(c); // error





//? const se bna variable me first baar hi kuch assign kr sakte ha 

// const account = 1234;
// account = 23; // error reassign

// console.log(account);






// ? Pahle aise variable banta tha isme redeclare bhi ho jata ha 
// var a = 10;
// var a = 20;
// var a; // value is not clear 
// console.log(a);





//? var block scope nhi hota ha 

// var a = 12;
// if(true){
//    var a = 20;
//    var var2 = 12;
// }
// console.log(a, var2);



// if (true) {
//     var scope = 12;
// }
// console.log(scope); // it can be accessed out of the block






//? var function scope hota ha 
// function fun(){
//     var c = 20; // local variable
// }
// console.log(c); // error aayega






//! data types

//* 1. primitive data type

//? number,string,boolean,undefined, null, bigint, symbol


//? number --> it can store the value from the 2^53-1 negative to the 2^53-1 tk

// let a = 10;
// let b = 2.36;
// console.log(a,b);
// console.log("b type is : " + typeof b);
// console.log("a type is : " + typeof a);



//? string

// let c = "Strike is coming";
// let d = 'Anjali';
// console.log(typeof d);
// console.log(c,d);

// let oneCharacterString = 'a';
// console.log(typeof oneCharacterString);



//? boolean

// let login = true;
// let f = false;
// console.log(typeof f);
// console.log(login, f);


//? undefined --> jab hm kuch assign nhi karte ha 

// let user;
// console.log(typeof user);
// // const p; // ise hm khali nhi choor sakte ha 

// console.log(user);





//? bigint --> bahut bara number store karne ke liye
// let num = 23216378261783213461n;
// console.log(typeof num);
// console.log(num);



//? null --> jab koi value exist nhi karti tab 
// let weather = null;
// console.log(typeof weather);

// let weather = current_weather("Dwarka")
// 25
// null
// undefined


//? symbol --> unique bnane ke liye 

// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(typeof id2);
// console.log(id2==id1);








//*  Non Primitive Data type
//? array, object, function

// let arr = [10,20,11,"Rohit",true];
// console.log(typeof arr);
// console.log(arr);




//? Object --> meaning full data bnane ke liye 
// Rohit 12312 18 gen

// let user = {
//     name:"Rohit",
//     account:12312,
//     age:18,
//     category:'gen'
// }

// console.log(user)
// console.log(typeof user);





//? hm function ko variable me store kr sakte ha it is called funtion expression
//? function expression is not support the this keyword inside the function 

// let s = function add(){
//     console.log("Hello");
// }

// s();
// console.log(typeof s);
// console.log(Boolean(s)); // true 




//? Primitive data type is immutable matlab ek baar memory me create ho gya to hm inhe change nhi kr sakte ha 

// ye paas by value hote ha 

// let a = 10;
// let b = a;

// b = 20; // yaha pr b 
// console.log(a,b);



// let str = "Rohit";
// str = "Mohan";
// // console.log(str[0])
// str[0] = "ah"; // hm str ke 0 index pr store kr rahe ha pr ho nhi raha ha ise pata chalta ha immutable ha  

// console.log(str);









//? Non primitive data type mutable hote ha 
//? pass by refernce hote ha ye isse memory optimized hota ha isliye isko aisa bnaya gya ha 

// let arr = [10,20,30,40];
// arr.push(90);
// arr[0] = 70; // ye change ho rahe ha ye mutuable hote ha 
// console.log(arr);




// //? ye paas by refernce hote ha isme location copy hota ha aur dono refernce variable ek hi memory address ko point karte ha 

// let obj ={
//     name:"Mohan",
//     age:20
// }

// let obj2 = obj;
// obj2.name = "Rohan";
// console.log(obj);
