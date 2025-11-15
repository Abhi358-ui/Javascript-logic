
// array me index hota ha 
// ye immutable hota ha 

// String bnanane ke tarike

// 1. Methods

let s1 = "Abhishek"
let s2 = 'Abhishek'
let s3 = `Abhishek`
let s4 = new String("Abhishek")

// console.log(s1,s2,s3,s4);
// console.log(s1===s2);
// console.log(s1===s3);
// console.log(s1===s4); // value same ha but type alag ha


// // ''  ""  `` isse bnne walestring ko string literal kaha jata ha 

// console.log(typeof s1);
// console.log(typeof s4);


 



// string accessing methods

s1[0]="a" // string immutable hota ha isse change nhi kr sakte

console.log(s1[0]);
console.log(s1.charAt(0));





// Back tick string feature

let s5 = `"Abhishek"`
console.log(s5);
let a = 10;
let b = 20;
let sum = a+b;

console.log(`Sqaue of ${a} is ${a*a}`);
console.log(`Sum of ${a} and ${b} is ${a+b}`);
