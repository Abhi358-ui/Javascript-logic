
//? ye single thread se execute hoga ek ke baad ek

// console.log("first");
// console.log("second");
// console.log("third");



//? another example of the single threaded

// console.log("first");

// let sum = 0;
// for (let i=0; i<100000000; i++) {
//   sum += i;
// }

// console.log(sum);
// console.log("last");




//? another example of the asynchronas 
//? yaha timeout kaun count kr raha ha agr javascript kar raha ha to wo phir single threaded kaise hua

// console.log("start");

// setTimeout(() => { // it is a api of the js
//   console.log("time out executed")
// },5000);

// console.log("end");







//? api call it fullfill the some task and it is the same like a function

// function Hello() {
//   console.log("Hello jii");
// }

// Hello();







//? fetch the data from the other server

console.log("start");

fetch("https://api.github.com/users").then((data)=> {
  console.log("data fetched");
  console.log(data);
});


console.log("end");

