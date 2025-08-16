
const a = [11,2,33,43]

// array bhi ek object ha bs isme hm value khud dete ha key alrady define rahta ha

// console.log(a);
// console.log(a[0]);
// console.log(a[4]);


// const p1={
//     name:"Abhi",
//     age:12
// };

// console.log(p1.age);
// console.log(typeof a);

// kisi array ke bich ka ek jagah chhor ke aage add karna
// a[5]=12;
// console.log(a);





// empty slot array

// const empty = [12,,33,21,,33]
// console.log(empty);
// console.log(empty.length);






//? hatrigenius array

// const diff = [12,"12",true,22.33];
// console.log(diff);





//? empty array

// const arr =[];
// console.log(arr);
// arr[0]=12;
// arr[1]=121;

// console.log(arr);






// array created with new keyword

// const cd = new Array(); // empty array
// console.log(cd);


// const dd = new Array(3); // array with 3 size
// console.log(dd);


// const arrs = new Array(12,33,43,11) // array with 4 element
// console.log(arrs);






//? Array element accessed

// let ar = [12,11,32,55,34,21,87,62,121];

// i=0;
// while(i<ar.length)
// {
//     console.log(ar[i]);
//     i++;
// }


// for (let i = 0; i < ar.length; i++) {
//     console.log(ar[i]);
    
// }



// for(let i in ar)
// {
//     console.log(i,ar[i]);
// }



// for(let v of ar)
// {
//     console.log(v);
// }




//? Modify array element

let ar = [12,11,32,55,34,21,87,62,121];


// console.log(ar)
// ar[2]=999;
// console.log(ar);



// for of loop element ka copy deta ha naki actual refernce

// for(let v of ar)
// {
//     v=v+5;
// }
// console.log(ar);





// for in loop se aap array element me changes kr sakte ha

for(let i in ar)
{
    ar[i]=ar[i]+4;
}
console.log(ar);