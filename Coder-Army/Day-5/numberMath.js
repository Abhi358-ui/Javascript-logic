
//! Number 
//? js me integer aise banta ha 

// let a = 10;
let b = 124.123;
// console.log(a);

console.log(b.toFixed(2)); // agr point ke baad 2 hi lena ho and it work only for float value
// console.log(typeof b.toFixed(1)); // isse b change nhi hoga ek string return krega

console.log(b.toPrecision(3)); // ye suru se 3 count krke dega it will work only for float value

// console.log(b.toString()); // ye number ko string kr deta ha 




//? toString() method kisi bhi datatype ko string me change kr deta ha 
// let arr = [12,4,2,3,121];
// console.log(arr.toString());



//? hum number ko new keyword se bhi create kr sakte ha 
//? ye dono alg alg location pr bne ha 
//? Primitive datatype me value copy hota ha aur non primitive me reference copy hota ha 

// let a = new Number(20); 
// let b = new Number(20);

// console.log(a == b); // object heap me alg alg location pr bante ha 
// console.log(a, typeof a);
// console.log(Boolean(new Number([]))); // because its checks the address of the stack and its present 





//? there is the Object is called Math

// console.log(Math.abs(-2));
// console.log(Math.PI);
// console.log(Math.SQRT2);


//? round the value
// console.log(Math.ceil(2.3));
// console.log(Math.floor(12.3));
// console.log(Math.round(3.5));
// console.log(Math.max(23,2,12,32));



//? random value generate karna 

// console.log(Math.round(Math.random()*10)); // 0 - 9
// console.log(Math.round(Math.random()*10+1)); // 1 - 10
// console.log(Math.floor(Math.random()*6+1)); // 1 - 6
// console.log(Math.floor(Math.random()*11+15)); // 15 - 25


// otp generator
// console.log(Math.floor(Math.random()*(9999-1000+1))+1000);


// create a random own function 
// hm num variable ko dynamic bna sakte ha jaise device ka time ka millisecond le lu 
// par ye otp me use nhi hota kyuki agr predict kr diya ki time de raha ha input me to koi bhi isko predict kr sakta ha 

// let num = 12;
// function rand() {
//   num = num * 231;
//   num = Math.sqrt(num)
//   num *= 234;
//   num /= 234;
//   let temp = Math.floor(num)
//   num = num - temp ;
//   return num;
// }
// console.log(rand());


