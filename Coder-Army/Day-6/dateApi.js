
//! date api

// const now = new Date();

// console.log(now); // it show the utc time and hm aage ha utc se 5:30 hours 

// //? get the time of the current local aur ye time device se leta ha 
// console.log(now.toString());

// //? show the time in the utc format
// console.log(now.toISOString());

// //? to show the locale time and data
// console.log(now.toLocaleString());


// //? to get the today day
// console.log(now.getDay()); // monday-1, tuesday-2


// //? to get the date 
// console.log(now.getDate());

// //? get the full year
// console.log(now.getFullYear());

// //? get the month 
// console.log(now.getMonth()); // jan-0, feb-1

// //? get the hours
// console.log(now.getHours());

// //? get the seconds 
// console.log(now.getSeconds());











//? create the custom date

// const customDate = new Date(2022,0,12,14,23,23,123);

// console.log(customDate);
// console.log(customDate.toString());
// console.log(customDate.getDay());







//? create the millisecond from the 1 jan 1970 iska use ye ha ye hr jagah same rahta ha ise timestamp kahte ha 

const nows = Date.now();

console.log(nows); // timestamp

let dates = new Date(nows); // convert the timestamp into local time 

console.log(dates); // give the utc time 
console.log(dates.toString()); // give the locale time 
console.log(dates.getDate());
