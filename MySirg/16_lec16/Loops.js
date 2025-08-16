

// iteratavie control statement

// 1. while loop

// let x = 1;

// while(x<=5) {
// 	console.log("hello")
// 	console.log(x);
// 	x++;
// }




// 2. do while loop
//?  while me condition 5 baar check ho raha ha 
// let i = 1;

// do{
// 	console.log(i);
// 	i++;
// }while(i<=5);





// 3. for loop

// for (let i=1; i<=10; i++)
// {
// 	console.log(i)
// }






// 4. for in loop

//? ye loop utna baar chalega jitna object me keys ha

// const p1 = {
// 	name:"abhi",
// 	age:12,
// 	city:"Bhopal",
// 	f1:function(){
// 		console.log("Hello");
// 	}
// };

// for (let i in p1)
// {
// 	console.log(i,p1[i]);
// }


//? example 2

// let arr=[12,33,12,11,223,33];
// for (let i in arr)
// {
// 	console.log(i,arr[i]);
// }







// 4. for of loop
let arr = [11, 32, 34, 12, 11];
for (const i of arr) {
	console.log(i);
}