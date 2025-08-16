
//Dates

let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreateddate = new Date(2023,0,23);
// let myCreateddate = new Date(2023,0,23,5,3);
// let myCreateddate = new Date("2023-01-14");
let myCreateddate = new Date("01-14-2023");
console.log(myCreateddate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateddate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long"
})

