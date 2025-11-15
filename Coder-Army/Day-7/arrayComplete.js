//! Array;

//? jab ek baar se ek hi variable me ek se jyada value store karna ho

// let marks2 = 50;
// let marks1 = 100;
// let marks3 = 70;
// let marks4 = 80;


//? simple array declaration in the javascript

// let marks = [100,50,70,80,90];
// console.log(marks);
// console.log("length of the array : " + marks.length); // indexing start from the 0 and go to the end 4



//? Simple array operation

// let arr = [100,30,"Rohit",true];

// console.log(arr[2]); // acess the specfic index element

// arr[1] = 90; // change the value of the 1 index yahi proof ha ye mutuable hote ha iske kisi specific part ko change kar sakte ha 

// console.log(arr);
// console.log(typeof arr);





//? push : Insert element at end

// let arr = [100,30,"Rohit",true];

// arr.push(90);
// arr.push("Strike");

// console.log(arr);





//? pop operation: Delete element from end

// let arr = [100,30,"Rohit",true];

// arr.pop();
// console.log(arr);






//? array ke start me add karna 

// let arr = [100,30,"Rohit",true];

// arr.unshift(10);
// arr.unshift(50);
// console.log(arr);




//? delete kar sakta hu its delete the one element from the start 

// let arr = [100,30,"Rohit",true];

// arr.shift();
// arr.shift();
// console.log(arr);





//? Iterate over the array 

// let arr = [10,30,50,90,11];

// // traditional for loop
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for of loop --> it gives the element of the array one by one 
// for(let num of arr){
//     console.log(num);
// }


// for in loop --> it gives the index of the array 
// for (let e in arr) {
//   console.log(e);
// }







//? Object(non primitive): Copy by reference hote hai matlab memory address copy hote ha 
//? Primitive: Copy by value isme value copy hote ha 

// let arr = [10,30,50,90,11];
// let arr2 = arr;

// arr2.push(310);

// console.log(arr);






//! Array methods

//? slice method return karta ha array ka kuch part ||  array first index includes and second is excluded

// const arr = [10,30,50,90,11];
// const arr2 = arr.slice(2,5);
// console.log(arr2);





//? array splice method cut the part of the array 

// const arr = [10,30,50,90,11];

// const arr3 = arr.splice(1,3,"Rohit",19); // jo delete hua wo return karta ha 

// console.log(arr3);
// console.log(arr); // index 1 se chalu karke 3 delete aur 



//? array splice method ka use karke hm array ke bich me bhi kuch push kar sakte ha

// let arr2 = [12,89,2,32,1];
// arr2.splice(2,0,1111);
// console.log(arr2);




//? array me ek aur array push karna 

// const arr = [10,30,50,90,11];
// const arr2 = ["Rohit",11,true];

// arr.push(arr2);
// console.log(arr);



//? 2 ya usse jyada array ko concat karna ek me 

// const arr = [10,30,50,90,11];
// const arr2 = ["Rohit",11,true];
// const arr4 = [12,4,23];

// const arr3 = arr.concat(arr2,arr4);
// console.log(arr3);



//? ek array me 2 array store karna 

// const arr = [10,30,50,90,11];
// const arr2 = ["Rohit",11,true];
// const arr3 = [arr,arr2];
// console.log(arr3);



//? spread operator ye array ke sabhi element ko iterate karta ha 
//? ye array ke value ko kholta ha ek by ek 

// const arr = [10,30,50,90,11];
// const arr2 = ["Rohit",11,true];

// const arr3= [...arr,...arr2];
// console.log(arr3);



//? array methods 

const names = ["Alice", "Aahit","Bob","Mohit", "Charlie",];

// console.log(names.toString()); // retrun the string of all the array element 

// console.log(names.join("-")); // array ke sabhi element ko kisi specific seprater se alg karna 

// console.log(names.lastIndexOf("Bob")); // kisi element ka index khojne ke liye last se 

// console.log(names.includes("Bobs")); // check karne ke liye element present ha ya nhi 

// names.sort(); // array ko sort karne ke liye 
// names.reverse(); // array ko reverse karne ke liye

// console.log(names);




//? array sorting with multiple type element 

// const arr = [50,"Rohit","Mohan",true]; // all the element ko string me change karke phir uske first character ka compare hota ha utf16 ke value ke base pr 

// arr.sort();
// console.log(arr);




//? array sort in the reverse order and ascending and descesending 
//?  ascending order

// const arr = [10,40,31,71,5,11];

// arr.sort((a,b)=> b-a);
// console.log(arr)



//? array ko ascending order me karna 

// const arr = [10,40,31,71,5,11];

// arr.sort((a,b)=> b-a);
// console.log(arr)




//? array ko merger karna 

// const arr = [10,30,50,[40,90,[60,19,99],11], 80];

// const a = arr.flat(Infinity);
// console.log(a);

// console.log(arr[3][2][1]); // access the third index pr second element and 1 element 




//? array is a object and object has a property and method 

const a = [10,309,"Rohit",9.3, true];
a.name = "Moahn"; // isme ek property add kr rahe ha but isse array ke length me effect nhi padta aur na hi iteration me ye element print hota ha ye bs is array ka meta data ha 
a.len = 12;

console.log(a['name']);
console.log(a['len']);

