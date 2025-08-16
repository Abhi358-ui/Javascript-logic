
//? map function in array
// map ek nya array return karta ha


// const a = [2,4,6,11,7];
// const newArray = a.map((e)=>{
//    return e+1;
// })

// console.log(a);
// console.log(newArray);



//? filter function

// const ar = [12,33,11,22,112,121];

// const newArray=ar.filter((e)=>{
//     return e%2==0;
// })

// console.log(newArray);






//? reduce function

// const arr = [12,33,44,51,33];

// let result = arr.reduce((s,e) => s+e,0); // yaha s ka initial value 0 diya ha aur e me array ka sabhi value one by one aa raha ha 

// console.log(result);






//? some other function 

// const a = [11,22,31,33];

// console.log(a.indexOf(11));
// console.log(a.indexOf(31));
// console.log(a.includes(11));
// console.log(a.join('  '));

// console.log(a.slice(2,3)); // 2 se 5 tak
// console.log(a.slice(6,2));






//? 2 ya jyada array ko jodna 

// let a = [11,22,3,111]
// let b = [3,8,4,8];
// let c = [12,21,34,31];

// let d = [...a,...b,...c];
// console.log(d);

// let e = a.concat(b,c);
// console.log(e);


//? reverse methods 

let a= [1,2,3,1,23,33];
console.log(a.reverse());




//? shallow copy

let ar = [12,21,32,11];
let newArr = ar;
ar[0]=1000;
ar.pop();

console.log(ar);
console.log(newArr);




