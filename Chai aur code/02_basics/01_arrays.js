
//arrays

// const myArray = [0,1,2,3,4,5,true,"abhi"]
// const myArray = [0,1,2,3,4,5]
// console.log(myArray[2]);

// const myHeros =["abhi","kumar"]

// const arr = new Array(1,2,3,77)


//! Array methods

const arr = [77,44,85,94,56]
// arr.push(90)
// arr.push(900)
// arr.pop()

arr.unshift(0);
arr.shift();

// console.log(arr.includes(85));
// console.log(arr.indexOf(77));

// const brr = arr.join();

// console.log(arr);
// console.log(brr);
// console.log(typeof brr);


//slice splice

console.log("A " , arr);




// ye method last value ko count nhi krta ha aur ek nya array bnata ha aur real array me kuch bhi change nhi hota ha
const newArr = arr.slice(1,3)
console.log(newArr);

console.log("B " , arr);

// ye bhi slice ki tarha ha but ye last index bhi count karta ha value paas krte waqt aur ye real array me se element nikal leta ha 
const arr3 = arr.splice(1,3);
console.log(arr3);
console.log("C " , arr);