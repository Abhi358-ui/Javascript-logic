
// let d1 = new Date();

// console.log(d1)

// let d2 = new Date('2025-05-20')

// console.log(d2)


// // 0 based counting 
// let d3 = new Date(2025,4,22)
// console.log(d3)

// console.log(d3.getDay(), d3.toDateString())
// console.log(d3.getDay(), d3.toTimeString())



// function

// console.log(d1.getFullYear())
// console.log(d1.getMonth())
// console.log(d1.getDate())
// console.log(d1.getDay())

// console.log("Hours :",Math.trunc(d1.getTime()/1000/60/60/24))

// console.log(d1.getHours())
// console.log(d1.getMinutes())
// console.log(d1.getSeconds())






let d5 = new Date('2006-06-20');
let d6 = new Date('2022-06-20');

let ms = d6-d5;
console.log(ms/1000/60/60/24)

console.log(d6.toLocaleString('default',{
	weekday:'long',
	day:'2-digit',
	month:'short',
	year:'numeric'
}));

console.log(d6.toLocaleTimeString());
console.log(d6.toLocaleDateString());