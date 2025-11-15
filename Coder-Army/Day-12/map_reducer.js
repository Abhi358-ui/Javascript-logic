
//? Array methods like reduce map filter 


//? forEach method that is used to iterate over the Array

// const arr = [12,4,2,3,"abhi"];

// arr.forEach((v,idx,arr) => {
//   console.log(v, idx, arr);
// })

//? use case of the forEach function

// let arr = [12,4,6,7,9];

// let sum = 0;
// arr.forEach((v) => {
//   sum = sum + v;
// })
// console.log(sum);







//? filter is used to find the specific element that satisfied the condition

// let arr = [12,4,6,23,634,24]

// let ans = arr.filter((v) => {
//   return v>20;
// })

// console.log(ans);





//? create your own filter method
//? array me sabhi method prototype me hota ha 
//? ye aise nhi bnate kyuki agr future me js koi aisa feature leke aa gyi jiska naam filtering ho to dikkat ho sakta ha 

// let arr = [12,4,67,34,33];

// Array.prototype.filtering = function(callback) {
//   let ans = [];
//   for (let e of this) {
//     if(callback(e)) {
//       ans.push(e);
//     }
//   }
  
//   return ans;
// }

// console.log(arr.filtering((x) => {
//   return x>50;
// }));









//? map() ka kaam sabhi element ka ko hi check karna hota ha aur sabhi element return hoga hi chahe kcuh bhi ho jaye 

// let arr = [12,4,6,8,94,24,24];

// let result = arr.map((v) => {
//   return v+2;
// })

// console.log(result);



//? real use of the map product ka bs name aur discount lena ha to aise hoga 

const data = require('./data')

let newData = data.map((product) => (
  {name:product.name,
    discount:product.discount
  }
))

console.log(newData);











//? reduce() function hota ha value ko ek sath karna ke liye jaise array ke sabhi element ka sum karna ha 

// let arr = [23,4,6,8,23,3,3,23];

// let sum = arr.reduce((accumelator,currItem) => {
//   return accumelator+currItem;
// },"ll");

// console.log(sum);
