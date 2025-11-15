
//? Data structure in the js

// let arr = [12,4,23,4,23,12];

// let s1 = new Set(arr);
// console.log(s1);


// // to check the specific value is present

// console.log(s1.has(12));



// // to add the one value in the set

// s1.add(12);
// console.log(s1);


// // delete the one value from the set

// s1.delete(12);
// console.log(s1);




// // get the size the all the value 
// console.log(s1.size);





//? real usecase of the set

// let arr = ['ab@gmail','ff@gmail.com','gf@gmail','ab@gmail'];

// let set1 = new Set(arr);

// let uniqueElement = [...set1]
// console.log(uniqueElement);






//? iterate over the set 

// let set1 = new Set();

// set1.add(120);
// set1.add(23);
// set1.add(89);
// set1.add(34);

// for (let e of set1) {
//   console.log(e);
// }








//! Map the data structure
//? Map allow to create the your own key and value pair

// const map1 = new Map([
//   ['abhi',1],
//   ['lokesh',12],
//   [12,"pika"],
//   [[12,3,1],12],
//   [{12:"as"},12]
// ]);

// console.log(map1);


//? add a new value in the map
// map1.set([11,1111],true);
// console.log(map1);



//? get the any spefic key ka value
// console.log(map1.get(12));



//? get the size of the map
// console.log(map1.size);





//? iterate over the map

// const map1 = new Map([
//   ['abhi',1],
//   ['lokesh',12],
//   [12,"pika"],
//   [[12,3,1],12],
//   [{12:"as"},12]
// ]);

// for (let [key,value] of map1) {
//   console.log(key);
// }